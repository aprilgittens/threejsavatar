import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptions<SettingsClient.Options>;
    constructor(options?: SettingsClient.Options);
    /**
     * Retrieve Convai settings for the workspace
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetConvAiSettingsResponseModel>;
    private __get;
    /**
     * Update Convai settings for the workspace
     *
     * @param {ElevenLabs.conversationalAi.PatchConvAiSettingsRequest} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.settings.update()
     */
    update(request?: ElevenLabs.conversationalAi.PatchConvAiSettingsRequest, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetConvAiSettingsResponseModel>;
    private __update;
}
