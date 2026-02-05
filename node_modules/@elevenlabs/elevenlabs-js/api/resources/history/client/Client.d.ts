import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace HistoryClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class HistoryClient {
    protected readonly _options: NormalizedClientOptions<HistoryClient.Options>;
    constructor(options?: HistoryClient.Options);
    /**
     * Returns a list of your generated audio.
     *
     * @param {ElevenLabs.HistoryListRequest} request
     * @param {HistoryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.history.list({
     *         pageSize: 1,
     *         startAfterHistoryItemId: "start_after_history_item_id",
     *         voiceId: "voice_id",
     *         modelId: "model_id",
     *         dateBeforeUnix: 1,
     *         dateAfterUnix: 1,
     *         sortDirection: "asc",
     *         search: "search",
     *         source: "TTS"
     *     })
     */
    list(request?: ElevenLabs.HistoryListRequest, requestOptions?: HistoryClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetSpeechHistoryResponse>;
    private __list;
    /**
     * Retrieves a history item.
     *
     * @param {string} history_item_id - ID of the history item to be used. You can use the [Get generated items](/docs/api-reference/history/list) endpoint to retrieve a list of history items.
     * @param {HistoryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.history.get("VW7YKqPnjY4h39yTbx2L")
     */
    get(history_item_id: string, requestOptions?: HistoryClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SpeechHistoryItemResponse>;
    private __get;
    /**
     * Delete a history item by its ID
     *
     * @param {string} history_item_id - ID of the history item to be used. You can use the [Get generated items](/docs/api-reference/history/list) endpoint to retrieve a list of history items.
     * @param {HistoryClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.history.delete("VW7YKqPnjY4h39yTbx2L")
     */
    delete(history_item_id: string, requestOptions?: HistoryClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteHistoryItemResponse>;
    private __delete;
    /**
     * Returns the audio of an history item.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    getAudio(history_item_id: string, requestOptions?: HistoryClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __getAudio;
    /**
     * Download one or more history items. If one history item ID is provided, we will return a single audio file. If more than one history item IDs are provided, we will provide the history items packed into a .zip file.
     * @throws {@link ElevenLabs.BadRequestError}
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    download(request: ElevenLabs.DownloadHistoryRequest, requestOptions?: HistoryClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __download;
}
