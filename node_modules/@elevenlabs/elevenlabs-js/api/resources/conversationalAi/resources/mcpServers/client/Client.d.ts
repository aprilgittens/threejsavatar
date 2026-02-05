import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
import { ApprovalPolicyClient } from "../resources/approvalPolicy/client/Client";
import { ToolApprovalsClient } from "../resources/toolApprovals/client/Client";
import { ToolConfigsClient } from "../resources/toolConfigs/client/Client";
import { ToolsClient } from "../resources/tools/client/Client";
export declare namespace McpServersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class McpServersClient {
    protected readonly _options: NormalizedClientOptions<McpServersClient.Options>;
    protected _tools: ToolsClient | undefined;
    protected _approvalPolicy: ApprovalPolicyClient | undefined;
    protected _toolApprovals: ToolApprovalsClient | undefined;
    protected _toolConfigs: ToolConfigsClient | undefined;
    constructor(options?: McpServersClient.Options);
    get tools(): ToolsClient;
    get approvalPolicy(): ApprovalPolicyClient;
    get toolApprovals(): ToolApprovalsClient;
    get toolConfigs(): ToolConfigsClient;
    /**
     * Retrieve all MCP server configurations available in the workspace.
     *
     * @param {McpServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.list()
     */
    list(requestOptions?: McpServersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServersResponseModel>;
    private __list;
    /**
     * Create a new MCP server configuration in the workspace.
     *
     * @param {ElevenLabs.conversationalAi.McpServerRequestModel} request
     * @param {McpServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.create({
     *         config: {
     *             url: "url",
     *             name: "name"
     *         }
     *     })
     */
    create(request: ElevenLabs.conversationalAi.McpServerRequestModel, requestOptions?: McpServersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __create;
    /**
     * Retrieve a specific MCP server configuration from the workspace.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {McpServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.get("mcp_server_id")
     */
    get(mcp_server_id: string, requestOptions?: McpServersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __get;
    /**
     * Delete a specific MCP server configuration from the workspace.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {McpServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.delete("mcp_server_id")
     */
    delete(mcp_server_id: string, requestOptions?: McpServersClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __delete;
    /**
     * Update the configuration settings for an MCP server.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {ElevenLabs.conversationalAi.McpServerConfigUpdateRequestModel} request
     * @param {McpServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.update("mcp_server_id")
     */
    update(mcp_server_id: string, request?: ElevenLabs.conversationalAi.McpServerConfigUpdateRequestModel, requestOptions?: McpServersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.McpServerResponseModel>;
    private __update;
}
