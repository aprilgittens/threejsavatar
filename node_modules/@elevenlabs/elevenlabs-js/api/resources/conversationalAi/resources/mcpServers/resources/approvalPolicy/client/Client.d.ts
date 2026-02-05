import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace ApprovalPolicyClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ApprovalPolicyClient {
    protected readonly _options: NormalizedClientOptions<ApprovalPolicyClient.Options>;
    constructor(options?: ApprovalPolicyClient.Options);
    /**
     * Update the approval policy configuration for an MCP server. DEPRECATED: Use PATCH /mcp-servers/{id} endpoint instead.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {ElevenLabs.conversationalAi.mcpServers.McpApprovalPolicyUpdateRequestModel} request
     * @param {ApprovalPolicyClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.approvalPolicy.update("mcp_server_id", {
     *         approvalPolicy: "auto_approve_all"
     *     })
     */
    update(mcp_server_id: string, request: ElevenLabs.conversationalAi.mcpServers.McpApprovalPolicyUpdateRequestModel, requestOptions?: ApprovalPolicyClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __update;
}
