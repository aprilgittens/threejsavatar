import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
import { AvatarClient } from "../resources/avatar/client/Client";
export declare namespace WidgetClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WidgetClient {
    protected readonly _options: NormalizedClientOptions<WidgetClient.Options>;
    protected _avatar: AvatarClient | undefined;
    constructor(options?: WidgetClient.Options);
    get avatar(): AvatarClient;
    /**
     * Retrieve the widget configuration for an agent
     *
     * @param {string} agent_id - The id of an agent. This is returned on agent creation.
     * @param {ElevenLabs.conversationalAi.agents.WidgetGetRequest} request
     * @param {WidgetClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.agents.widget.get("agent_3701k3ttaq12ewp8b7qv5rfyszkz", {
     *         conversationSignature: "conversation_signature"
     *     })
     */
    get(agent_id: string, request?: ElevenLabs.conversationalAi.agents.WidgetGetRequest, requestOptions?: WidgetClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetAgentEmbedResponseModel>;
    private __get;
}
