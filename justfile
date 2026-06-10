# Build the Turncoats Svelte app to static HTML
default: build

# Install dependencies
install:
    npm install

# Build to static HTML in dist/
build: install
    npx vite build

# Dev server with hot reload
dev: install
    npx vite

# Preview the built static output
preview:
    npx vite preview

# Clean build artifacts
clean:
    rm -rf dist node_modules

# Open the built index.html directly
open:
    xdg-open dist/index.html || open dist/index.html
