import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptions<SettingsClient.Options>;
    constructor(options?: SettingsClient.Options);
    /**
     * Retrieve Convai dashboard settings for the workspace
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.dashboard.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetConvAiDashboardSettingsResponseModel>;
    private __get;
    /**
     * Update Convai dashboard settings for the workspace
     *
     * @param {ElevenLabs.conversationalAi.dashboard.PatchConvAiDashboardSettingsRequest} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.dashboard.settings.update()
     */
    update(request?: ElevenLabs.conversationalAi.dashboard.PatchConvAiDashboardSettingsRequest, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetConvAiDashboardSettingsResponseModel>;
    private __update;
}
