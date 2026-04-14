/*!
 *  Bit&Black Online/Offline Handler
 *
 *  @copyright Copyright (c) Bit&Black
 *  @author Tobias Köngeter <hello@bitandblack.com>
 *  @link https://www.bitandblack.com
 */
class NetworkConnectionWatcher {
    constructor() {
        /**
         * @param {Event} _event
         * @private
         */
        this._onGoingOnlineCallback = (_event) => { };
        /**
         * @param {Event} _event
         * @private
         */
        this._onGoingOfflineCallback = (_event) => { };
        window.addEventListener("online", (event) => {
            this._onGoingOnlineCallback(event);
        });
        window.addEventListener("offline", (event) => {
            this._onGoingOfflineCallback(event);
        });
    }
    /**
     * Returns whether the browser is currently online.
     *
     * @return boolean
     */
    isOnline() {
        return window.navigator.onLine;
    }
    /**
     * Returns whether the browser is currently offline.
     *
     * @return boolean
     */
    isOffline() {
        return false === this.isOnline();
    }
    /**
     * Sets the callback that is called when the browser goes online.
     *
     * @param {OnGoingOnlineCallback} onGoingOnlineCallback
     * @return this
     */
    setOnGoingOnlineCallback(onGoingOnlineCallback) {
        this._onGoingOnlineCallback = onGoingOnlineCallback;
        return this;
    }
    /**
     * Sets the callback that is called when the browser goes offline.
     *
     * @param {OnGoingOfflineCallback} onGoingOfflineCallback
     * @return this
     */
    setOnGoingOfflineCallback(onGoingOfflineCallback) {
        this._onGoingOfflineCallback = onGoingOfflineCallback;
        return this;
    }
}
export { NetworkConnectionWatcher };
