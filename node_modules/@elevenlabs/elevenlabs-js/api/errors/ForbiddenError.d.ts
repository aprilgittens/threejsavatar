import type * as core from "../../core";
import * as errors from "../../errors/index";
export declare class ForbiddenError extends errors.ElevenLabsError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
