# SPResearch
Reverse engineering/researching straw.page's new drawing gimmick system and its compression/encryption.

## Overview
Straw.page recently re-enabled its drawing gimmick feature, introducing a new system that leverages WebSockets to convert user drawings into images. The system relies on an obfuscated JavaScript script that transmits encrypted data to the straw.page server via a WebSocket connection.

## WebSocket Endpoint
- **Base URL**: `wss://gimmick.straw.page/ws`

## Canvas Libs
- **Drawing box** `https://cdn.jsdelivr.net/npm/konva@8.3.2/konva.min.js`
