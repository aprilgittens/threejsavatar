import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
export declare namespace AudioClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AudioClient {
    protected readonly _options: NormalizedClientOptions<AudioClient.Options>;
    constructor(options?: AudioClient.Options);
    /**
     * Get the audio recording of a particular conversation
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    get(conversation_id: string, requestOptions?: AudioClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __get;
}
