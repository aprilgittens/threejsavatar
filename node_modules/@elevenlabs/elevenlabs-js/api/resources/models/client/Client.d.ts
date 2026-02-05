import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace ModelsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Access the different models of the platform.
 */
export declare class ModelsClient {
    protected readonly _options: NormalizedClientOptions<ModelsClient.Options>;
    constructor(options?: ModelsClient.Options);
    /**
     * Gets a list of available models.
     *
     * @param {ModelsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.models.list()
     */
    list(requestOptions?: ModelsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.Model[]>;
    private __list;
}
