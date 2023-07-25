import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ProjectBlock } from "./ProjectBlock";

const _interactionsData = JSON.parse(
  '{"events":{"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1684731131722},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738f|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738f|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1684838134454},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|e27a2ca5-4f94-0d67-92fc-3d17af11484f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|e27a2ca5-4f94-0d67-92fc-3d17af11484f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685009319710},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|1742c7b0-0ff0-531d-56bc-db9c19c9ed83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|1742c7b0-0ff0-531d-56bc-db9c19c9ed83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685009319999},"e-33":{"id":"e-33","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|12c1ce81-ff07-a197-711f-28db69906cc9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|12c1ce81-ff07-a197-711f-28db69906cc9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685009322580},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|7b94ce99-241b-93a4-1d69-b7ef3d81daf3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|7b94ce99-241b-93a4-1d69-b7ef3d81daf3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078212687},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|4df12611-1bf3-5804-6729-54802a1b7930","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|4df12611-1bf3-5804-6729-54802a1b7930","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078548314},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|ad56266e-bcbb-8b84-8925-2232c723bf1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|ad56266e-bcbb-8b84-8925-2232c723bf1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078548657},"e-41":{"id":"e-41","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|1c189c4c-c9de-ec53-7bb1-97bb8a6fbb5b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|1c189c4c-c9de-ec53-7bb1-97bb8a6fbb5b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078548991},"e-43":{"id":"e-43","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|b08711b5-8b7b-65e8-eb63-2312d774f61e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|b08711b5-8b7b-65e8-eb63-2312d774f61e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078549238},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|a40731fd-a0e2-36db-b37f-5f7d11f18fad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|a40731fd-a0e2-36db-b37f-5f7d11f18fad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078549471},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|2cd73922-6f53-fed8-ad6e-5af7583c172d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|2cd73922-6f53-fed8-ad6e-5af7583c172d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078651661},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|3353b11d-29fb-4f25-84c0-b47417b3a419","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|3353b11d-29fb-4f25-84c0-b47417b3a419","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078750001},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|e2c02f55-0b97-f247-9fef-7b39874ab15e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|e2c02f55-0b97-f247-9fef-7b39874ab15e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078750242},"e-53":{"id":"e-53","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|4428025e-ea8c-4664-e8ff-1504fc6ccf00","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|4428025e-ea8c-4664-e8ff-1504fc6ccf00","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078750445},"e-55":{"id":"e-55","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|18ad09d1-ab8f-524e-a724-a2230c966b3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|18ad09d1-ab8f-524e-a724-a2230c966b3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078750658},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|4b92e5a3-ab0e-0460-5fc6-2f5924710d2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|4b92e5a3-ab0e-0460-5fc6-2f5924710d2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078750863},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|6bd70b23-a962-3609-7fce-47008422e741","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|6bd70b23-a962-3609-7fce-47008422e741","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078751077},"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|5036241b-03a6-f0dd-1844-9b43f68077a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|5036241b-03a6-f0dd-1844-9b43f68077a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078751283},"e-63":{"id":"e-63","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|fe086a48-7f43-5721-7a48-931d2adc34b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|fe086a48-7f43-5721-7a48-931d2adc34b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078751504},"e-65":{"id":"e-65","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7393|11042b84-b482-aaaa-c98c-b4d1770221ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7393|11042b84-b482-aaaa-c98c-b4d1770221ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685078751723},"e-149":{"id":"e-149","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|e481a6b2-99b3-3c8d-444f-06e07ea03959","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686220563405},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|adc2cdf4-7a61-4623-ce07-dda23cab21cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|adc2cdf4-7a61-4623-ce07-dda23cab21cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223660311},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|9a678bbb-ff89-74fa-6230-b919d43620fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|9a678bbb-ff89-74fa-6230-b919d43620fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223660858},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|38898805-4994-f970-6c3a-e3f8a6506eed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|38898805-4994-f970-6c3a-e3f8a6506eed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223661338},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|8200c568-b3fb-9c03-6958-b1ada7e2eb48","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|8200c568-b3fb-9c03-6958-b1ada7e2eb48","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223763547},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|ae0e9359-cf54-313c-e088-3db1245dc81e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|ae0e9359-cf54-313c-e088-3db1245dc81e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223763996},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|2d78f737-186d-755f-99ba-6ebaaaaf813b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|2d78f737-186d-755f-99ba-6ebaaaaf813b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686223765627},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738d|dc6cbada-262d-6187-8fbd-0c5e88fc1afb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738d|dc6cbada-262d-6187-8fbd-0c5e88fc1afb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686225409007},"e-285":{"id":"e-285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738e|35f80baf-c88a-76e6-b552-65c30e9b90d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738e|35f80baf-c88a-76e6-b552-65c30e9b90d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686662649090},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738e|2634e295-05fd-9546-d88d-a5ba8abbebc3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738e|2634e295-05fd-9546-d88d-a5ba8abbebc3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686662741102},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7387|03cb1c72-1473-4d2a-c31d-ad347f064cd0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7387|03cb1c72-1473-4d2a-c31d-ad347f064cd0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686832494842},"e-297":{"id":"e-297","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7387|6b167242-0674-e102-d272-3466f4df734b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7387|6b167242-0674-e102-d272-3466f4df734b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686832503130},"e-299":{"id":"e-299","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738e|a38e26a6-fc73-7eae-ac07-c05fd8d08938","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738e|a38e26a6-fc73-7eae-ac07-c05fd8d08938","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686833017052},"e-301":{"id":"e-301","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b0|0acc5c59-3042-8e33-762c-ab7825d779d4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b0|0acc5c59-3042-8e33-762c-ab7825d779d4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1686833051177},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-304"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f738e|1d669b4d-be07-4ddd-dbe1-7b7bea2b3181","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f738e|1d669b4d-be07-4ddd-dbe1-7b7bea2b3181","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1687986962833},"e-313":{"id":"e-313","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64376c79-c03a-6c0b-a68c-59bab0162b96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64376c79-c03a-6c0b-a68c-59bab0162b96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688381949192},"e-355":{"id":"e-355","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-356"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e731","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e731","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688644342524},"e-357":{"id":"e-357","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-358"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e702","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e702","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688644343403},"e-359":{"id":"e-359","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e6d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ab14bd9b-42aa-8fdc-8776-9b94d534e6d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688644344002},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|f5e64f71-8354-d952-28c6-d406b3ab0441","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|f5e64f71-8354-d952-28c6-d406b3ab0441","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650555287},"e-363":{"id":"e-363","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|08a9a64f-8ba8-fe66-4730-5e888e374a77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|08a9a64f-8ba8-fe66-4730-5e888e374a77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650556279},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|87e2f5f0-3286-910c-8e08-9f98210a82c1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|87e2f5f0-3286-910c-8e08-9f98210a82c1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650556837},"e-367":{"id":"e-367","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-368"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|a17ff135-ab95-2f1a-9f94-078349cfebe8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|a17ff135-ab95-2f1a-9f94-078349cfebe8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650557446},"e-369":{"id":"e-369","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|bbe1e193-6a3b-230a-e5c9-e252e79498ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|bbe1e193-6a3b-230a-e5c9-e252e79498ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650564858},"e-371":{"id":"e-371","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-372"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|686db36d-b71c-f660-fbb9-f6c0fb960801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|686db36d-b71c-f660-fbb9-f6c0fb960801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650565249},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-374"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|ad4f3622-d2c4-15a3-dcab-3f9b448b865c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|ad4f3622-d2c4-15a3-dcab-3f9b448b865c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650565661},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-376"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f73b1|6a5f3049-961b-6a3d-799c-c29edf306c40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f73b1|6a5f3049-961b-6a3d-799c-c29edf306c40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688650640812},"e-377":{"id":"e-377","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-378"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7383|3ba6a46a-f261-0967-4d2b-6ab7d1616f2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7383|3ba6a46a-f261-0967-4d2b-6ab7d1616f2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689587780940},"e-381":{"id":"e-381","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7383|714f832e-924e-b27c-7194-e317d13e45a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7383|714f832e-924e-b27c-7194-e317d13e45a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689587842212},"e-383":{"id":"e-383","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-384"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7383|c65274c3-a48f-2b77-cbcd-5d3ee22d34c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7383|c65274c3-a48f-2b77-cbcd-5d3ee22d34c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689587842907},"e-385":{"id":"e-385","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7383|42feafdb-b4f4-bbb0-2c7b-dbe3a409dcd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ad4b9eac47ec97bc4f7383|42feafdb-b4f4-bbb0-2c7b-dbe3a409dcd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689587843263},"e-387":{"id":"e-387","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7390|246bdea1-b045-ed70-be21-e79e809d36e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689698651877},"e-389":{"id":"e-389","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-390"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7390|246bdea1-b045-ed70-be21-e79e809d36b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689698651877},"e-391":{"id":"e-391","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-392"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ad4b9eac47ec97bc4f7390|246bdea1-b045-ed70-be21-e79e809d3687","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1689698651877}},"actionLists":{"a-7":{"id":"a-7","title":"eb flow","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"value":0,"unit":""}},{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"value":1,"unit":""}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684731136168},"a-31":{"id":"a-31","title":"eb flow 2","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"value":0,"unit":""}},{"id":"a-31-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-31-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"value":1,"unit":""}},{"id":"a-31-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"selector":".project-block","selectorGuids":["a72aff5d-8fbc-e9cd-0761-ae131dabb12f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684731136168}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProjectWrapper({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="allprojectsweeklywrapper" tag="div">
      <ProjectBlock />
      <_Builtin.Block
        className="project-block featured"
        data-w-id="ab14bd9b-42aa-8fdc-8776-9b94d534e6d3"
        tag="div"
      >
        <_Builtin.Block className="top-half-of-content" tag="div">
          <_Builtin.Block className="brief-wrapper" tag="div">
            <_Builtin.Block className="div-block-102" tag="div">
              <_Builtin.Block className="briefs-labels" tag="div">
                {"Brief:"}
              </_Builtin.Block>
              <_Builtin.Block
                className="briefs-labels"
                dyn={{
                  bind: {},
                }}
                tag="div"
                fs-cmsfilter-field="brief"
              >
                {"Brief Name"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="_10px-div" tag="div" />
          <_Builtin.Block className="project-image" tag="div">
            <_Builtin.HtmlEmbed
              className="video-html"
              value="%3Cdiv%20class%3D%22wrapper%22%3E%0A%09%3Cdiv%20class%3D%22youtube%22%20data-embed%3D%22FFvIb1gQYa8%22%3E%0A%09%09%3Cdiv%20class%3D%22play-button%22%3E%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cstyle%3E%0A%0Ahtml%20%7B%0A%09background-color%3A%20%23f3f3f3%3B%0A%7D%0A.wrapper%20%7B%0A%09max-width%3A%20100%25%3B%0A%09margin%3A%200px%3B%0A%09padding%3A%200px%3B%0A%7D%0A%0A.youtube%20%7B%0A%09background-color%3A%20%23000%3B%0A%09position%3A%20relative%3B%0A%09padding-top%3A%2056.25%25%3B%0A%09overflow%3A%20hidden%3B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%20%7B%0A%09width%3A%20100%25%3B%0A%09top%3A%20-16.82%25%3B%0A%09left%3A%200%3B%0A%09opacity%3A%200.7%3B%0A%7D%0A.youtube%20.play-button%20%7B%0A%09width%3A%2090px%3B%0A%09height%3A%2060px%3B%0A%09background-color%3A%20%23333%3B%0A%09box-shadow%3A%200%200%2030px%20rgba(%200%2C0%2C0%2C0.6%20)%3B%0A%09z-index%3A%201%3B%0A%09opacity%3A%200.8%3B%0A%09border-radius%3A%206px%3B%0A%7D%0A.youtube%20.play-button%3Abefore%20%7B%0A%09content%3A%20%22%22%3B%0A%09border-style%3A%20solid%3B%0A%09border-width%3A%2015px%200%2015px%2026.0px%3B%0A%09border-color%3A%20transparent%20transparent%20transparent%20%23fff%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20.play-button%20%7B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20iframe%2C%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09position%3A%20absolute%3B%0A%7D%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09top%3A%2050%25%3B%0A%09left%3A%2050%25%3B%0A%09transform%3A%20translate3d(%20-50%25%2C%20-50%25%2C%200%20)%3B%0A%7D%0A.youtube%20iframe%20%7B%0A%09height%3A%20100%25%3B%0A%09width%3A%20100%25%3B%0A%09top%3A%200%3B%0A%09left%3A%200%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="_20px-div" tag="div" />
          <_Builtin.Link
            className="project-copy"
            button={false}
            dyn={{
              bind: {},
            }}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className="div-block-96" tag="div">
              <_Builtin.Paragraph
                className="project-title"
                dyn={{
                  bind: {},
                }}
              >
                {"Project Title"}
              </_Builtin.Paragraph>
              <_Builtin.Block className="arrow-diagonal" tag="div">
                {"↗"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="featured-project-bio" tag="div">
              <_Builtin.Paragraph
                className="project-byline"
                dyn={{
                  bind: {},
                }}
              >
                {"Project bio"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="bottom-half-of-content" tag="div">
          <_Builtin.Block className="collect-wrapper" tag="div">
            <_Builtin.Block className="data" tag="div">
              <_Builtin.Block className="supporters" tag="div">
                <_Builtin.Block
                  className="amount-of-supporters"
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {"1890"}
                </_Builtin.Block>
                <_Builtin.Block className="small-text" tag="div">
                  {"• Supporters"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="count-block" tag="div">
                <_Builtin.HtmlEmbed
                  className="html-embed-2"
                  value="%3Cscript%3E%0A%20%20%09%2F%2F%20Countdown%20Timer%20by%20Flowbase%0A%09%09%2F%2F%20Set%20the%20target%20date%20and%20time%0A%09%09var%20target_date%20%3D%20new%20Date(%22%22).getTime()%3B%0A%0A%09%09%2F%2F%20Update%20the%20countdown%20timer%20every%20second%0A%09%09var%20countdown_timer%20%3D%20setInterval(function()%20%7B%0A%0A%09%09%09%2F%2F%20Get%20the%20current%20date%20and%20time%0A%09%09%09var%20current_date%20%3D%20new%20Date().getTime()%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20time%20in%20milliseconds%0A%09%09%09var%20distance%20%3D%20target_date%20-%20current_date%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20days%2C%20hours%2C%20minutes%2C%20and%20seconds%0A%09%09%09var%20day%20%3D%201000%20*%2060%20*%2060%20*%2024%3B%0A%09%09%09var%20hour%20%3D%201000%20*%2060%20*%2060%3B%0A%09%09%09var%20minute%20%3D%201000%20*%2060%3B%0A%09%09%09var%20second%20%3D%201000%3B%0A%20%20%20%20%20%20%0A%09%09%09%2F%2F%20Add%20the%20ID%20to%20your%20HTML%2FWebflow%20text%20elements%0A%09%09%09document.getElementById('days').innerText%20%3D%20Math.floor(distance%20%2F%20(day))%3B%0A%09%09%09document.getElementById('hours').innerText%20%3D%20Math.floor((distance%20%25%20(day))%20%2F%20(hour))%3B%0A%09%09%09document.getElementById('minutes').innerText%20%3D%20Math.floor((distance%20%25%20(hour))%20%2F%20(minute))%3B%0A%09%09%09document.getElementById('seconds').innerText%20%3D%20Math.floor((distance%20%25%20(minute))%20%2F%20second)%3B%0A%0A%09%09%09%2F%2F%20Check%20if%20the%20countdown%20is%20complete%0A%09%09%09if%20(distance%20%3C%200)%20%7B%0A%09%09%09%09clearInterval(countdown_timer)%3B%0A%09%09%09%09document.getElementByclass('.days').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.hours').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.minutes').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.seconds').innerText%20%3D%20'0'%3B%0A%20%20%20%20%20%20%2F%2F%20You%20can%20display%20an%20element%20at%20the%20end%20of%20the%20countdown%20with%20this%20ID%20%20%0A%20%20%20%20%20%20%20%20document.getElementById('message').style.display%20%3D%20'block'%3B%0A%09%09%09%7D%0A%0A%09%09%7D%2C%201000)%3B%0A%09%3C%2Fscript%3E"
                />
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="days" tag="div" id="days">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"d"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="hours" tag="div" id="hours">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"h"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="minutes" tag="div" id="minutes">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"m"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="project-block featured"
        data-w-id="ab14bd9b-42aa-8fdc-8776-9b94d534e702"
        tag="div"
      >
        <_Builtin.Block className="top-half-of-content" tag="div">
          <_Builtin.Block className="brief-wrapper" tag="div">
            <_Builtin.Block className="div-block-102" tag="div">
              <_Builtin.Block className="briefs-labels" tag="div">
                {"Brief:"}
              </_Builtin.Block>
              <_Builtin.Block
                className="briefs-labels"
                dyn={{
                  bind: {},
                }}
                tag="div"
                fs-cmsfilter-field="brief"
              >
                {"Brief Name"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="_10px-div" tag="div" />
          <_Builtin.Block className="project-image" tag="div">
            <_Builtin.HtmlEmbed
              className="video-html"
              value="%3Cdiv%20class%3D%22wrapper%22%3E%0A%09%3Cdiv%20class%3D%22youtube%22%20data-embed%3D%22FFvIb1gQYa8%22%3E%0A%09%09%3Cdiv%20class%3D%22play-button%22%3E%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cstyle%3E%0A%0Ahtml%20%7B%0A%09background-color%3A%20%23f3f3f3%3B%0A%7D%0A.wrapper%20%7B%0A%09max-width%3A%20100%25%3B%0A%09margin%3A%200px%3B%0A%09padding%3A%200px%3B%0A%7D%0A%0A.youtube%20%7B%0A%09background-color%3A%20%23000%3B%0A%09position%3A%20relative%3B%0A%09padding-top%3A%2056.25%25%3B%0A%09overflow%3A%20hidden%3B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%20%7B%0A%09width%3A%20100%25%3B%0A%09top%3A%20-16.82%25%3B%0A%09left%3A%200%3B%0A%09opacity%3A%200.7%3B%0A%7D%0A.youtube%20.play-button%20%7B%0A%09width%3A%2090px%3B%0A%09height%3A%2060px%3B%0A%09background-color%3A%20%23333%3B%0A%09box-shadow%3A%200%200%2030px%20rgba(%200%2C0%2C0%2C0.6%20)%3B%0A%09z-index%3A%201%3B%0A%09opacity%3A%200.8%3B%0A%09border-radius%3A%206px%3B%0A%7D%0A.youtube%20.play-button%3Abefore%20%7B%0A%09content%3A%20%22%22%3B%0A%09border-style%3A%20solid%3B%0A%09border-width%3A%2015px%200%2015px%2026.0px%3B%0A%09border-color%3A%20transparent%20transparent%20transparent%20%23fff%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20.play-button%20%7B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20iframe%2C%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09position%3A%20absolute%3B%0A%7D%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09top%3A%2050%25%3B%0A%09left%3A%2050%25%3B%0A%09transform%3A%20translate3d(%20-50%25%2C%20-50%25%2C%200%20)%3B%0A%7D%0A.youtube%20iframe%20%7B%0A%09height%3A%20100%25%3B%0A%09width%3A%20100%25%3B%0A%09top%3A%200%3B%0A%09left%3A%200%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="_20px-div" tag="div" />
          <_Builtin.Link
            className="project-copy"
            button={false}
            dyn={{
              bind: {},
            }}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className="div-block-96" tag="div">
              <_Builtin.Paragraph
                className="project-title"
                dyn={{
                  bind: {},
                }}
              >
                {"Project Title"}
              </_Builtin.Paragraph>
              <_Builtin.Block className="arrow-diagonal" tag="div">
                {"↗"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="featured-project-bio" tag="div">
              <_Builtin.Paragraph
                className="project-byline"
                dyn={{
                  bind: {},
                }}
              >
                {"Project bio"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="bottom-half-of-content" tag="div">
          <_Builtin.Block className="collect-wrapper" tag="div">
            <_Builtin.Block className="data" tag="div">
              <_Builtin.Block className="supporters" tag="div">
                <_Builtin.Block
                  className="amount-of-supporters"
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {"1890"}
                </_Builtin.Block>
                <_Builtin.Block className="small-text" tag="div">
                  {"• Supporters"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="count-block" tag="div">
                <_Builtin.HtmlEmbed
                  className="html-embed-2"
                  value="%3Cscript%3E%0A%20%20%09%2F%2F%20Countdown%20Timer%20by%20Flowbase%0A%09%09%2F%2F%20Set%20the%20target%20date%20and%20time%0A%09%09var%20target_date%20%3D%20new%20Date(%22%22).getTime()%3B%0A%0A%09%09%2F%2F%20Update%20the%20countdown%20timer%20every%20second%0A%09%09var%20countdown_timer%20%3D%20setInterval(function()%20%7B%0A%0A%09%09%09%2F%2F%20Get%20the%20current%20date%20and%20time%0A%09%09%09var%20current_date%20%3D%20new%20Date().getTime()%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20time%20in%20milliseconds%0A%09%09%09var%20distance%20%3D%20target_date%20-%20current_date%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20days%2C%20hours%2C%20minutes%2C%20and%20seconds%0A%09%09%09var%20day%20%3D%201000%20*%2060%20*%2060%20*%2024%3B%0A%09%09%09var%20hour%20%3D%201000%20*%2060%20*%2060%3B%0A%09%09%09var%20minute%20%3D%201000%20*%2060%3B%0A%09%09%09var%20second%20%3D%201000%3B%0A%20%20%20%20%20%20%0A%09%09%09%2F%2F%20Add%20the%20ID%20to%20your%20HTML%2FWebflow%20text%20elements%0A%09%09%09document.getElementById('days').innerText%20%3D%20Math.floor(distance%20%2F%20(day))%3B%0A%09%09%09document.getElementById('hours').innerText%20%3D%20Math.floor((distance%20%25%20(day))%20%2F%20(hour))%3B%0A%09%09%09document.getElementById('minutes').innerText%20%3D%20Math.floor((distance%20%25%20(hour))%20%2F%20(minute))%3B%0A%09%09%09document.getElementById('seconds').innerText%20%3D%20Math.floor((distance%20%25%20(minute))%20%2F%20second)%3B%0A%0A%09%09%09%2F%2F%20Check%20if%20the%20countdown%20is%20complete%0A%09%09%09if%20(distance%20%3C%200)%20%7B%0A%09%09%09%09clearInterval(countdown_timer)%3B%0A%09%09%09%09document.getElementByclass('.days').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.hours').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.minutes').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.seconds').innerText%20%3D%20'0'%3B%0A%20%20%20%20%20%20%2F%2F%20You%20can%20display%20an%20element%20at%20the%20end%20of%20the%20countdown%20with%20this%20ID%20%20%0A%20%20%20%20%20%20%20%20document.getElementById('message').style.display%20%3D%20'block'%3B%0A%09%09%09%7D%0A%0A%09%09%7D%2C%201000)%3B%0A%09%3C%2Fscript%3E"
                />
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="days" tag="div" id="days">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"d"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="hours" tag="div" id="hours">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"h"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="minutes" tag="div" id="minutes">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"m"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="project-block featured"
        data-w-id="ab14bd9b-42aa-8fdc-8776-9b94d534e731"
        tag="div"
      >
        <_Builtin.Block className="top-half-of-content" tag="div">
          <_Builtin.Block className="brief-wrapper" tag="div">
            <_Builtin.Block className="div-block-102" tag="div">
              <_Builtin.Block className="briefs-labels" tag="div">
                {"Brief:"}
              </_Builtin.Block>
              <_Builtin.Block
                className="briefs-labels"
                dyn={{
                  bind: {},
                }}
                tag="div"
                fs-cmsfilter-field="brief"
              >
                {"Brief Name"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="_10px-div" tag="div" />
          <_Builtin.Block className="project-image" tag="div">
            <_Builtin.HtmlEmbed
              className="video-html"
              value="%3Cdiv%20class%3D%22wrapper%22%3E%0A%09%3Cdiv%20class%3D%22youtube%22%20data-embed%3D%22FFvIb1gQYa8%22%3E%0A%09%09%3Cdiv%20class%3D%22play-button%22%3E%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cstyle%3E%0A%0Ahtml%20%7B%0A%09background-color%3A%20%23f3f3f3%3B%0A%7D%0A.wrapper%20%7B%0A%09max-width%3A%20100%25%3B%0A%09margin%3A%200px%3B%0A%09padding%3A%200px%3B%0A%7D%0A%0A.youtube%20%7B%0A%09background-color%3A%20%23000%3B%0A%09position%3A%20relative%3B%0A%09padding-top%3A%2056.25%25%3B%0A%09overflow%3A%20hidden%3B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%20%7B%0A%09width%3A%20100%25%3B%0A%09top%3A%20-16.82%25%3B%0A%09left%3A%200%3B%0A%09opacity%3A%200.7%3B%0A%7D%0A.youtube%20.play-button%20%7B%0A%09width%3A%2090px%3B%0A%09height%3A%2060px%3B%0A%09background-color%3A%20%23333%3B%0A%09box-shadow%3A%200%200%2030px%20rgba(%200%2C0%2C0%2C0.6%20)%3B%0A%09z-index%3A%201%3B%0A%09opacity%3A%200.8%3B%0A%09border-radius%3A%206px%3B%0A%7D%0A.youtube%20.play-button%3Abefore%20%7B%0A%09content%3A%20%22%22%3B%0A%09border-style%3A%20solid%3B%0A%09border-width%3A%2015px%200%2015px%2026.0px%3B%0A%09border-color%3A%20transparent%20transparent%20transparent%20%23fff%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20.play-button%20%7B%0A%09cursor%3A%20pointer%3B%0A%7D%0A.youtube%20img%2C%0A.youtube%20iframe%2C%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09position%3A%20absolute%3B%0A%7D%0A.youtube%20.play-button%2C%0A.youtube%20.play-button%3Abefore%20%7B%0A%09top%3A%2050%25%3B%0A%09left%3A%2050%25%3B%0A%09transform%3A%20translate3d(%20-50%25%2C%20-50%25%2C%200%20)%3B%0A%7D%0A.youtube%20iframe%20%7B%0A%09height%3A%20100%25%3B%0A%09width%3A%20100%25%3B%0A%09top%3A%200%3B%0A%09left%3A%200%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block className="_20px-div" tag="div" />
          <_Builtin.Link
            className="project-copy"
            button={false}
            dyn={{
              bind: {},
            }}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block className="div-block-96" tag="div">
              <_Builtin.Paragraph
                className="project-title"
                dyn={{
                  bind: {},
                }}
              >
                {"Project Title"}
              </_Builtin.Paragraph>
              <_Builtin.Block className="arrow-diagonal" tag="div">
                {"↗"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="featured-project-bio" tag="div">
              <_Builtin.Paragraph
                className="project-byline"
                dyn={{
                  bind: {},
                }}
              >
                {"Project bio"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="bottom-half-of-content" tag="div">
          <_Builtin.Block className="collect-wrapper" tag="div">
            <_Builtin.Block className="data" tag="div">
              <_Builtin.Block className="supporters" tag="div">
                <_Builtin.Block
                  className="amount-of-supporters"
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {"1890"}
                </_Builtin.Block>
                <_Builtin.Block className="small-text" tag="div">
                  {"• Supporters"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="count-block" tag="div">
                <_Builtin.HtmlEmbed
                  className="html-embed-2"
                  value="%3Cscript%3E%0A%20%20%09%2F%2F%20Countdown%20Timer%20by%20Flowbase%0A%09%09%2F%2F%20Set%20the%20target%20date%20and%20time%0A%09%09var%20target_date%20%3D%20new%20Date(%22%22).getTime()%3B%0A%0A%09%09%2F%2F%20Update%20the%20countdown%20timer%20every%20second%0A%09%09var%20countdown_timer%20%3D%20setInterval(function()%20%7B%0A%0A%09%09%09%2F%2F%20Get%20the%20current%20date%20and%20time%0A%09%09%09var%20current_date%20%3D%20new%20Date().getTime()%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20time%20in%20milliseconds%0A%09%09%09var%20distance%20%3D%20target_date%20-%20current_date%3B%0A%0A%09%09%09%2F%2F%20Calculate%20the%20remaining%20days%2C%20hours%2C%20minutes%2C%20and%20seconds%0A%09%09%09var%20day%20%3D%201000%20*%2060%20*%2060%20*%2024%3B%0A%09%09%09var%20hour%20%3D%201000%20*%2060%20*%2060%3B%0A%09%09%09var%20minute%20%3D%201000%20*%2060%3B%0A%09%09%09var%20second%20%3D%201000%3B%0A%20%20%20%20%20%20%0A%09%09%09%2F%2F%20Add%20the%20ID%20to%20your%20HTML%2FWebflow%20text%20elements%0A%09%09%09document.getElementById('days').innerText%20%3D%20Math.floor(distance%20%2F%20(day))%3B%0A%09%09%09document.getElementById('hours').innerText%20%3D%20Math.floor((distance%20%25%20(day))%20%2F%20(hour))%3B%0A%09%09%09document.getElementById('minutes').innerText%20%3D%20Math.floor((distance%20%25%20(hour))%20%2F%20(minute))%3B%0A%09%09%09document.getElementById('seconds').innerText%20%3D%20Math.floor((distance%20%25%20(minute))%20%2F%20second)%3B%0A%0A%09%09%09%2F%2F%20Check%20if%20the%20countdown%20is%20complete%0A%09%09%09if%20(distance%20%3C%200)%20%7B%0A%09%09%09%09clearInterval(countdown_timer)%3B%0A%09%09%09%09document.getElementByclass('.days').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.hours').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.minutes').innerText%20%3D%20'0'%3B%0A%09%09%09%09document.getElementByclass('.seconds').innerText%20%3D%20'0'%3B%0A%20%20%20%20%20%20%2F%2F%20You%20can%20display%20an%20element%20at%20the%20end%20of%20the%20countdown%20with%20this%20ID%20%20%0A%20%20%20%20%20%20%20%20document.getElementById('message').style.display%20%3D%20'block'%3B%0A%09%09%09%7D%0A%0A%09%09%7D%2C%201000)%3B%0A%09%3C%2Fscript%3E"
                />
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="days" tag="div" id="days">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"d"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="hours" tag="div" id="hours">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"h"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div">
                  <_Builtin.Block className="minutes" tag="div" id="minutes">
                    {"0"}
                  </_Builtin.Block>
                  <_Builtin.Block className="count-text" tag="div">
                    {"m"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="count-wrap" tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}