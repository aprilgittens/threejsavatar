import type { BaseClientOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import { SettingsClient } from "../resources/settings/client/Client";
export declare namespace DashboardClient {
    type Options = BaseClientOptions;
}
export declare class DashboardClient {
    protected readonly _options: NormalizedClientOptions<DashboardClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options?: DashboardClient.Options);
    get settings(): SettingsClient;
}
