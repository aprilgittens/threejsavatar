import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace WhatsappAccountsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class WhatsappAccountsClient {
    protected readonly _options: NormalizedClientOptions<WhatsappAccountsClient.Options>;
    constructor(options?: WhatsappAccountsClient.Options);
    /**
     * Get a WhatsApp account
     *
     * @param {string} phone_number_id
     * @param {WhatsappAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.whatsappAccounts.get("phone_number_id")
     */
    get(phone_number_id: string, requestOptions?: WhatsappAccountsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetWhatsAppAccountResponse>;
    private __get;
    /**
     * Delete a WhatsApp account
     *
     * @param {string} phone_number_id
     * @param {WhatsappAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.whatsappAccounts.delete("phone_number_id")
     */
    delete(phone_number_id: string, requestOptions?: WhatsappAccountsClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __delete;
    /**
     * Update a WhatsApp account
     *
     * @param {string} phone_number_id
     * @param {ElevenLabs.conversationalAi.UpdateWhatsAppAccountRequest} request
     * @param {WhatsappAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.whatsappAccounts.update("phone_number_id")
     */
    update(phone_number_id: string, request?: ElevenLabs.conversationalAi.UpdateWhatsAppAccountRequest, requestOptions?: WhatsappAccountsClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __update;
    /**
     * List all WhatsApp accounts
     *
     * @param {WhatsappAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.whatsappAccounts.list()
     */
    list(requestOptions?: WhatsappAccountsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ListWhatsAppAccountsResponse>;
    private __list;
}
