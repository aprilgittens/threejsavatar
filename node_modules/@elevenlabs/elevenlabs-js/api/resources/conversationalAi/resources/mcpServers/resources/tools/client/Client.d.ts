import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace ToolsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ToolsClient {
    protected readonly _options: NormalizedClientOptions<ToolsClient.Options>;
    constructor(options?: ToolsClient.Options);
    /**
     * Retrieve all tools available for a specific MCP server configuration.
     *
     * @param {string} mcp_server_id - ID of the MCP Server.
     * @param {ToolsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.mcpServers.tools.list("mcp_server_id")
     */
    list(mcp_server_id: string, requestOptions?: ToolsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ListMcpToolsResponseModel>;
    private __list;
}
