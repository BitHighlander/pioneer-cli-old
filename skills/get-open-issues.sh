#!/bin/bash

# Check if the directory is a git repository
if [ -d .git ] || git rev-parse --git-dir > /dev/null 2>&1; then
    # Get the URL of the upstream remote
    remote_url=$(git remote -v | grep "(upstream)" | awk '{print $2}')

    if [[ -n $remote_url ]]; then
        echo "The upstream URL of the current repository is: $remote_url"
    else
        echo "No upstream remote found for this repository."
    fi
else
    echo "This directory is not a Git repository."
fi
