import type { BaseClientOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import { LiveCountClient } from "../resources/liveCount/client/Client";
export declare namespace AnalyticsClient {
    type Options = BaseClientOptions;
}
export declare class AnalyticsClient {
    protected readonly _options: NormalizedClientOptions<AnalyticsClient.Options>;
    protected _liveCount: LiveCountClient | undefined;
    constructor(options?: AnalyticsClient.Options);
    get liveCount(): LiveCountClient;
}
