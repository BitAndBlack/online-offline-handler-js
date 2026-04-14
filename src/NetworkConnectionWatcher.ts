/*!
 *  Bit&Black Online/Offline Handler
 *
 *  @copyright Copyright (c) Bit&Black
 *  @author Tobias Köngeter <hello@bitandblack.com>
 *  @link https://www.bitandblack.com
 */

type OnGoingOnlineCallback = (event: Event) => void;
type OnGoingOfflineCallback = (event: Event) => void;

class NetworkConnectionWatcher {
    /**
     * @param {Event} _event
     * @private
     */
    private _onGoingOnlineCallback: OnGoingOnlineCallback = (_event: Event) => {};

    /**
     * @param {Event} _event
     * @private
     */
    private _onGoingOfflineCallback: OnGoingOfflineCallback = (_event: Event) => {};

    constructor() {
        window.addEventListener("online", (event: Event) => {
            this._onGoingOnlineCallback(event);
        });

        window.addEventListener("offline", (event: Event) => {
            this._onGoingOfflineCallback(event);
        });
    }

    /**
     * Returns whether the browser is currently online.
     *
     * @return boolean
     */
    isOnline(): boolean {
        return window.navigator.onLine;
    }

    /**
     * Returns whether the browser is currently offline.
     *
     * @return boolean
     */
    isOffline(): boolean {
        return false === this.isOnline();
    }

    /**
     * Sets the callback that is called when the browser goes online.
     *
     * @param {OnGoingOnlineCallback} onGoingOnlineCallback
     * @return this
     */
    setOnGoingOnlineCallback(onGoingOnlineCallback: OnGoingOnlineCallback): this {
        this._onGoingOnlineCallback = onGoingOnlineCallback;
        return this;
    }

    /**
     * Sets the callback that is called when the browser goes offline.
     *
     * @param {OnGoingOfflineCallback} onGoingOfflineCallback
     * @return this
     */
    setOnGoingOfflineCallback(onGoingOfflineCallback: OnGoingOfflineCallback): this {
        this._onGoingOfflineCallback = onGoingOfflineCallback;
        return this;
    }
}

export type { OnGoingOnlineCallback, OnGoingOfflineCallback };
export { NetworkConnectionWatcher };
