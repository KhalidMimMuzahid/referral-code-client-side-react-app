import { useContext } from "react";
import { UserContext } from "../context/userProvider";
import { useForm } from "react-hook-form";
function Register() {
  const { userName } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const userHandleSubmit = async (data) => {
    console.log(data);

    const res = await fetch("http://localhost:5000/api/v1/users/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    console.log({ result });
  };
  return (
    <div className="flex h-screen">
      {/* <!-- Left Pane --> */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="524.67004"
            height="531.39694"
            className="w-full"
            alt="https://undraw.co/illustrations"
            title="https://undraw.co/illustrations"
            viewBox="0 0 524.67004 531.39694"
          >
            <polygon
              points="117.67523 88.74385 113.67523 109.74385 133.61763 115.36589 131.1398 92.94604 117.67523 88.74385"
              fill="#a0616a"
            />
            <path
              d="M0,523.44458c0,.66003,.53003,1.19,1.19006,1.19H523.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
              fill="#3f3d56"
            />
            <g>
              <path
                d="M356.03772,238.30865H150.36885c-23.32296,0-42.22995,18.90698-42.22995,42.22995v199.43289c0,23.32291,18.90695,42.22986,42.22986,42.22986h205.66896c23.32297,0,42.22995-18.90698,42.22995-42.22995v-199.43283c0-23.32297-18.90698-42.22995-42.22995-42.22995v.00003Z"
                fill="#fff"
              />
              <path
                d="M356.03781,523.20093H150.36888c-23.83691,0-43.22998-19.39258-43.22998-43.22949v-199.43262c0-23.83691,19.39307-43.22998,43.22998-43.22998h205.66896c23.83691,0,43.22998,19.39307,43.22998,43.22998v199.43262c0,23.83691-19.39307,43.22949-43.22998,43.22949h-.00003ZM150.36888,239.30882c-22.73438,0-41.22998,18.49562-41.22998,41.23v199.43262c0,22.73438,18.49561,41.22949,41.22998,41.22949h205.66896c22.73438,0,41.22998-18.49512,41.22998-41.22949v-199.43262c0-22.73438-18.49561-41.22998-41.22998-41.22998H150.36888v-.00002Z"
                fill="#3f3d56"
              />
              <path
                d="M370.93558,324.77005h-82.66788c-3.50635,0-6.35907-2.85272-6.35907-6.35907s2.85272-6.35907,6.35907-6.35907h82.66785c3.50635,0,6.35907,2.85272,6.35907,6.35907s-2.85272,6.35907-6.35907,6.35907h.00003Z"
                fill="#000000"
              />
              <path
                d="M293.3822,374.77737h-80.3571c-2.02586,0-3.67427-1.64841-3.67427-3.67429s1.64841-3.67352,3.67427-3.67352h80.3571c2.02588,0,3.67352,1.64764,3.67352,3.67352s-1.64764,3.67426-3.67352,3.67426v.00003Z"
                fill="#000000"
              />
              <rect
                x="133.61763"
                y="251.96666"
                width="46.49806"
                height="5.96129"
                rx=".31021"
                ry=".31021"
                fill="#000000"
              />
              <circle cx="334.3363" cy="253.15892" r="4.76904" fill="#3f3d56" />
              <circle
                cx="347.45114"
                cy="253.15892"
                r="4.76904"
                fill="#3f3d56"
              />
              <circle
                cx="360.56598"
                cy="253.15892"
                r="4.76904"
                fill="#3f3d56"
              />
              <path
                d="M149.86826,394.44458c0,.66003,.53003,1.19,1.19006,1.19h204.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H151.05832c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                fill="#3f3d56"
              />
            </g>
            <g>
              <path
                id="uuid-d0b76542-8f08-4363-846d-0cc3b89caf22-176"
                d="M212.17296,100.91704c4.34915-3.59367,9.72871-4.26258,12.0153-1.49438,2.28658,2.7682,.6142,7.92447-3.73698,11.51883-1.71841,1.45964-3.76141,2.48653-5.95805,2.99474l-18.6198,14.99379-6.8499-8.8877,19.08307-13.83763c.91373-2.06202,2.30807-3.87516,4.06638-5.28765h-.00002Z"
                fill="#a0616a"
              />
              <path
                d="M104.55261,134.74706c-.00944-.66307-.00322-6.44713,4.27885-10.10294,4.91893-4.1995,11.85979-2.49972,14.29424-1.90355,5.62363,1.37718,6.08482,3.78959,11.36601,6.2683,9.88049,4.63744-2.4994,2.26379,3.37981,.77675,2.03505-.51472,31.31216-2.54515,38.59979-7.03056,14.17354-8.72353,23.83086-14.01349,23.83086-14.01349l6.31322,12.62642s-9.12891,12.69357-21.97707,22.09717c-13.17929,9.64592-19.76894,14.46893-29.78342,16.3324-.8624,.16048-22.0723,3.78188-39.15515-8.98085-3.89654-2.91112-11.03588-8.24498-11.14714-16.06966v.00002Z"
                fill="#e6e6e6"
              />
              <circle cx="124.1365" cy="80.64255" r="21.99265" fill="#a0616a" />
              <g>
                <polygon
                  points="296.37473 228.39777 273.72531 205.21346 262.03351 217.40936 278.90814 239.63901 295.64612 241.55336 296.37473 228.39777"
                  fill="#a0616a"
                />
                <path
                  d="M167.04568,184.92191c1.32477,.11008,5.53464,.95349,9.55849-1.26038,2.74614-1.51086,4.15456-3.75739,4.63022-4.4718,5.90138-8.86325,28.55225-22.68449,48.88084-23.53503,4.60358-.1926,7.63374,.34082,10.38795,1.77647,3.90536,2.03574,5.46449,4.95183,10.4203,11.78291,2.71086,3.73663,5.71039,7.25691,8.45392,10.96962,16.06195,21.73621,22.15103,23.4426,21.52869,30.41109-.69049,7.73164-9.02899,15.06697-14.57111,14.22018-2.26965-.34679-3.14862-1.92497-6.181-5.1199-8.89113-9.36768-12.56963-7.63699-18.89978-14.81212-7.39056-8.37709-6.42307-15.32303-10.27892-15.59132-3.57571-.24879-5.09525,5.67668-12.72906,13.54826-3.49306,3.60187-5.98048,5.2542-13.55853,10.51141-29.51064,20.4729-29.98163,21.91164-35.93719,23.54443-2.60568,.71437-21.09953,5.78468-27.68759-2.28407-10.30952-12.62669,14.04588-50.68156,25.98276-49.68979l.00002,.00003Z"
                  fill="#2f2e41"
                />
                <path
                  d="M289.45026,233.63687c1.66577-.74799,3.61353-1.62257,4.24017-3.63382,.42404-1.3609,.17984-3.03893-.69662-4.19846-1.01126-1.33788-2.50809-1.51421-2.44754-1.75092,.09222-.36043,3.63171-.21954,7.51718,1.15395,.73322,.25919,4.0549,1.47292,8.28021,4.77161,3.38531,2.64291,2.92975,3.17274,5.05261,4.69666,6.51636,4.67783,12.62817,.99107,16.15421,5.37796,1.36081,1.69307,1.94122,4.09685,1.36853,6.04048-1.15005,3.90324-6.74286,5.24648-9.7995,5.93997-7.36151,1.6702-12.93347,.30673-18.75162-.67366-19.78659-3.33418-30.9039-.29752-32.39188-4.8815-.28162-.86758,.1759-.7937,1.70154-7.16035,1.50577-6.2838,1.45636-8.00951,2.7388-8.5127,1.93039-.75745,3.22656,2.68803,8.08945,3.86719,4.3093,1.04492,7.86514-.55173,8.94449-1.03639l-.00003-.00002Z"
                  fill="#2f2e41"
                />
              </g>
              <g>
                <polygon
                  points="256.10776 304.24255 250.38535 272.34015 233.86249 275.8663 235.34267 303.73599 248.11754 314.71902 256.10776 304.24255"
                  fill="#a0616a"
                />
                <path
                  d="M173.50761,195.64528c1.03436,.83499,4.04422,3.89687,8.61693,4.32455,3.1207,.29189,5.54761-.77612,6.34238-1.10016,9.86015-4.02007,36.36378-2.73717,53.66232,7.97432,3.91739,2.4257,6.12517,4.56865,7.59796,7.30318,2.08836,3.87749,1.74097,7.16592,2.00574,15.60118,.14485,4.61414,.65005,9.21133,.83536,13.82404,1.08478,27.00504,5.16501,31.83624,.73697,37.25284-4.91296,6.0098-15.93172,7.39706-20.04204,3.58429-1.6833-1.56143-1.52438-3.3609-2.23946-7.70731-2.09668-12.74399-6.1123-13.37756-7.32111-22.86923-1.41129-11.08171,3.28967-16.28586,.2498-18.67307-2.81902-2.21375-7.40373,1.83601-18.14053,4.06268-4.91292,1.01889-7.89899,.98932-17.12157,1.08406-35.91492,.369-37.11255,1.29501-42.95737-.69821-2.55722-.87209-20.70715-7.06165-21.62754-17.43758-1.44026-16.23715,40.08189-34.04922,49.40214-26.52557l.00002-.00002Z"
                  fill="#2f2e41"
                />
                <path
                  d="M247.43616,304.6893c1.79837,.31647,3.90115,.68652,5.54907-.62579,1.11507-.88797,1.85529-2.41357,1.78117-3.86517-.08551-1.6749-1.22504-2.66132-1.04201-2.82318,.2787-.24646,3.12833,1.85767,5.57211,5.17599,.46115,.62619,2.52814,3.49573,4.17203,8.5979,1.31711,4.08786,.64261,4.27045,1.54343,6.72348,2.7652,7.52985,9.89267,7.91125,10.34689,13.52118,.17529,2.16507-.69427,4.48001-2.25958,5.76669-3.14343,2.58392-8.52548,.55484-11.44412-.58774-7.02916-2.75177-10.87405-7.00882-15.13779-11.08716-14.50015-13.86978-25.4044-17.59988-24.06155-22.22845,.25415-.87601,.59125-.55798,5.42874-4.96936,4.77454-4.354,5.70271-5.80966,7.04642-5.50592,2.02264,.45724,1.1604,4.03604,4.52206,7.74243,2.97899,3.28445,6.81783,3.96005,7.98309,4.1651h.00003Z"
                  fill="#2f2e41"
                />
              </g>
              <path
                d="M127.13487,84.84692c.85618-3.06269-.2192-4.1788,.87688-5.55356,.00002-.00004,.44109-.55322,4.38438-2.04605h0c-1.16344-6.75042-.29231-7.89186-.2923-7.8919,1.00398-1.31553,3.0152-1.63355,4.38438-1.46146,2.89578,.36397,3.40837,2.98166,5.26128,2.92293,2.55962-.08114,5.62956-5.20482,4.67668-9.64566-.77728-3.62247-4.12881-6.31266-4.96896-5.84585-.83301,.46284-3.83173-1.5781-4.96896-1.16917-.77666,.27927-4.43236-.09227-5.26128,.29229-.90523,.41999-3.49763,3.03482-3.74548,2.70535-1.72237-2.28946-1.6857-3.0888-2.68496-3.58223-1.77067-.87434-3.69571,.74172-7.01502,2.33834-6.82959,3.28508-8.8294,1.32549-11.984,4.0921-1.59355,1.39756-2.44808,4.06851-4.0921,9.35336-2.29915,7.39081-3.44871,11.08621-2.33834,14.61463,1.13238,3.59835,2.79995,2.81517,5.26127,7.8919,2.73983,5.65125,1.79552,8.93605,4.38439,10.23024,2.00086,1.00026,5.21638,.36365,6.43044-1.46146,2.07861-3.12477-3.29393-7.35177-1.46146-12.27629,1.12484-3.02287,4.59478-5.31493,6.72273-4.67668,2.40606,.72167,2.58325,5.03573,4.0921,4.96897,1.29207-.05716,2.18914-3.2661,2.33834-3.7998l-.00002-.00002Z"
                fill="#2f2e41"
              />
              <path
                d="M110.47419,105.89199c4.50049-5.04615,22.83196,.17676,24.55257,8.18419,.7077,3.29357-1.90491,4.68425-1.16917,8.47649,1.0761,5.54668,7.16908,5.16857,11.6917,10.81483,6.42075,8.01601-.19392,15.85188,7.01501,29.22926,1.54044,2.85857,2.83881,5.26787,5.55356,7.59961,6.22958,5.35068,12.02718,3.51566,15.19922,8.47649,2.37209,3.70978,1.39748,8.28224,1.16917,9.35336-.93616,4.39206-3.47342,5.46222-5.26128,9.06107-2.97456,5.98761,.39336,10.38356,.58459,17.53755,.23927,8.95093-4.51735,21.35847-14.03004,25.42946-10.68707,4.57356-23.57658-3.00133-29.81385-10.52254-3.72182-4.48801-4.8022-8.62788-6.43044-13.73775-7.27695-22.8373-11.38807-20.77184-16.95297-38.87492-6.3617-20.69511-7.61233-44.94052,0-52.61267,1.00898-1.01692,3.78571-3.36736,5.55356-7.59961,2.37887-5.69507,.32374-8.55598,2.33834-10.81483h.00003Z"
                fill="#e6e6e6"
              />
              <g>
                <path
                  id="uuid-35da8825-ceb1-46f8-a8e3-884fcc945dd4-177"
                  d="M176.97331,223.35873c3.48927,4.43333,4.03014,9.82729,1.20837,12.04742-2.82178,2.22012-7.93683,.42567-11.42674-4.0097-1.41838-1.75262-2.39642-3.81944-2.85228-6.02756l-14.54698-18.97093,7.51668-5.73344,14.91145,18.50331c2.03972,.96246,3.81921,2.39954,5.18951,4.1909h-.00002Z"
                  fill="#a0616a"
                />
                <path
                  d="M123.69743,125.12312c.64719-.14454,6.31084-1.31867,10.76347,2.12736,5.11484,3.95855,4.86707,11.10023,4.7802,13.60509-.20073,5.78632-2.46828,6.73006-3.81723,12.40591-2.52377,10.61887,2.28253,20.4873,4.93793,25.93939,.91914,1.88721,3.87206,7.66187,9.75011,13.88094,11.43207,12.09534,21.6324,18.45987,21.6324,18.45987l-10.95802,9.74043s-17.45493-5.32021-29.2823-15.97929c-12.13217-10.93381-30.78935-49.61903-34.65703-59.04257-.33308-.81151,4.38498,12.3821,13.39349-6.94556,2.0548-4.40857,5.81969-12.48606,13.45703-14.19157h-.00005Z"
                  fill="#e6e6e6"
                />
              </g>
            </g>
            <g>
              <path
                id="uuid-ba1531a6-e7ab-4297-b996-1d676f43fe3f-178"
                d="M273.9451,421.68622c-6.96509,1.06757-12.06003,5.52673-11.37988,9.95923,.68015,4.43253,6.87711,7.15915,13.84454,6.09027,2.78906-.38879,5.44446-1.43985,7.74402-3.06528l29.45425-4.896-1.96582-11.64267-29.38782,4.15851c-2.68179-.86206-5.53104-1.06921-8.30927-.60406h-.00003Z"
                fill="#ffb6b6"
              />
              <polygon
                points="400.8699 385.39481 389.44897 409.62982 332.03436 428.95758 284.39166 431.49936 283.19855 420.05627 334.83203 409.26022 387.81458 384.22287 400.8699 385.39481"
                fill="#e6e6e6"
              />
              <polygon
                points="294.97583 477.41565 284.72217 503.35138 271.4527 494.30402 279.29373 467.16196 294.97583 477.41565"
                fill="#ffb6b6"
              />
              <polygon
                points="252.15169 467.76511 225.00961 493.70087 235.86644 505.16086 263.61166 483.4472 252.15169 467.76511"
                fill="#ffb6b6"
              />
              <polygon
                points="405.95673 383.32312 405.65515 381.21207 398.71884 367.64105 375.79889 373.67261 380.02097 392.37048 405.95673 383.32312"
                fill="#ffb6b6"
              />
              <path
                d="M396.30621,473.79669l.70486,9.05923s2.91406,37.98703-20.60907,41.00284-33.77679,6.03156-47.64941-17.49155l-21.71365-38.60205-12.68292,15.09079-16.87177-13.28134s12.06314-47.04623,21.71365-48.85571c1.2063-.22617,2.41263-.33929,3.6001-.36401,7.98938-.16644,15.5206,3.74139,20.30084,10.14508l27.36743,36.66202,9.95209-4.52368,35.88785,11.15842v-.00003Z"
                fill="#2f2e41"
              />
              <path
                d="M266.02429,502.14508l5.42841-10.25366,15.68207,10.85684s3.61893,13.26944-1.80948,15.07895-20.50735-.60315-20.50735-.60315c0,0-27.74522,6.03156-28.34837,.60315s12.66631-6.63474,12.66631-6.63474l16.8884-9.04736,.00003-.00003Z"
                fill="#2f2e41"
              />
              <path
                d="M325.13367,494.9072l-41.91943-26.41306-21.41208,19.17517-14.47577-16.8884s26.53891-39.2052,34.37994-41.01468,20.50735-3.01578,20.50735-3.01578l38.60205,35.58627-15.68207,32.5705v-.00003Z"
                fill="#2f2e41"
              />
              <path
                d="M224.40645,491.28824l13.8726,15.07892-1.82944,1.56488s-3.59898,15.67496-12.04318,10.37241-9.04736-6.50888-9.04736-6.50888c0,0-24.12628,5.42844-26.53891-4.22211s4.22211-7.84103,4.22211-7.84103l6.02444,3.61893,25.33972-12.06314,.00002,.00003Z"
                fill="#2f2e41"
              />
              <circle
                cx="383.03677"
                cy="361.00632"
                r="19.30103"
                fill="#ffb6b6"
              />
              <path
                d="M378.51309,388.44998l27.74524-8.44421s10.85684,25.33261,9.04736,36.79257c-1.80948,11.45999-18.29459,66.05756-18.29459,66.05756l-36.59271-20.21765s-.60315-12.06314-2.41263-17.49155-7.53946-22.01523,5.12683-35.88785,15.38052-20.80893,15.38052-20.80893l-.00003,.00006Z"
                fill="#e6e6e6"
              />
              <g>
                <path
                  id="uuid-375aaccb-22f9-42b6-a352-baabb12db8d2-179"
                  d="M317.44769,515.10181c-4.51538,5.40955-5.38428,12.12427-1.9411,14.99738,3.44315,2.87305,9.89352,.81635,14.40979-4.59576,1.83371-2.13715,3.12897-4.68237,3.77734-7.42273l18.84238-23.1622-9.17844-7.42783-19.28064,22.56531c-2.58105,1.12839-4.85428,2.85858-6.62936,5.0459l.00003-.00006Z"
                  fill="#ffb6b6"
                />
                <polygon
                  points="399.79492 400.61868 406.35291 426.59497 374.25586 477.97375 341.48965 510.90475 330.86948 502.09406 363.91479 460.97745 388.96295 407.99997 399.79492 400.61868"
                  fill="#e6e6e6"
                />
              </g>
              <path
                d="M365.24362,357.68896c4.94998-.01184,5.23102,.02112,6.03156,0,6.1395-.1619,7.74496-2.57733,10.85684-2.41263,5.55417,.29398-1.77649,28.14084-4.82526,41.01468-2.99002,12.62589,7.11493,23.9397,7.84103,24.72943,10.25668,11.15479,28.27277,13.19449,31.36417,8.44421,2.50223-3.84491-6.36569-9.69107-4.22211-18.0947,2.09543-8.21484,11.77112-7.34009,14.47577-15.07892,2.83246-8.10455-6.68613-12.19214-12.66629-31.96732-3.43442-11.35699-2.82687-13.47311-6.03156-20.50732-8.56613-18.80209-50.55359-10.79666-45.83994,6.63474,.9118,3.37189-1.51474,7.24872,3.01578,7.23788v-.00006Z"
                fill="#2f2e41"
              />
            </g>
            <g>
              <path
                d="M426.8764,128.56088H224.02585c-5.7366,0-10.4035-4.66732-10.4035-10.4035V10.4035c0-5.73617,4.6669-10.4035,10.4035-10.4035h202.85056c5.7366,0,10.4035,4.66732,10.4035,10.4035V118.15739c0,5.73617-4.6669,10.4035-10.4035,10.4035Z"
                fill="#fff"
              />
              <path
                d="M426.8764,128.56088H224.02585c-5.7366,0-10.4035-4.66732-10.4035-10.4035V10.4035c0-5.73617,4.6669-10.4035,10.4035-10.4035h202.85056c5.7366,0,10.4035,4.66732,10.4035,10.4035V118.15739c0,5.73617-4.6669,10.4035-10.4035,10.4035ZM224.02585,1.73731c-4.77844,0-8.66618,3.88774-8.66618,8.66619V118.15739c0,4.77845,3.88774,8.66619,8.66618,8.66619h202.85056c4.77844,0,8.6662-3.88774,8.6662-8.66619V10.4035c0-4.77845-3.88773-8.66619-8.6662-8.66619H224.02585Z"
                fill="#3f3d56"
              />
              <circle cx="411.22028" cy="10.42386" r="2.60596" fill="#3f3d56" />
              <circle cx="418.16949" cy="10.42386" r="2.60596" fill="#3f3d56" />
              <circle cx="425.11874" cy="10.42386" r="2.60596" fill="#3f3d56" />
              <path
                d="M228.38948,52.5536c-.71851,0-1.30298,.58448-1.30298,1.30298,0,.35035,.1353,.67439,.38087,.91361,.2477,.25364,.57217,.38937,.9221,.38937h194.99193c.71851,0,1.30298-.58448,1.30298-1.30298,0-.35035-.13531-.67439-.38089-.91361-.24771-.25364-.57217-.38937-.92209-.38937H228.38948Z"
                fill="#e6e6e6"
              />
              <path
                d="M399.05911,52.11928v3.47462H228.38948c-.47775,0-.91208-.19113-1.22478-.51253-.32146-.3127-.51253-.74703-.51253-1.22478,0-.95555,.78181-1.73731,1.7373-1.73731h170.66963Z"
                fill="#000000"
              />
              <path
                d="M421.20978,45.60437h-17.37308c-1.91589,0-3.47461-1.55832-3.47461-3.47462s1.55875-3.47462,3.47461-3.47462h17.37308c1.91589,0,3.47461,1.55832,3.47461,3.47462s-1.55875,3.47462-3.47461,3.47462Z"
                fill="#e6e6e6"
              />
              <path
                d="M307.41605,27.36262h-77.72357c-1.91588,0-3.47462-1.55832-3.47462-3.47462s1.55875-3.47462,3.47462-3.47462h77.72357c1.91589,0,3.47461,1.55832,3.47461,3.47462s-1.55875,3.47462-3.47461,3.47462Z"
                fill="#e6e6e6"
              />
              <path
                d="M228.38948,91.64306c-.71851,0-1.30298,.58448-1.30298,1.30298,0,.35035,.1353,.67439,.38087,.91361,.2477,.25364,.57217,.38937,.9221,.38937h194.99193c.71851,0,1.30298-.58448,1.30298-1.30298,0-.35035-.13531-.67439-.38089-.91361-.24771-.25364-.57217-.38937-.92209-.38937H228.38948Z"
                fill="#e6e6e6"
              />
              <path
                d="M332.1727,91.20873v3.47462h-103.78322c-.47775,0-.91208-.19113-1.22478-.51253-.32146-.3127-.51253-.74703-.51253-1.22478,0-.95555,.78181-1.73731,1.7373-1.73731h103.78322Z"
                fill="#000000"
              />
              <path
                d="M421.20978,84.69383h-17.37308c-1.91589,0-3.47461-1.55832-3.47461-3.47462s1.55875-3.47462,3.47461-3.47462h17.37308c1.91589,0,3.47461,1.55832,3.47461,3.47462s-1.55875,3.47462-3.47461,3.47462Z"
                fill="#e6e6e6"
              />
            </g>
          </svg>
        </div>
      </div>
      {/* <!-- Right Pane --> */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Log In
          </h1>

          <form
            action="#"
            onSubmit={handleSubmit(userHandleSubmit)}
            method="POST"
            className="space-y-4"
          >
            {/* <!-- Your form elements go here --> */}
            <div>
              {/* input tag and label  */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    maxLength: {
                      value: 20,
                      message: "Name must 5-20 characters",
                    },
                    minLength: {
                      value: 5,
                      message: "Name must 5-20 characters",
                    },
                  })}
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              {/* error message  */}

              {errors.name && (
                <p className="text-red-600 font-semibold" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              {/* input tag and label  */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              {/* error message  */}

              {errors.email && (
                <p className="text-red-600 font-semibold" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              {/* input tag and label  */}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                    minLength: {
                      value: 8,
                      message: "Password length must be 8-10 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password length must be 8-10 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
                      message:
                        "password must contain at least one uppercase and lowercase letter and a numeric digit and a special character",
                    },
                  })}
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              {/* error message  */}

              {errors.password && (
                <p className="text-red-600 font-semibold" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <a href="#" className="text-black hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
