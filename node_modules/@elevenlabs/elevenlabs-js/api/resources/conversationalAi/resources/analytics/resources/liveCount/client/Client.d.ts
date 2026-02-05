import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace LiveCountClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LiveCountClient {
    protected readonly _options: NormalizedClientOptions<LiveCountClient.Options>;
    constructor(options?: LiveCountClient.Options);
    /**
     * Get the live count of the ongoing conversations.
     *
     * @param {ElevenLabs.conversationalAi.analytics.LiveCountGetRequest} request
     * @param {LiveCountClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.analytics.liveCount.get({
     *         agentId: "agent_id"
     *     })
     */
    get(request?: ElevenLabs.conversationalAi.analytics.LiveCountGetRequest, requestOptions?: LiveCountClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetLiveCountResponse>;
    private __get;
}
