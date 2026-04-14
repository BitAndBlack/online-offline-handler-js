[![npm version](https://badge.fury.io/js/bitandblack-online-offline-handler.svg)](https://badge.fury.io/js/bitandblack-online-offline-handler)

<p align="center">
    <a href="https://www.bitandblack.com" target="_blank">
        <img src="https://www.bitandblack.com/build/images/BitAndBlack-Logo-Full.png" alt="Bit&Black Logo" width="400">
    </a>
</p>

# Bit&Black Online/Offline Handler

A lightweight browser utility to watch and react to online/offline network connection changes.

This library is made for the use with Node and also available as an ES module.

## Installation

Add the Online Offline Handler to your project by running

```bash
$ npm install bitandblack-online-offline-handler
```

Or use whatever tool you want.

## Usage

Import the [`NetworkConnectionWatcher`](./src/NetworkConnectionWatcher.ts) into your project:

```typescript
import { NetworkConnectionWatcher } from "bitandblack-online-offline-handler";
```

Create a new instance and register your callbacks:

```typescript
const networkConnectionWatcher = new NetworkConnectionWatcher();

networkConnectionWatcher
    .setOnGoingOnlineCallback((event) => {
        console.log("Back online!", event);
    })
    .setOnGoingOfflineCallback((event) => {
        console.log("Gone offline!", event);
    })
;
```

You can also check the current connection state at any time:

```typescript
if (true === networkConnectionWatcher.isOnline()) {
    console.log("Currently online.");
} else {
    console.log("Currently offline.");
}
```

## API

### `new NetworkConnectionWatcher()`

Creates a new NetworkConnectionWatcher instance and immediately starts listening for `online` and `offline` window events.

### `isOnline(): boolean`

Returns `true` if the browser is currently online, `false` otherwise.

### `isOffline(): boolean`

The opposite: Returns `false` if the browser is currently online, `true` otherwise.

### `setOnGoingOnlineCallback(callback: (event: Event) => void): this`

Registers a callback that is invoked when the browser transitions to an online state. Returns the watcher instance to allow method chaining.

### `setOnGoingOfflineCallback(callback: (event: Event) => void): this`

Registers a callback that is invoked when the browser transitions to an offline state. Returns the watcher instance to allow method chaining.

## Contact

If you have any questions, feel free to contact us under [hello@bitandblack.com](mailto:hello@bitandblack.com).

Further information about Bit&Black can be found at [www.bitandblack.com](https://www.bitandblack.com).
