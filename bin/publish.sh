#!/bin/bash

# Automatize steps necessary for publication on the npm registry.

# Locations
PROJECT_DIR="../"
NODE_MODULES_DIR="node_modules"
NVM_DIR="$HOME/.nvm"
PACKAGE_VERSION=$(jq -r .version package.json)
PACKAGE_NAME=$(jq -r .name package.json)

# From this point on, exit on any errors
set -e

# Get current branch name
BRANCH_NAME=$(git describe --contains --all HEAD)

# Publish only from master branch
if [ "$BRANCH_NAME" = "master" ]; then
    echo "Git branch is master"
else
    echo "Git branch is NOT master!"
    exit 1
fi

# Publish only from a clear Git working directory
if output=$(git status --porcelain) && [ -z "$output" ]; then
    echo "Git working tree is clean"
else
    echo "Git working tree is NOT clean!"
    exit 1
fi

# Publish from the latest master
BRANCH_UPDATE_NEEDED=0
git remote update && git status -uno | grep -q 'Your branch is behind' && BRANCH_UPDATE_NEEDED=1
if [ $BRANCH_UPDATE_NEEDED = 1 ]; then
    read -r -p "Branch is behind, you should publish from the latest master! Do you want pull and continue [y/n]" RESPONSE
    if [ "$RESPONSE" = "y" ]; then
        git pull
    fi
else
    echo "Branch is up-to-date"
fi

# Remove node_module dependencies
echo "Cleaning..."
cd $PROJECT_DIR
if [ -d $NODE_MODULES_DIR ]; then
    echo "Deleting node_modules..."
    if rm -rf $NODE_MODULES_DIR; then
        echo "Cleaning node_modules succeed"
    fi
else
    echo "Directory node_modules not found"
fi

# Install and further cleaning
echo "Installing dependencies..."
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use "$*"
npm install
echo "Installing succeed"

echo "Cleaning the previous build..."
npm run clean
echo "Cleaning the previous build succeed"

echo "Removing previous tarballs ..."
rm "$PACKAGE_NAME*.tgz" || true
echo "Removing previous tarballs succeed"

# Build and pack
echo "Building..."
npm run build:prod
echo "Building succeed"

echo "Packaging..."
npm pack
echo "Packaging succeed"

# Authorize, publish, tag repository
echo "Sign in and publish on npm"
npm login
if npm publish --access public; then
    echo "Project was published to https://www.npmjs.com/"

    # Tag repository based on package.json version found
    echo "Tagging repository..."
    git tag "$PACKAGE_NAME-$PACKAGE_VERSION"
    if git push origin --tags; then
	echo "Tagging repository succeed"
    fi
fi
