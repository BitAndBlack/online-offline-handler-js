/*!
 *  Bit&Black Online/Offline Handler
 *
 *  @copyright Copyright (c) Bit&Black
 *  @author Tobias Köngeter <hello@bitandblack.com>
 *  @link https://www.bitandblack.com
 */
type OnGoingOnlineCallback = (event: Event) => void;
type OnGoingOfflineCallback = (event: Event) => void;
declare class NetworkConnectionWatcher {
    /**
     * @param {Event} _event
     * @private
     */
    private _onGoingOnlineCallback;
    /**
     * @param {Event} _event
     * @private
     */
    private _onGoingOfflineCallback;
    constructor();
    /**
     * Returns whether the browser is currently online.
     *
     * @return boolean
     */
    isOnline(): boolean;
    /**
     * Returns whether the browser is currently offline.
     *
     * @return boolean
     */
    isOffline(): boolean;
    /**
     * Sets the callback that is called when the browser goes online.
     *
     * @param {OnGoingOnlineCallback} onGoingOnlineCallback
     * @return this
     */
    setOnGoingOnlineCallback(onGoingOnlineCallback: OnGoingOnlineCallback): this;
    /**
     * Sets the callback that is called when the browser goes offline.
     *
     * @param {OnGoingOfflineCallback} onGoingOfflineCallback
     * @return this
     */
    setOnGoingOfflineCallback(onGoingOfflineCallback: OnGoingOfflineCallback): this;
}
export type { OnGoingOnlineCallback, OnGoingOfflineCallback };
export { NetworkConnectionWatcher };
