import type * as ElevenLabs from "../../../../../../../index";
export type SummariesGetResponseValue = ElevenLabs.conversationalAi.agents.SummariesGetResponseValue.Success | ElevenLabs.conversationalAi.agents.SummariesGetResponseValue.Failure;
export declare namespace SummariesGetResponseValue {
    interface Success extends ElevenLabs.AgentSummaryBatchSuccessfulResponseModel {
        status: "success";
    }
    interface Failure extends ElevenLabs.BatchFailureResponseModel {
        status: "failure";
    }
}
