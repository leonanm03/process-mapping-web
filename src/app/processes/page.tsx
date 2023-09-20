import { SubprocessCascade } from "@/components/SubprocessCascade";

export default function Processes() {
  return (
    <div className="row">
      <ul className="list-disc pl-5">
        {apimock.map((process) => (
          <li key={process.id}>
            {process.name}
            {process.subProcess.map((subprocess) => (
              <SubprocessCascade key={subprocess.id} {...subprocess} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

const apimock = [
  {
    id: "37d06b88-4cf4-4cd8-a23e-68d8d0571849",
    name: "testei",
    areaId: 1,
    description: null,
    fatherProcessId: null,
    createdAt: "2023-09-19T16:17:15.058Z",
    updatedAt: "2023-09-19T16:17:15.058Z",
    area: {
      name: "testes",
    },
    subProcess: [],
  },
  {
    id: "9b604080-55e9-4a78-896a-5ad481373d6d",
    name: "testei",
    areaId: 1,
    description: null,
    fatherProcessId: null,
    createdAt: "2023-09-19T16:17:17.731Z",
    updatedAt: "2023-09-19T16:17:17.731Z",
    area: {
      name: "testes",
    },
    subProcess: [],
  },
  {
    id: "ffde1b56-c5a5-4e5f-be27-3ca59f2f3e1f",
    name: "testei",
    areaId: 1,
    description: null,
    fatherProcessId: null,
    createdAt: "2023-09-19T16:23:27.022Z",
    updatedAt: "2023-09-19T16:23:27.022Z",
    area: {
      name: "testes",
    },
    subProcess: [],
  },
  {
    id: "dd152806-09ba-41c7-bd9e-d1030f80117f",
    name: "testei",
    areaId: 4,
    description: null,
    fatherProcessId: null,
    createdAt: "2023-09-19T16:25:18.008Z",
    updatedAt: "2023-09-19T16:25:18.008Z",
    area: {
      name: "testando",
    },
    subProcess: [],
  },
  {
    id: "7720a268-8627-48bd-88d6-b5e0ecc71c98",
    name: "teste",
    areaId: 3,
    description: "alou alou um dois tres",
    fatherProcessId: null,
    createdAt: "2023-09-19T17:35:11.075Z",
    updatedAt: "2023-09-19T17:35:11.075Z",
    area: {
      name: "teste",
    },
    subProcess: [
      {
        id: "eac55907-aff4-469b-889e-814b1f14a1e8",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "7720a268-8627-48bd-88d6-b5e0ecc71c98",
        createdAt: "2023-09-19T17:35:46.597Z",
        updatedAt: "2023-09-19T17:35:46.597Z",
        area: {
          name: "teste",
        },
        subProcess: [
          {
            id: "22824f03-4eeb-49dd-9e01-4a9fe09702be",
            name: "testeneto",
            areaId: 3,
            description: "alou alou um dois tres",
            fatherProcessId: "eac55907-aff4-469b-889e-814b1f14a1e8",
            createdAt: "2023-09-20T22:21:26.402Z",
            updatedAt: "2023-09-20T22:21:26.402Z",
            area: {
              name: "teste",
            },
            subProcess: [
              {
                id: "c63a4550-a4e0-4920-b23c-925fb9dc66e7",
                name: "testebisneto",
                areaId: 3,
                description: "alou alou um dois tres",
                fatherProcessId: "22824f03-4eeb-49dd-9e01-4a9fe09702be",
                createdAt: "2023-09-20T22:21:40.001Z",
                updatedAt: "2023-09-20T22:21:40.001Z",
                area: {
                  name: "teste",
                },
                subProcess: [
                  {
                    id: "c28a39a2-0bdd-4732-8e41-1615f0155a02",
                    name: "testetataraneto",
                    areaId: 3,
                    description: "alou alou um dois tres",
                    fatherProcessId: "c63a4550-a4e0-4920-b23c-925fb9dc66e7",
                    createdAt: "2023-09-20T22:21:57.005Z",
                    updatedAt: "2023-09-20T22:21:57.005Z",
                    area: {
                      name: "teste",
                    },
                    subProcess: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9ed6862b-62fd-406d-a80c-7d70953db155",
    name: "testefilho",
    areaId: 3,
    description: "alou alou um dois tres",
    fatherProcessId: null,
    createdAt: "2023-09-19T17:39:08.117Z",
    updatedAt: "2023-09-19T17:39:08.117Z",
    area: {
      name: "teste",
    },
    subProcess: [
      {
        id: "a62aab12-30b7-4b22-b1a3-8b485240aefb",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "9ed6862b-62fd-406d-a80c-7d70953db155",
        createdAt: "2023-09-19T17:39:33.013Z",
        updatedAt: "2023-09-19T17:39:33.013Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
    ],
  },
  {
    id: "5f258d20-3fc2-460a-aa99-87a290f959b8",
    name: "testefilho",
    areaId: 3,
    description: null,
    fatherProcessId: null,
    createdAt: "2023-09-20T19:37:16.042Z",
    updatedAt: "2023-09-20T19:37:16.042Z",
    area: {
      name: "teste",
    },
    subProcess: [],
  },
  {
    id: "8c416eaa-1680-4bd8-8d72-7306c7494ab2",
    name: "Peppa Pig",
    areaId: 1,
    description: "adasdad",
    fatherProcessId: null,
    createdAt: "2023-09-20T21:55:06.881Z",
    updatedAt: "2023-09-20T21:55:06.881Z",
    area: {
      name: "testes",
    },
    subProcess: [],
  },
  {
    id: "5582b835-d1ee-420c-83c9-3d32488e93ea",
    name: "Leonan Martins",
    areaId: 1,
    description: "asdasd",
    fatherProcessId: null,
    createdAt: "2023-09-20T21:59:39.653Z",
    updatedAt: "2023-09-20T21:59:39.653Z",
    area: {
      name: "testes",
    },
    subProcess: [
      {
        id: "78ec7645-f1bb-40bf-a4f8-133cadfc2860",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:07.668Z",
        updatedAt: "2023-09-20T23:01:07.668Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "1f6357f6-33c1-4f91-a9ee-6375e28fc4eb",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:10.645Z",
        updatedAt: "2023-09-20T23:01:10.645Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "47772df5-af2d-4d0e-b775-fae6b9a37212",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:10.860Z",
        updatedAt: "2023-09-20T23:01:10.860Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "3375345f-1d42-4f06-89bc-7c9b98ecef83",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:11.138Z",
        updatedAt: "2023-09-20T23:01:11.138Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "e12386e7-d842-4cf4-8348-fc08b12fc775",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:11.397Z",
        updatedAt: "2023-09-20T23:01:11.397Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "8a4478f1-de36-4218-a575-ed8c9ad54240",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:11.775Z",
        updatedAt: "2023-09-20T23:01:11.775Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "b0aa90e9-1722-41d6-ab6a-a0900ffb4510",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:11.953Z",
        updatedAt: "2023-09-20T23:01:11.953Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "b7095691-3533-4c48-b47b-30599f151ab3",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:12.123Z",
        updatedAt: "2023-09-20T23:01:12.123Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "22c63178-c574-4e9a-bd30-25e5bfc864b2",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:12.337Z",
        updatedAt: "2023-09-20T23:01:12.337Z",
        area: {
          name: "teste",
        },
        subProcess: [],
      },
      {
        id: "07b59786-7e12-455a-ad21-a13263228c0a",
        name: "testefilho",
        areaId: 3,
        description: "alou alou um dois tres",
        fatherProcessId: "5582b835-d1ee-420c-83c9-3d32488e93ea",
        createdAt: "2023-09-20T23:01:12.509Z",
        updatedAt: "2023-09-20T23:01:12.509Z",
        area: {
          name: "teste",
        },
        subProcess: [
          {
            id: "f0b3f0fc-791f-42ed-b860-d1d711981105",
            name: "testeneto",
            areaId: 3,
            description: "alou alou um dois tres",
            fatherProcessId: "07b59786-7e12-455a-ad21-a13263228c0a",
            createdAt: "2023-09-20T23:01:26.529Z",
            updatedAt: "2023-09-20T23:01:26.529Z",
            area: {
              name: "teste",
            },
            subProcess: [],
          },
          {
            id: "8620efff-1072-4739-82d0-199a954551f4",
            name: "testeneto",
            areaId: 3,
            description: "alou alou um dois tres",
            fatherProcessId: "07b59786-7e12-455a-ad21-a13263228c0a",
            createdAt: "2023-09-20T23:01:26.705Z",
            updatedAt: "2023-09-20T23:01:26.705Z",
            area: {
              name: "teste",
            },
            subProcess: [],
          },
          {
            id: "d1e41d75-e7cd-4a4a-93c4-6abd4d2a3a3c",
            name: "testeneto",
            areaId: 3,
            description: "alou alou um dois tres",
            fatherProcessId: "07b59786-7e12-455a-ad21-a13263228c0a",
            createdAt: "2023-09-20T23:01:26.878Z",
            updatedAt: "2023-09-20T23:01:26.878Z",
            area: {
              name: "teste",
            },
            subProcess: [
              {
                id: "ea83c6a5-3de7-4307-a118-847fc34b0b09",
                name: "testebisneto",
                areaId: 3,
                description: "alou alou um dois tres",
                fatherProcessId: "d1e41d75-e7cd-4a4a-93c4-6abd4d2a3a3c",
                createdAt: "2023-09-20T23:01:40.714Z",
                updatedAt: "2023-09-20T23:01:40.714Z",
                area: {
                  name: "teste",
                },
                subProcess: [],
              },
              {
                id: "d672c10e-8d6e-4319-958c-68d9800b5113",
                name: "testebisneto",
                areaId: 3,
                description: "alou alou um dois tres",
                fatherProcessId: "d1e41d75-e7cd-4a4a-93c4-6abd4d2a3a3c",
                createdAt: "2023-09-20T23:01:40.957Z",
                updatedAt: "2023-09-20T23:01:40.957Z",
                area: {
                  name: "teste",
                },
                subProcess: [
                  {
                    id: "a0d5a9e3-e268-4f36-b2a0-2e2da95d57b4",
                    name: "tataraneto",
                    areaId: 3,
                    description: "alou alou um dois tres",
                    fatherProcessId: "d672c10e-8d6e-4319-958c-68d9800b5113",
                    createdAt: "2023-09-20T23:02:02.026Z",
                    updatedAt: "2023-09-20T23:02:02.026Z",
                    area: {
                      name: "teste",
                    },
                    subProcess: [],
                  },
                ],
              },
              {
                id: "cda7185a-d817-4624-a62c-f4bdb4feee67",
                name: "testebisneto",
                areaId: 3,
                description: "alou alou um dois tres",
                fatherProcessId: "d1e41d75-e7cd-4a4a-93c4-6abd4d2a3a3c",
                createdAt: "2023-09-20T23:02:06.323Z",
                updatedAt: "2023-09-20T23:02:06.323Z",
                area: {
                  name: "teste",
                },
                subProcess: [],
              },
              {
                id: "b4a11685-5f32-4863-9025-be74a34d58cc",
                name: "testebisneto",
                areaId: 3,
                description: "alou alou um dois tres",
                fatherProcessId: "d1e41d75-e7cd-4a4a-93c4-6abd4d2a3a3c",
                createdAt: "2023-09-20T23:02:13.101Z",
                updatedAt: "2023-09-20T23:02:13.101Z",
                area: {
                  name: "teste",
                },
                subProcess: [
                  {
                    id: "b411af36-44ac-4aea-8f7f-a735c999662b",
                    name: "tataraneto",
                    areaId: 3,
                    description: "alou alou um dois tres",
                    fatherProcessId: "b4a11685-5f32-4863-9025-be74a34d58cc",
                    createdAt: "2023-09-20T23:02:27.842Z",
                    updatedAt: "2023-09-20T23:02:27.842Z",
                    area: {
                      name: "teste",
                    },
                    subProcess: [
                      {
                        id: "e74a2473-5363-4ae5-a24e-4e874d400815",
                        name: "estouy muy loco",
                        areaId: 3,
                        description: "alou alou um dois tres",
                        fatherProcessId: "b411af36-44ac-4aea-8f7f-a735c999662b",
                        createdAt: "2023-09-20T23:02:42.537Z",
                        updatedAt: "2023-09-20T23:02:42.537Z",
                        area: {
                          name: "teste",
                        },
                        subProcess: [],
                      },
                      {
                        id: "dc2df7e4-b260-4ff8-985b-4e64c70eda94",
                        name: "estouy muy loco",
                        areaId: 3,
                        description: "alou alou um dois tres",
                        fatherProcessId: "b411af36-44ac-4aea-8f7f-a735c999662b",
                        createdAt: "2023-09-20T23:02:43.975Z",
                        updatedAt: "2023-09-20T23:02:43.975Z",
                        area: {
                          name: "teste",
                        },
                        subProcess: [
                          {
                            id: "005375ac-9d91-4c46-9568-d7762dd6757c",
                            name: "potato",
                            areaId: 3,
                            description: "alou alou um dois tres",
                            fatherProcessId:
                              "dc2df7e4-b260-4ff8-985b-4e64c70eda94",
                            createdAt: "2023-09-20T23:02:56.504Z",
                            updatedAt: "2023-09-20T23:02:56.504Z",
                            area: {
                              name: "teste",
                            },
                            subProcess: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
