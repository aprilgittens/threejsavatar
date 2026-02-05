import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import { AudioClient } from "../resources/audio/client/Client";
import { ResourceClient } from "../resources/resource/client/Client";
import { TranscriptClient } from "../resources/transcript/client/Client";
import { TranscriptsClient } from "../resources/transcripts/client/Client";
export declare namespace DubbingClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class DubbingClient {
    protected readonly _options: NormalizedClientOptions<DubbingClient.Options>;
    protected _resource: ResourceClient | undefined;
    protected _audio: AudioClient | undefined;
    protected _transcript: TranscriptClient | undefined;
    protected _transcripts: TranscriptsClient | undefined;
    constructor(options?: DubbingClient.Options);
    get resource(): ResourceClient;
    get audio(): AudioClient;
    get transcript(): TranscriptClient;
    get transcripts(): TranscriptsClient;
    /**
     * List the dubs you have access to.
     *
     * @param {ElevenLabs.DubbingListRequest} request
     * @param {DubbingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.list({
     *         cursor: "cursor",
     *         pageSize: 1,
     *         dubbingStatus: "dubbing",
     *         filterByCreator: "personal",
     *         orderBy: "created_at",
     *         orderDirection: "DESCENDING"
     *     })
     */
    list(request?: ElevenLabs.DubbingListRequest, requestOptions?: DubbingClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DubbingMetadataPageResponseModel>;
    private __list;
    /**
     * Dubs a provided audio or video file into given language.
     *
     * @param {ElevenLabs.BodyDubAVideoOrAnAudioFileV1DubbingPost} request
     * @param {DubbingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.dubbing.create({})
     */
    create(request: ElevenLabs.BodyDubAVideoOrAnAudioFileV1DubbingPost, requestOptions?: DubbingClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DoDubbingResponse>;
    private __create;
    /**
     * Returns metadata about a dubbing project, including whether it's still in progress or not
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {DubbingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.get("dubbing_id")
     */
    get(dubbing_id: string, requestOptions?: DubbingClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DubbingMetadataResponse>;
    private __get;
    /**
     * Deletes a dubbing project.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {DubbingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.delete("dubbing_id")
     */
    delete(dubbing_id: string, requestOptions?: DubbingClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteDubbingResponseModel>;
    private __delete;
}
