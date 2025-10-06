#!/bin/bash

# Deployment script for cloud platforms (Railway, Render, Fly.io, etc.)
# This script optimizes the build process for production deployment

set -e

echo "🚀 Starting production build for cloud deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build the application
echo "🔨 Building application..."
pnpm run build

# Verify build output
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📊 Build output:"
ls -la dist/

echo ""
echo "🌟 Ready for deployment!"
echo "📋 Next steps:"
echo "   - Railway: Connect your repository and auto-deploy will work"
echo "   - Render: Link your repository and use this Dockerfile"
echo "   - Fly.io: Use 'fly launch' or deploy with 'fly deploy'"
echo ""
echo "🔧 Environment variables you might need:"
echo "   - NODE_ENV=production (usually set automatically)"
echo "   - PORT=10000 (for Railway, or use their default)"
