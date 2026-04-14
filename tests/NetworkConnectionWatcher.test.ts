/*!
 *  Bit&Black Online/Offline Handler
 *
 *  @copyright Copyright (c) Bit&Black
 *  @author Tobias Köngeter <hello@bitandblack.com>
 *  @link https://www.bitandblack.com
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import { NetworkConnectionWatcher } from "../src/NetworkConnectionWatcher";

describe("NetworkConnectionWatcher", () => {
    let watcher: NetworkConnectionWatcher;

    beforeEach(() => {
        watcher = new NetworkConnectionWatcher();
    });

    describe("isOnline()", () => {
        it("returns true when navigator.onLine is true", () => {
            Object.defineProperty(window.navigator, "onLine", {
                value: true,
                writable: true,
                configurable: true,
            });

            expect(watcher.isOnline()).toBe(true);
        });

        it("returns false when navigator.onLine is false", () => {
            Object.defineProperty(window.navigator, "onLine", {
                value: false,
                writable: true,
                configurable: true,
            });

            expect(watcher.isOnline()).toBe(false);
        });
    });

    describe("isOffline()", () => {
        it("returns false when navigator.onLine is true", () => {
            Object.defineProperty(window.navigator, "onLine", {
                value: true,
                writable: true,
                configurable: true,
            });

            expect(watcher.isOffline()).toBe(false);
        });

        it("returns true when navigator.onLine is false", () => {
            Object.defineProperty(window.navigator, "onLine", {
                value: false,
                writable: true,
                configurable: true,
            });

            expect(watcher.isOffline()).toBe(true);
        });
    });

    describe("setOnGoingOnlineCallback()", () => {
        it("registers a callback that is called when the browser goes online", () => {
            const callback = vi.fn();

            watcher.setOnGoingOnlineCallback(callback);

            window.dispatchEvent(new Event("online"));

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(expect.any(Event));
        });

        it("replaces a previously registered online callback", () => {
            const firstCallback = vi.fn();
            const secondCallback = vi.fn();

            watcher.setOnGoingOnlineCallback(firstCallback);
            watcher.setOnGoingOnlineCallback(secondCallback);

            window.dispatchEvent(new Event("online"));

            expect(firstCallback).not.toHaveBeenCalled();
            expect(secondCallback).toHaveBeenCalledTimes(1);
        });
    });

    describe("setOnGoingOfflineCallback()", () => {
        it("registers a callback that is called when the browser goes offline", () => {
            const callback = vi.fn();

            watcher.setOnGoingOfflineCallback(callback);

            window.dispatchEvent(new Event("offline"));

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(expect.any(Event));
        });

        it("replaces a previously registered offline callback", () => {
            const firstCallback = vi.fn();
            const secondCallback = vi.fn();

            watcher.setOnGoingOfflineCallback(firstCallback);
            watcher.setOnGoingOfflineCallback(secondCallback);

            window.dispatchEvent(new Event("offline"));

            expect(firstCallback).not.toHaveBeenCalled();
            expect(secondCallback).toHaveBeenCalledTimes(1);
        });
    });

    describe("default behaviour", () => {
        it("does not throw when online event fires without a callback set", () => {
            expect(() => {
                window.dispatchEvent(new Event("online"));
            }).not.toThrow();
        });

        it("does not throw when offline event fires without a callback set", () => {
            expect(() => {
                window.dispatchEvent(new Event("offline"));
            }).not.toThrow();
        });
    });
});
