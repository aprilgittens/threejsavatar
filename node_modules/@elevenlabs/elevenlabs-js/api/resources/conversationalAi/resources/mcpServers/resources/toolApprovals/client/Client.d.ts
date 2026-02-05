import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace ToolApprovalsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ToolApprovalsClient {
    protected readonly _options: NormalizedClientOptions<ToolApprovalsClient.Options>;
    constructor(options?: ToolApprovalsClient.Options);
    /**
     * Add approval for a specific MCP tool when using per-tool approval mode.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {ElevenLabs.conversationalAi.mcpServers.McpToolAddApprovalRequestModel} request
     * @param {ToolApprovalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.toolApprovals.create("mcp_server_id", {
     *         toolName: "tool_name",
     *         toolDescription: "tool_description"
     *     })
     */
    create(mcp_server_id: string, request: ElevenLabs.conversationalAi.mcpServers.McpToolAddApprovalRequestModel, requestOptions?: ToolApprovalsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __create;
    /**
     * Remove approval for a specific MCP tool when using per-tool approval mode.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {string} tool_name - Name of the MCP tool to remove approval for.
     * @param {ToolApprovalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.toolApprovals.delete("mcp_server_id", "tool_name")
     */
    delete(mcp_server_id: string, tool_name: string, requestOptions?: ToolApprovalsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __delete;
}
