#!/bin/bash

# ============================================
# Code Connect Setup Script for MRS Design System
# ============================================
# This script copies the Code Connect files to your repository
# and sets up the necessary configuration.
#
# Usage: ./setup-code-connect.sh /path/to/mrs-ui
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if repository path is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide the path to your mrs-ui repository${NC}"
    echo "Usage: ./setup-code-connect.sh /path/to/mrs-ui"
    exit 1
fi

REPO_PATH="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Verify the repository exists
if [ ! -d "$REPO_PATH" ]; then
    echo -e "${RED}Error: Directory $REPO_PATH does not exist${NC}"
    exit 1
fi

# Verify it's the correct repository (has src/components)
if [ ! -d "$REPO_PATH/src/components" ]; then
    echo -e "${RED}Error: $REPO_PATH doesn't appear to be the mrs-ui repository${NC}"
    echo "Expected to find: src/components directory"
    exit 1
fi

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Code Connect Setup for MRS Design System  ${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""

# Step 1: Copy figma.config.json
echo -e "${YELLOW}Step 1: Copying figma.config.json...${NC}"
cp "$SCRIPT_DIR/figma.config.json" "$REPO_PATH/"
echo -e "${GREEN}✓ figma.config.json copied${NC}"

# Step 2: Copy atom components
echo -e "${YELLOW}Step 2: Copying atom components...${NC}"
ATOMS_DIR="$REPO_PATH/src/components/atoms"
for file in "$SCRIPT_DIR/components/atoms/"*.figma.tsx; do
    filename=$(basename "$file" .figma.tsx)
    target_dir="$ATOMS_DIR/$filename"
    if [ -d "$target_dir" ]; then
        cp "$file" "$target_dir/"
        echo -e "  ${GREEN}✓${NC} $filename.figma.tsx"
    else
        echo -e "  ${YELLOW}⚠${NC} Skipping $filename (directory not found)"
    fi
done

# Step 3: Copy molecule components
echo -e "${YELLOW}Step 3: Copying molecule components...${NC}"
MOLECULES_DIR="$REPO_PATH/src/components/molecules"
for file in "$SCRIPT_DIR/components/molecules/"*.figma.tsx; do
    filename=$(basename "$file" .figma.tsx)
    target_dir="$MOLECULES_DIR/$filename"
    if [ -d "$target_dir" ]; then
        cp "$file" "$target_dir/"
        echo -e "  ${GREEN}✓${NC} $filename.figma.tsx"
    else
        echo -e "  ${YELLOW}⚠${NC} Skipping $filename (directory not found)"
    fi
done

# Step 4: Copy organism components
echo -e "${YELLOW}Step 4: Copying organism components...${NC}"
ORGANISMS_DIR="$REPO_PATH/src/components/organisms"
for file in "$SCRIPT_DIR/components/organisms/"*.figma.tsx; do
    filename=$(basename "$file" .figma.tsx)
    target_dir="$ORGANISMS_DIR/$filename"
    if [ -d "$target_dir" ]; then
        cp "$file" "$target_dir/"
        echo -e "  ${GREEN}✓${NC} $filename.figma.tsx"
    else
        echo -e "  ${YELLOW}⚠${NC} Skipping $filename (directory not found)"
    fi
done

echo ""
echo -e "${BLUE}============================================${NC}"
echo -e "${GREEN}✓ Setup complete!${NC}"
echo -e "${BLUE}============================================${NC}"
echo ""
echo -e "Next steps:"
echo -e "  1. Install Code Connect: ${YELLOW}npm install --save-dev @figma/code-connect${NC}"
echo -e "  2. Set your Figma token: ${YELLOW}export FIGMA_ACCESS_TOKEN='your-token'${NC}"
echo -e "  3. Verify setup: ${YELLOW}npx figma connect parse${NC}"
echo -e "  4. Publish mappings: ${YELLOW}npx figma connect publish${NC}"
echo ""
echo -e "For detailed instructions, see: ${BLUE}CODE_CONNECT_SETUP.md${NC}"
