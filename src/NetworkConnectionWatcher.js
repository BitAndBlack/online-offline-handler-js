/*!
 *  Bit&Black Online/Offline Handler
 *
 *  @copyright Copyright (c) Bit&Black
 *  @author Tobias Köngeter <hello@bitandblack.com>
 *  @link https://www.bitandblack.com
 */
class NetworkConnectionWatcher {
    /**
     * @param {Event} _event
     * @private
     */
    _onGoingOnlineCallback = (_event) => { };
    /**
     * @param {Event} _event
     * @private
     */
    _onGoingOfflineCallback = (_event) => { };
    constructor() {
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
