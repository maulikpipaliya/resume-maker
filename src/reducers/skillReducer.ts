import {
    SkillActionType,
    ISkillAction,
} from "./../schema/action-types/ISkillAction";

import { ISkillState } from "./../schema/state/ISkillState";

// For DAIICT Resume Format
const initialSkillState: ISkillState = {
    data: [
        {
            name: "Expertise",
            keywords: [],
        },
        {
            name: "ToolsAndTechnologies",
            keywords: [],
        },
        {
            name: "Languages",
            keywords: [],
        },
    ],
    error: "",
};

export const skillReducer = (
    state = initialSkillState,
    action: ISkillAction
): ISkillState => {
    switch (action.type) {
        case SkillActionType.ADD_SKILL: {
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        }

        case SkillActionType.ADD_KEYWORD: {
            const skillFound = state.data.find(
                (skill) => skill.name === action.payload.name
            );
            skillFound?.keywords.push(action.payload.keyword);

            if (skillFound) {
                return {
                    ...state,
                    data: state.data.map((x) =>
                        x === skillFound ? skillFound : x
                    ),
                };
            } else {
                return state;
            }
        }

        case SkillActionType.DELETE_KEYWORD: {
            const skillFound = state.data.find(
                (skill) => skill.name === action.payload.name
            );
            if (skillFound) {
                const keywordIndex = skillFound.keywords.indexOf(
                    action.payload.keyword
                );
                if (keywordIndex !== -1) {
                    skillFound.keywords.splice(keywordIndex, 1);
                }

                return {
                    ...state,
                    data: state.data.map((x) =>
                        x === skillFound ? skillFound : x
                    ),
                };
            } else {
                return state;
            }
        }
        default:
            return state;
    }
};
