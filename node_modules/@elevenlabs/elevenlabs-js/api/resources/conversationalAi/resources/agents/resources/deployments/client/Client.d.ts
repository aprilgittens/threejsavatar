import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace DeploymentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class DeploymentsClient {
    protected readonly _options: NormalizedClientOptions<DeploymentsClient.Options>;
    constructor(options?: DeploymentsClient.Options);
    /**
     * Create a new deployment for an agent
     *
     * @param {string} agent_id - The id of an agent. This is returned on agent creation.
     * @param {ElevenLabs.conversationalAi.agents.BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost} request
     * @param {DeploymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.agents.deployments.create("agent_3701k3ttaq12ewp8b7qv5rfyszkz", {
     *         deploymentRequest: {
     *             requests: [{
     *                     branchId: "agtbrch_8901k4t9z5defmb8vh3e9361y7nj",
     *                     deploymentStrategy: {
     *                         type: "percentage",
     *                         trafficPercentage: 0.5
     *                     }
     *                 }]
     *         }
     *     })
     */
    create(agent_id: string, request: ElevenLabs.conversationalAi.agents.BodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost, requestOptions?: DeploymentsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AgentDeploymentResponse>;
    private __create;
}
