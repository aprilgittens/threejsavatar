import type * as ElevenLabs from "../../../../../../../../../index";
export type SummariesGetResponseValue = ElevenLabs.conversationalAi.knowledgeBase.documents.SummariesGetResponseValue.Success | ElevenLabs.conversationalAi.knowledgeBase.documents.SummariesGetResponseValue.Failure;
export declare namespace SummariesGetResponseValue {
    interface Success extends ElevenLabs.KnowledgeBaseSummaryBatchSuccessfulResponseModel {
        status: "success";
    }
    interface Failure extends ElevenLabs.BatchFailureResponseModel {
        status: "failure";
    }
}
