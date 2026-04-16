import { useState, useRef, useEffect } from "react";

function Ic({name,size=18,color="#6e6e6e"}){
  const d={
    chart:<><rect x="3" y="12" width="4" height="8" rx="1" fill={color} opacity=".6"/><rect x="10" y="6" width="4" height="14" rx="1" fill={color}/><rect x="17" y="9" width="4" height="11" rx="1" fill={color} opacity=".6"/></>,
    database:<><ellipse cx="12" cy="5.5" rx="7.5" ry="3" stroke={color} strokeWidth="1.5" fill="none"/><path d="M4.5 5.5v5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5" stroke={color} strokeWidth="1.5" fill="none"/></>,
    sliders:<><line x1="4" y1="21" x2="4" y2="14" stroke={color} strokeWidth="1.5"/><line x1="4" y1="10" x2="4" y2="3" stroke={color} strokeWidth="1.5"/><line x1="12" y1="21" x2="12" y2="12" stroke={color} strokeWidth="1.5"/><line x1="12" y1="8" x2="12" y2="3" stroke={color} strokeWidth="1.5"/></>,
    flag:<><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="4" y1="22" x2="4" y2="15" stroke={color} strokeWidth="1.5"/></>,
    sparkle:<path d="M12 2l1.8 5.4L19.2 9l-5.4 1.8L12 16.2l-1.8-5.4L4.8 9l5.4-1.8L12 2z" fill={color}/>,
    target:<><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/><path d="M12 8v8M8 12h8" stroke={color} strokeWidth="1.5"/></>,
    link:<><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke={color} strokeWidth="1.5" fill="none"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke={color} strokeWidth="1.5" fill="none"/></>,
    edit:<><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke={color} strokeWidth="1.5" fill="none"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    x:<><line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="1.5"/><line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="1.5"/></>,
    home:<><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M9 21V12h6v9" stroke={color} strokeWidth="1.5" fill="none"/></>,
    contacts:<><circle cx="9" cy="7" r="4" stroke={color} strokeWidth="1.5" fill="none"/><path d="M2 21v-1a7 7 0 0114 0v1" stroke={color} strokeWidth="1.5" fill="none"/><path d="M19 8v6M22 11h-6" stroke={color} strokeWidth="1.5"/></>,
    flows:<><rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" fill="none"/></>,
    growth:<><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    settings:<><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    help:<><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="12" cy="17" r=".5" fill={color} stroke={color} strokeWidth="1"/></>,
    chevron:<><path d="M6 9l6 6 6-6" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    textlines:<><line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="18" x2="15" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    file:<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke={color} strokeWidth="1.5" fill="none"/><polyline points="14,2 14,8 20,8" stroke={color} strokeWidth="1.5" fill="none"/></>,
    instagram:<><rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="17.5" cy="6.5" r="1" fill={color}/></>,
    funnel:<><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    moredots:<><circle cx="5" cy="12" r="1.2" fill={color}/><circle cx="12" cy="12" r="1.2" fill={color}/><circle cx="19" cy="12" r="1.2" fill={color}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{flexShrink:0}}>{d[name]}</svg>;
}

const GlobalSidebarItem = ({icon, active, onClick}) => (
  <button onClick={onClick} title={icon} style={{width:40,height:40,borderRadius:10,border:"none",background:active?"#e5e5e3":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}} onMouseEnter={e=>{if(!active)e.currentTarget.style.background="#e9e9e7";}} onMouseLeave={e=>{if(!active)e.currentTarget.style.background="transparent";}}>
    <Ic name={icon} size={18} color={active?"#1a1a1a":"#8a8a8a"}/>
  </button>
);

function useBreakpoint(){
  const get=()=>window.innerWidth<=640?'mobile':window.innerWidth<=900?'compact':'desktop';
  const[bp,setBp]=useState(get);
  useEffect(()=>{const h=()=>setBp(get());window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h);},[]);
  return bp;
}

const KS=[
  {type:"link",title:"Double payment issue",url:"https://manychat.com/legal/dpa-01052023",updated:"Now",
   content:"If a customer reports being charged twice for the same order, please follow these steps:\n\nStep 1 – Verify the charge\nConfirm the duplicate transaction in the payment dashboard before taking any action.\n\nStep 2 – Issue a refund\nProcess a full refund for the duplicate charge within 24 hours of the report. Use the original payment method.\n\nStep 3 – Notify the customer\nSend an apology message confirming the refund has been issued. Let them know it may take 3–5 business days to appear.\n\nStep 4 – Escalate if needed\nIf the duplicate charge cannot be resolved automatically, escalate to the billing team with the order ID and transaction timestamps.\n\nNote: Do not promise a specific refund timeline beyond the standard 3–5 business days."},
  {type:"text",title:"Working hours",url:null,updated:"10 minutes ago",
   content:"Our studio is open during the following hours:\n\nMonday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 4:00 PM\nSunday: Closed\n\nPublic holidays: Closed. We will post any changes to our hours on Instagram in advance.\n\nConsultations and tastings are by appointment only. Please DM us to book a slot at least 48 hours in advance.\n\nFor urgent order inquiries outside business hours, please leave a message and we will respond the next business day."},
  {type:"text",title:"Delivery information",url:null,updated:"30 minutes ago",
   content:"We currently offer local delivery within a 20-mile radius of our studio.\n\nDelivery fee: $15 flat rate for orders under $200. Free delivery for orders $200 and above.\n\nDelivery schedule: We deliver Tuesday through Saturday. Orders must be placed at least 5 days in advance to guarantee your preferred delivery date.\n\nSetup: Our team will deliver and set up the cake at your venue. Please ensure someone is present at the delivery address.\n\nWe do not ship cakes. Pick-up from our studio is available by appointment."},
  {type:"link",title:"New chocolate recipes",url:"https://www.recipes.com/fuzzychocolate",updated:"1 day ago",
   content:"We've recently added three new chocolate cake options to our menu:\n\nDark Chocolate Ganache\nA rich, intense cake layered with 70% dark chocolate ganache and a mirror glaze finish. Available in 2-tier and 3-tier.\n\nSalted Caramel Chocolate\nMoist chocolate sponge filled with house-made salted caramel and topped with chocolate Swiss meringue buttercream.\n\nWhite Chocolate Raspberry\nLight vanilla sponge with white chocolate mousse and fresh raspberry compote. Popular for spring and summer weddings.\n\nAll new flavours are available for tasting. Contact us to arrange a tasting session."},
  {type:"text",title:"Custom cake order",url:null,updated:"10 days ago",
   content:"Custom cake orders require a minimum of 4 weeks notice. For wedding cakes, we recommend booking at least 3 months in advance.\n\nHow to order:\n1. Send us a DM with your event date, guest count, and any inspiration images.\n2. We will respond within 48 hours with availability and a quote.\n3. A 30% deposit is required to confirm your booking.\n4. Final payment is due 7 days before delivery.\n\nDesign changes are accepted up to 2 weeks before the event date. Changes requested after this point may incur additional charges.\n\nWe do not accept walk-in orders."},
  {type:"link",title:"Payment",url:"https://www.recipes.com/payment",updated:"1 month ago",
   content:"We accept the following payment methods:\n\nCredit & debit cards: Visa, Mastercard, American Express\nBank transfer: Details provided on invoice\nPayPal: Accepted for deposits only\n\nAll prices are in USD and include applicable taxes.\n\nDeposit policy: A 30% non-refundable deposit is required to secure your order date.\n\nCancellation policy:\n– Cancellations more than 14 days before the event: deposit forfeited, remaining balance refunded.\n– Cancellations within 14 days of the event: full payment is non-refundable.\n\nFor any billing questions, please contact us directly by DM."},
];

const BF={role:"Wedding Cake IG Creator",voice:"Warm, celebratory tone.\nGuide, do not push.",guardrails:"Never make promises.\nConnect with human if unsure."};
const NV=[{id:"overview",l:"Overview",i:"chart"},{id:"knowledge",l:"Knowledge",i:"database"},{id:"behavior",l:"Behavior",i:"sliders",b:"NEW"},{id:"skills",l:"Skills",i:"flag"}];
const GL={answer:"Help me answer customer questions faster",qualify:"Find and qualify my best leads",engage:"Keep my community engaged"};
const TL={book:"Qualify and book a call",freebie:"Capture leads and send a freebie",filter:"Screen and filter bad fits",scratch:"Start from scratch"};
const TP={
  book:{t:"Qualify and book a call",c:[{t:"Actively looking for help",f:"Intent"},{t:"Has a specific goal",f:"Goal"},{t:"Budget at least $3,000",f:"Budget"},{t:"Ready within 30 days",f:"Timeline"}],gl:"Hot lead",ga:"Share a link",bl:"Not ready yet",bi:3,ba:["Share a link","Handoff to me","Trigger automation","Exit gently"]},
  freebie:{t:"Capture leads and send a freebie",c:[{t:"Collect their name",f:"Name"},{t:"Collect their email",f:"Email"},{t:"What they are most interested in",f:"Interest"}],gl:"Lead captured",ga:"Share a link",bl:"Incomplete",bi:0,ba:["Share a link","Handoff to me","Trigger automation","Exit gently"]},
  filter:{t:"Screen and filter bad fits",c:[{t:"Budget at least $5,000",f:"Budget"},{t:"Must have active business",f:"Business"},{t:"Ready to commit in 30 days",f:"Commitment"}],gl:"Good fit",ga:"Share a link",bl:"Not a fit",bi:3,ba:["Share a link","Handoff to me","Trigger automation","Exit gently"]},
  scratch:{t:"Start from scratch",c:[],gl:"Qualified",ga:"Share a link",bl:"Not qualified",bi:3,ba:["Share a link","Handoff to me","Trigger automation","Exit gently"]},
};


const AB=({children})=><div style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:16}}><div style={{width:32,height:32,borderRadius:"50%",background:"#1a1a1a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}><Ic name="sparkle" size={16} color="#fff"/></div><div style={{padding:"12px 16px",borderRadius:"4px 16px 16px 16px",background:"#eef4ff",fontSize:14,lineHeight:1.6,maxWidth:420}}>{children}</div></div>;
const UB=({text})=><div style={{display:"flex",justifyContent:"flex-end",marginBottom:16,animation:"fd .3s ease"}}><div style={{padding:"10px 16px",borderRadius:"16px 4px 16px 16px",background:"#1a1a1a",color:"#fff",fontSize:14,maxWidth:340}}>{text}</div></div>;
const D3=()=><div style={{display:"flex",gap:10,alignItems:"flex-start",animation:"fd .3s ease"}}><div style={{width:32,height:32,borderRadius:"50%",background:"#1a1a1a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}><Ic name="sparkle" size={16} color="#fff"/></div><div style={{padding:"12px 16px",borderRadius:"4px 16px 16px 16px",background:"#eef4ff"}}><div style={{display:"flex",gap:5}}>{[0,1,2].map(j=><div key={j} style={{width:7,height:7,borderRadius:"50%",background:"#a0a0a0",animation:"pls 1.2s ease-in-out "+j*0.2+"s infinite"}}/>)}</div></div></div>;
const CK=()=><svg width="14" height="14" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const SP=()=><div style={{width:14,height:14,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:8,height:8,borderRadius:"50%",background:"#a0a0a0",animation:"pls 1s ease-in-out infinite"}}/></div>;
const LR=({done,active,text})=><div style={{marginBottom:6,display:"flex",alignItems:"center",gap:8,opacity:active||done?1:0.3,transition:"opacity .3s"}}>{done?<CK/>:active?<SP/>:<div style={{width:14,height:14}}/>}{text}</div>;
const TG=({isOn,onClick})=><div onClick={onClick} style={{width:40,height:22,borderRadius:11,background:isOn?"#16a34a":"#e5e5e3",position:"relative",cursor:"pointer",flexShrink:0,transition:"background .2s"}}><div style={{width:18,height:18,borderRadius:"50%",background:"#fff",position:"absolute",top:2,transition:"all .2s",...(isOn?{right:2}:{left:2}),boxShadow:"0 1px 3px rgba(0,0,0,.15)"}}/></div>;
const CB=({icon,t,d,onClick,delay})=><button onClick={onClick} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",borderRadius:12,border:"1px solid #e5e5e3",background:"#fff",cursor:"pointer",fontFamily:"inherit",textAlign:"left",width:"100%",...(delay?{animation:"fd .3s ease "+delay+"s both"}:{})}} onMouseEnter={e=>{e.currentTarget.style.borderColor="#c0c0c0";e.currentTarget.style.background="#fafafa";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#e5e5e3";e.currentTarget.style.background="#fff";}}><div style={{width:36,height:36,borderRadius:10,background:"#f4f4f4",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic name={icon} size={18} color="#6e6e6e"/></div><div><div style={{fontSize:14,fontWeight:600}}>{t}</div><div style={{fontSize:12,color:"#6e6e6e",marginTop:2}}>{d}</div></div></button>;

export default function App(){
  const bp=useBreakpoint();
  const isMobile=bp==='mobile';
  const isCompact=bp==='compact';
  const[pg,setPg]=useState("skills");
  const[ms,setMs]=useState([]);const[inp,setInp]=useState("");const[typ,setTyp]=useState(false);
  const[beh,setBeh]=useState({role:"",voice:"",guardrails:""});
  const[sk,setSk]=useState({qualify:false,engage:false});const[qt,setQt]=useState(null);const[dd,setDd]=useState(false);
  const[fv,setFv]=useState(true);const[sl,setSl]=useState(null);
  const[cs,setCs]=useState(0);const[t1,setT1]=useState("");const[t2,setT2]=useState("");
  const[sc1,setSc1]=useState(false);const[sc2,setSc2]=useState(false);const[ls,setLs]=useState(0);
  const[globalTab,setGlobalTab]=useState("ai");
  const[showPlayground,setShowPlayground]=useState(false);
  const[closingPlayground,setClosingPlayground]=useState(false);
  const[fabFlash,setFabFlash]=useState(false);
  const[selectedKS,setSelectedKS]=useState(null);
  const[highlightTexts,setHighlightTexts]=useState([]);
  const[playgroundWidth,setPlaygroundWidth]=useState(null);
  const[dragging,setDragging]=useState(false);
  const[showIA,setShowIA]=useState(false);
  const[showMobileMenu,setShowMobileMenu]=useState(false);
  const ce=useRef(null);
  const splitRef=useRef(null);

  const startResize=(e)=>{
    e.preventDefault();
    const startX=e.clientX;
    const startW=playgroundWidth||(splitRef.current?splitRef.current.offsetWidth*0.35:360);
    setDragging(true);
    const onMove=(ev)=>{
      if(!splitRef.current) return;
      const delta=startX-ev.clientX;
      const max=splitRef.current.offsetWidth*0.75;
      setPlaygroundWidth(Math.min(max,Math.max(280,startW+delta)));
    };
    const onUp=()=>{
      setDragging(false);
      document.removeEventListener("mousemove",onMove);
      document.removeEventListener("mouseup",onUp);
    };
    document.addEventListener("mousemove",onMove);
    document.addEventListener("mouseup",onUp);
  };
  const anyOn=sk.qualify||sk.engage;
  const hb=beh.role!==""||beh.voice!=="";
  const GM="I can help your business run on autopilot. What matters most to you right now?";
  const FM="How would you like to qualify your leads?";

  useEffect(()=>{
    if(pg!=="skills"||!fv||cs!==0) return;
    if(t1.length<GM.length){const x=setTimeout(()=>setT1(GM.slice(0,t1.length+1)),25);return()=>clearTimeout(x);}
    if(!sc1){const x=setTimeout(()=>setSc1(true),300);return()=>clearTimeout(x);}
  },[pg,fv,cs,t1,sc1]);
  useEffect(()=>{
    if(cs!==5) return;
    if(t2.length<FM.length){const x=setTimeout(()=>setT2(FM.slice(0,t2.length+1)),25);return()=>clearTimeout(x);}
    if(!sc2){const x=setTimeout(()=>setSc2(true),300);return()=>clearTimeout(x);}
  },[cs,t2,sc2]);
  useEffect(()=>{if(ce.current)ce.current.scrollIntoView({behavior:"smooth"});},[ms,typ]);
  useEffect(()=>{setPlaygroundWidth(null);},[bp]);

  const doLoad=(cb)=>{setLs(0);setTimeout(()=>setLs(1),100);setTimeout(()=>setLs(2),800);setTimeout(()=>setLs(3),1600);setTimeout(cb,2800);};
  const act=(id)=>{
    setCs(1);setSl(id);
    if(id==="qualify"){setTimeout(()=>setCs(4),800);setTimeout(()=>{setCs(5);setT2("");setSc2(false);},1600);return;}
    setTimeout(()=>setCs(2),800);
    if(id==="answer"){
      doLoad(()=>{setCs(3);setTimeout(()=>{setFv(false);setSl(null);setCs(0);},800);});
    } else {
      doLoad(()=>{setCs(3);setTimeout(()=>{setSk(p=>({...p,[id]:true}));setFv(false);setSl(null);setCs(0);},800);});
    }
  };
  const actTpl=(tid)=>{setCs(6);setQt(tid);setTimeout(()=>setCs(7),800);doLoad(()=>{setCs(8);setTimeout(()=>{setSk(p=>({...p,qualify:true}));setFv(false);setSl(null);setCs(0);},800);});};
  const go=(p)=>setPg(p);
  const resp=(q)=>{
    const l=q.toLowerCase();
    if(l.includes("price")||l.includes("cost")||l.includes("much"))
      return{role:"ai",text:"Our cakes start at $500 for a 2-tier and $800 for a 3-tier. Prices vary by design and complexity.",citation:{ks:KS[3],highlights:["Available in 2-tier and 3-tier"]}};
    if(l.includes("hour")||l.includes("open")||l.includes("time"))
      return{role:"ai",text:"We're open Mon–Fri 9am–6pm and Saturday 10am–4pm. Closed Sundays and public holidays. Consultations need 48hrs notice.",citation:{ks:KS[1],highlights:["Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 4:00 PM\nSunday: Closed","Consultations and tastings are by appointment only. Please DM us to book a slot at least 48 hours in advance."]}};
    return{role:"ai",text:"Flora Cakes is a boutique wedding cake studio specialising in custom wedding cakes.",citation:{ks:KS[4],highlights:["Custom cake orders require a minimum of 4 weeks notice."]}};
  };
  const snd=(t)=>{const q=t||inp.trim();if(!q)return;setInp("");setMs(p=>[...p,{role:"user",text:q}]);setTyp(true);setTimeout(()=>{setMs(p=>[...p,resp(q)]);setTyp(false);},1100);};

  const closePlayground=()=>{
    setClosingPlayground(true);
    setTimeout(()=>{setShowPlayground(false);setClosingPlayground(false);setFabFlash(true);setTimeout(()=>setFabFlash(false),700);},300);
  };

  const handleCitation=(ks,singleHighlight)=>{
    setSelectedKS(ks);
    setHighlightTexts([singleHighlight]);
    setPg("knowledge");
    if(isMobile) closePlayground();
  };

  useEffect(()=>{
    if(selectedKS&&highlightTexts.length){
      const t=setTimeout(()=>{
        const el=document.querySelector("mark[data-hl]");
        if(el) el.scrollIntoView({behavior:"smooth",block:"center"});
      },80);
      return()=>clearTimeout(t);
    }
  },[selectedKS,highlightTexts]);

  const Highlighted=({text,highlights})=>{
    if(!highlights||highlights.length===0) return <span style={{whiteSpace:"pre-line"}}>{text}</span>;
    // collect all match ranges
    const ranges=[];
    highlights.forEach(h=>{
      let i=text.indexOf(h);
      while(i!==-1){ranges.push({s:i,e:i+h.length});i=text.indexOf(h,i+1);}
    });
    if(ranges.length===0) return <span style={{whiteSpace:"pre-line"}}>{text}</span>;
    ranges.sort((a,b)=>a.s-b.s);
    // build segments
    const segs=[];let pos=0;
    ranges.forEach(({s,e},idx)=>{
      if(s>pos) segs.push({t:text.slice(pos,s),hl:false});
      segs.push({t:text.slice(s,e),hl:true,first:idx===0});
      pos=e;
    });
    if(pos<text.length) segs.push({t:text.slice(pos),hl:false});
    return <span style={{whiteSpace:"pre-line"}}>
      {segs.map((s,i)=>s.hl
        ?<mark key={i} data-hl={s.first?"1":undefined} style={{background:"#fef08a",borderRadius:3,padding:"1px 2px",fontWeight:500,animation:"hlPulse 1.2s ease"}}>{s.t}</mark>
        :s.t
      )}
    </span>;
  };

  const QC=()=>{
    if(!qt) return <div>
      <div style={{fontSize:14,fontWeight:600,marginBottom:16}}>How would you like to qualify leads?</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>{Object.entries(TL).map(([id,t])=><button key={id} onClick={()=>setQt(id)} style={{padding:"12px 16px",borderRadius:10,border:"1px solid #e5e5e3",background:"#fff",cursor:"pointer",fontFamily:"inherit",textAlign:"left",fontSize:14,fontWeight:500,width:"100%"}}>{t}</button>)}</div>
    </div>;
    const tpl=TP[qt];const oth=Object.entries(TL).filter(([id])=>id!==qt);
    return <div>
      <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",marginBottom:10}}>GOAL</div>
      <div style={{position:"relative",marginBottom:24}}>
        <button onClick={()=>setDd(p=>!p)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #e5e5e3",background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,textAlign:"left"}}>{tpl.t}<Ic name="edit" size={14} color="#a0a0a0"/></button>
        {dd&&<div style={{position:"absolute",top:"100%",left:0,right:0,marginTop:4,background:"#fff",borderRadius:10,border:"1px solid #e5e5e3",boxShadow:"0 4px 12px rgba(0,0,0,.1)",zIndex:10}}>{oth.map(([id,t])=><button key={id} onClick={()=>{setQt(id);setDd(false);}} style={{display:"block",width:"100%",padding:"10px 14px",border:"none",background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:14,textAlign:"left"}}>{t}</button>)}</div>}
      </div>
      <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",marginBottom:10}}>CRITERIA</div>
      <div style={{borderRadius:10,border:"1px solid #e5e5e3",padding:"12px 14px",marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:"#a0a0a0",fontSize:11}}>::</span><span style={{fontSize:14,fontWeight:500}}>AI replies to questions using your knowledge</span></div>
      </div>
      {tpl.c.map((c,i)=><div key={i} style={{borderRadius:10,border:"1px solid #e5e5e3",padding:"12px 14px",marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:"#a0a0a0",fontSize:11}}>::</span><span style={{fontSize:14,fontWeight:500}}>{c.t}</span></div><button style={{background:"none",border:"none",cursor:"pointer",padding:2}}><Ic name="x" size={14} color="#a0a0a0"/></button></div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginTop:6}}><span style={{fontSize:12,color:"#a0a0a0"}}>Save</span><span style={{fontSize:12,color:"#5b5fc7",background:"#f5f3ff",borderRadius:4,padding:"2px 8px",fontWeight:500}}>{c.f}</span></div>
      </div>)}
      <button style={{padding:12,borderRadius:10,border:"1px dashed #e5e5e3",background:"none",cursor:"pointer",fontSize:13,color:"#6e6e6e",fontFamily:"inherit",width:"100%"}}>+ Criteria</button>
      <div style={{fontSize:13,color:"#6e6e6e",marginTop:20,marginBottom:14}}>Routing</div>
      <div style={{borderRadius:10,border:"1px solid #e5e5e3",padding:"14px 18px",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><div style={{width:10,height:10,borderRadius:"50%",background:"#16a34a"}}/><span style={{fontSize:14,fontWeight:700}}>{tpl.gl}</span></div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{["Share a link","Handoff to me","Trigger automation"].map((a,i)=><button key={i} style={{fontSize:12,padding:"5px 10px",borderRadius:6,border:a===tpl.ga?"1.5px solid #1a1a1a":"1px solid #e5e5e3",fontWeight:a===tpl.ga?600:400,cursor:"pointer",fontFamily:"inherit"}}>{a}</button>)}</div>
      </div>
      <div style={{borderRadius:10,border:"1px solid #e5e5e3",padding:"14px 18px",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><div style={{width:10,height:10,borderRadius:"50%",background:"#dc2626"}}/><span style={{fontSize:14,fontWeight:700}}>{tpl.bl}</span></div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{tpl.ba.map((a,i)=><button key={i} style={{fontSize:12,padding:"5px 10px",borderRadius:6,border:i===tpl.bi?"1.5px solid #1a1a1a":"1px solid #e5e5e3",fontWeight:i===tpl.bi?600:400,cursor:"pointer",fontFamily:"inherit"}}>{a}</button>)}</div>
      </div>
      <div style={{borderRadius:10,border:"1px solid #e5e5e3",padding:"14px 18px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><div style={{width:10,height:10,borderRadius:"50%",background:"#eab308"}}/><span style={{fontSize:14,fontWeight:700}}>When agent needs help</span></div>
        <div style={{fontSize:12,color:"#6e6e6e"}}>Agent holds reply and flags for review.</div>
      </div>
    </div>;
  };

  // Shared page content (used in both layouts)
  const PageContent = ({mobile=false,compact=false}) => (
    <div style={{padding: mobile ? "16px 16px 24px" : compact ? "20px 20px 24px" : "28px 32px", maxWidth: mobile||compact ? "none" : 720, margin:"0 auto"}}>
      {pg==="overview"&&<div><div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:24}}>Performance metrics go here</div></div>}
      {pg==="knowledge"&&<div>
        {selectedKS ? (
          /* ── Detail view ── */
          <div>
            {/* Header */}
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
              <button onClick={()=>{setSelectedKS(null);setHighlightTexts([]);}} style={{display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:"#6e6e6e",padding:"4px 0",flexShrink:0}} onMouseEnter={e=>e.currentTarget.style.color="#1a1a1a"} onMouseLeave={e=>e.currentTarget.style.color="#6e6e6e"}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <h1 style={{fontSize:mobile?18:20,fontWeight:700,flex:1}}>{selectedKS.title}</h1>
              <button style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"1px solid #e5e5e3",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"#1a1a1a"}}>
                <Ic name="edit" size={13} color="#1a1a1a"/>Edit
              </button>
            </div>

            {/* Metadata */}
            <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:"16px 20px",marginBottom:20,display:"flex",flexDirection:"column",gap:10}}>
              {selectedKS.type==="link"&&(
                <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                  <Ic name="link" size={15} color="#a0a0a0"/>
                  <div>
                    <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",marginBottom:2}}>Sourced URL</div>
                    <div style={{fontSize:13,color:"#0078ff",wordBreak:"break-all"}}>{selectedKS.url}</div>
                  </div>
                </div>
              )}
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <Ic name="chart" size={15} color="#a0a0a0"/>
                <div>
                  <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",marginBottom:2}}>Last updated</div>
                  <div style={{fontSize:13,color:"#1a1a1a"}}>{selectedKS.updated}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:"20px 24px"}}>
              <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",marginBottom:14}}>Content</div>
              <div style={{fontSize:14,lineHeight:1.7,color:"#1a1a1a"}}><Highlighted key={highlightTexts.join("|")} text={selectedKS.content} highlights={highlightTexts}/></div>
            </div>
          </div>
        ) : (
          /* ── List view ── */
          <div>
            <p style={{fontSize:14,color:"#6e6e6e",marginBottom:20}}>Build a solid knowledge base for AI to work from</p>

            {/* Add source cards */}
            <div style={{display:"grid",gridTemplateColumns:(mobile||compact)?"1fr 1fr":"repeat(4,1fr)",gap:12,marginBottom:28}}>
              {[
                {icon:"link",label:"Add link",soon:false},
                {icon:"textlines",label:"Add text",soon:false},
                {icon:"file",label:"Upload file",soon:true},
                {icon:"instagram",label:"Add post caption",soon:true},
              ].map(s=>(
                <button key={s.label} style={{position:"relative",display:"flex",flexDirection:"column",gap:10,padding:"16px",borderRadius:10,border:"1px solid #e5e5e3",background:"#fff",cursor:s.soon?"default":"pointer",fontFamily:"inherit",textAlign:"left",opacity:s.soon?0.7:1}} onMouseEnter={e=>{if(!s.soon)e.currentTarget.style.borderColor="#c0c0c0";}} onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e5e3"}>
                  {s.soon&&<span style={{position:"absolute",top:10,right:10,fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:4,background:"#6e6e6e",color:"#fff",letterSpacing:.5}}>SOON</span>}
                  <Ic name={s.icon} size={18} color="#6e6e6e"/>
                  <span style={{fontSize:14,fontWeight:500,color:"#1a1a1a"}}>{s.label}</span>
                </button>
              ))}
            </div>

            {/* Filter + count */}
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
              <button style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:8,border:"1px solid #e5e5e3",background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,color:"#1a1a1a"}}>
                <Ic name="funnel" size={14} color="#1a1a1a"/>Filter
              </button>
            </div>
            <p style={{fontSize:13,color:"#6e6e6e",marginBottom:8}}><b style={{color:"#1a1a1a"}}>{KS.length}</b> sources</p>

            {/* Table */}
            <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",overflow:"hidden"}}>
              {!mobile&&!compact&&<div style={{display:"flex",alignItems:"center",padding:"8px 16px",borderBottom:"1px solid #f0f0ee"}}>
                <span style={{fontSize:12,color:"#a0a0a0",width:40}}>Type</span>
                <span style={{fontSize:12,color:"#a0a0a0",flex:1}}/>
                <span style={{fontSize:12,color:"#a0a0a0",width:130,textAlign:"right",display:"flex",alignItems:"center",gap:4,justifyContent:"flex-end"}}>Last updated <Ic name="funnel" size={11} color="#a0a0a0"/></span>
                <span style={{width:36}}/>
              </div>}
              {KS.map((k,i)=>(
                <div key={i} onClick={()=>setSelectedKS(k)} style={{display:"flex",alignItems:"center",padding:mobile?"12px 14px":"14px 16px",borderBottom:i<KS.length-1?"1px solid #f0f0ee":"none",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background="#fafafa"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <div style={{width:36,flexShrink:0}}><Ic name={k.type==="link"?"link":"textlines"} size={16} color="#6e6e6e"/></div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:14,fontWeight:500,color:"#1a1a1a"}}>{k.title}</div>
                    {k.url&&<div style={{fontSize:12,color:"#a0a0a0",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{k.url}</div>}
                    {(mobile||compact)&&<div style={{fontSize:12,color:"#a0a0a0",marginTop:2}}>{k.updated}</div>}
                  </div>
                  {!mobile&&!compact&&<div style={{width:130,flexShrink:0,textAlign:"right",fontSize:13,color:"#6e6e6e"}}>{k.updated}</div>}
                  <button onClick={e=>e.stopPropagation()} style={{width:32,flexShrink:0,display:"flex",justifyContent:"flex-end",background:"none",border:"none",cursor:"pointer",padding:0}}><Ic name="moredots" size={16} color="#a0a0a0"/></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>}
      {pg==="behavior"&&<div><div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}><button style={{fontSize:14,color:"#fff",background:"#0078ff",border:"none",borderRadius:8,padding:"8px 20px",cursor:"pointer",fontWeight:600,fontFamily:"inherit"}}>Save</button></div>{[{k:"role",t:"AI Role",p:"e.g. Wedding Cake IG Creator",m:false},{k:"voice",t:"Brand Voice",p:"e.g. Warm tone...",m:true},{k:"guardrails",t:"Guardrails",p:"e.g. Never make promises...",m:true}].map(f=><div key={f.k} style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:"20px 24px",marginBottom:16}}><div style={{fontSize:15,fontWeight:700,marginBottom:10}}>{f.t}</div>{f.m?<textarea value={beh[f.k]} onChange={e=>setBeh(p=>({...p,[f.k]:e.target.value}))} placeholder={f.p} style={{width:"100%",minHeight:80,padding:12,borderRadius:10,border:"1px solid #e5e5e3",fontSize:14,background:"#fafafa",fontFamily:"inherit",boxSizing:"border-box",resize:"vertical",outline:"none"}}/>:<input value={beh[f.k]} onChange={e=>setBeh(p=>({...p,[f.k]:e.target.value}))} placeholder={f.p} style={{width:"100%",padding:12,borderRadius:10,border:"1px solid #e5e5e3",fontSize:14,background:"#fafafa",fontFamily:"inherit",boxSizing:"border-box",outline:"none"}}/>}</div>)}{!hb&&<button onClick={()=>setBeh(BF)} style={{fontSize:13,color:"#0078ff",background:"#eef4ff",border:"1px solid #bfdbfe",borderRadius:8,padding:"8px 16px",cursor:"pointer",fontFamily:"inherit"}}>Fill example</button>}</div>}

      {pg==="skills"&&<div>
        {fv&&<div style={{maxWidth:560,margin:"0 auto",paddingTop:16}}>
          <AB>{cs===0?<span>{t1}<span style={{opacity:t1.length<GM.length?1:0,animation:"pls 1s infinite"}}>|</span></span>:GM}</AB>
          {cs===0&&sc1&&<div style={{marginLeft:(mobile||compact)?0:42,display:"flex",flexDirection:"column",gap:8,animation:"fd .4s ease"}}><CB icon="database" t="Help me answer customer questions faster" d="I will reply to DMs using your knowledge base, 24/7" onClick={()=>act("answer")}/><CB icon="target" t="Find and qualify my best leads" d="Screen people and route the right ones to you" onClick={()=>act("qualify")} delay={0.1}/><CB icon="flag" t="Keep my community engaged" d="Reply to nice comments in your voice" onClick={()=>act("engage")} delay={0.2}/></div>}
          {cs>=1&&sl&&<div>
            <UB text={GL[sl]}/>
            {sl==="answer"&&<div>{cs===1&&<D3/>}{cs===2&&<AB><div style={{fontWeight:600,marginBottom:10}}>Setting up Answer Questions...</div><div style={{color:"#6e6e6e",fontSize:13}}><LR done={ls>=2} active={ls>=1} text="Connecting to your knowledge base"/><LR done={ls>=3} active={ls>=2} text="Configuring AI responses"/><LR done={false} active={ls>=3} text="Enabling AI Replies"/></div></AB>}{cs===3&&<AB><span style={{display:"flex",alignItems:"center",gap:6}}><CK/><b>All set!</b></span></AB>}</div>}
            {sl==="engage"&&<div>{cs===1&&<D3/>}{cs===2&&<AB><div style={{fontWeight:600,marginBottom:10}}>Setting up Comment Replies...</div><div style={{color:"#6e6e6e",fontSize:13}}><LR done={ls>=2} active={ls>=1} text="Analyzing brand voice"/><LR done={ls>=3} active={ls>=2} text="Comment detection"/><LR done={false} active={ls>=3} text="Enabling AI Replies"/></div></AB>}{cs===3&&<AB><span style={{display:"flex",alignItems:"center",gap:6}}><CK/><b>All set!</b></span></AB>}</div>}
            {sl==="qualify"&&<div>
              {cs===4&&<D3/>}
              {cs===5&&<div><AB><span>Great choice! {t2}<span style={{opacity:t2.length<FM.length?1:0,animation:"pls 1s infinite"}}>|</span></span></AB>{sc2&&<div style={{marginLeft:(mobile||compact)?0:42,display:"flex",flexDirection:"column",gap:8,animation:"fd .4s ease"}}><CB icon="link" t="Qualify and book a call" d="Ask questions, offer calendar link" onClick={()=>actTpl("book")}/><CB icon="sparkle" t="Capture leads and send a freebie" d="Collect info for a lead magnet" onClick={()=>actTpl("freebie")} delay={0.1}/><CB icon="target" t="Screen and filter bad fits" d="Identify non-ideal clients early" onClick={()=>actTpl("filter")} delay={0.2}/><CB icon="edit" t="Start from scratch" d="Custom qualification flow" onClick={()=>actTpl("scratch")} delay={0.3}/></div>}</div>}
              {cs>=6&&<div><AB><span>Great choice! {FM}</span></AB><UB text={TL[qt]}/></div>}
              {cs===6&&<D3/>}
              {cs===7&&<AB><div style={{fontWeight:600,marginBottom:10}}>Setting up {TL[qt]}...</div><div style={{color:"#6e6e6e",fontSize:13}}><LR done={ls>=2} active={ls>=1} text="Building criteria"/><LR done={ls>=3} active={ls>=2} text="Configuring routing"/><LR done={false} active={ls>=3} text="Enabling AI Replies"/></div></AB>}
              {cs===8&&<AB><span style={{display:"flex",alignItems:"center",gap:6}}><CK/><b>All set!</b></span></AB>}
            </div>}
          </div>}
        </div>}

        {!fv&&!sl&&<div>
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"12px 16px",borderRadius:10,background:"#eef4ff",marginBottom:16}}><Ic name="sparkle" size={16} color="#0078ff"/><span style={{fontSize:13,color:"#0078ff",fontWeight:500}}>AI Replies is always on. Answers questions using your knowledge base.</span></div>
          {sk.qualify&&<div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",marginBottom:12,overflow:"visible"}}><div style={{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #f0f0ee"}}><div><div style={{fontSize:15,fontWeight:700}}>Qualify Leads</div><div style={{fontSize:13,color:"#6e6e6e",marginTop:2}}>AI qualifies and routes leads</div></div><TG isOn={true} onClick={()=>{setSk(p=>({...p,qualify:false}));setQt(null);}}/></div><div style={{padding:"16px 20px"}}><QC/></div></div>}
          {sk.engage&&<div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",marginBottom:12}}><div style={{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div><div style={{fontSize:15,fontWeight:700}}>Comment Replies</div><div style={{fontSize:13,color:"#6e6e6e",marginTop:2}}>Responds to nice comments</div></div><TG isOn={true} onClick={()=>setSk(p=>({...p,engage:false}))}/></div></div>}
          {(!sk.qualify||!sk.engage)&&<div style={{marginTop:20}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><Ic name="sparkle" size={16} color="#a0a0a0"/><span style={{fontSize:13,fontWeight:600,color:"#a0a0a0"}}>AI can do more for you</span></div>
            {!sk.qualify&&<div onClick={()=>setSk(p=>({...p,qualify:true}))} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:10,cursor:"pointer",marginBottom:6}}><div style={{display:"flex",alignItems:"center",gap:10}}><Ic name="target" size={16} color="#a0a0a0"/><span style={{color:"#6e6e6e"}}>Qualify Leads</span></div><span style={{fontSize:12,color:"#0078ff",fontWeight:500}}>+ Enable</span></div>}
            {!sk.engage&&<div onClick={()=>setSk(p=>({...p,engage:true}))} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderRadius:10,cursor:"pointer",marginBottom:6}}><div style={{display:"flex",alignItems:"center",gap:10}}><Ic name="flag" size={16} color="#a0a0a0"/><span style={{color:"#6e6e6e"}}>Comment Replies</span></div><span style={{fontSize:12,color:"#0078ff",fontWeight:500}}>+ Enable</span></div>}
          </div>}
        </div>}
      </div>}
    </div>
  );

  // Shared playground panel content
  const PlaygroundPanel = ({onClose=null}) => <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:48,borderBottom:(anyOn||!fv)?"none":"1px solid #e5e5e3",flexShrink:0}}>
      <span style={{fontSize:14,fontWeight:700}}>AI Playground</span>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <button onClick={()=>{setMs([]);setTyp(false);}} style={{fontSize:13,color:"#6e6e6e",background:"none",border:"1px solid #e5e5e3",borderRadius:8,padding:"5px 12px",cursor:"pointer",fontFamily:"inherit"}}>Restart</button>
        {onClose&&<button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",padding:4,display:"flex",alignItems:"center"}}><Ic name="x" size={18} color="#6e6e6e"/></button>}
      </div>
    </div>
    {(anyOn||!fv)&&<div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",borderBottom:"1px solid #e5e5e3",flexShrink:0}}><span style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase"}}>Testing:</span><span style={{fontSize:12,padding:"3px 10px",borderRadius:6,background:"#f0f0ee",fontWeight:500}}>AI Replies</span>{sk.qualify&&<span style={{fontSize:12,padding:"3px 10px",borderRadius:6,background:"#f0f0ee",fontWeight:500}}>Qualify</span>}{sk.engage&&<span style={{fontSize:12,padding:"3px 10px",borderRadius:6,background:"#f0f0ee",fontWeight:500}}>Comments</span>}</div>}
    <div style={{flex:1,overflow:"auto",padding:16}}>
      {ms.length===0&&!hb&&<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:0}}>
        <div style={{width:44,height:44,borderRadius:"50%",background:"#fff7ed",border:"1px solid #fed7aa",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{fontSize:14,fontWeight:600,color:"#1a1a1a",marginBottom:6}}>No behavior configured</div>
        <div style={{fontSize:13,color:"#6e6e6e",textAlign:"center",maxWidth:220,lineHeight:1.5,marginBottom:16}}>Your AI has no defined role or voice. Responses may be generic.</div>
        <button onClick={()=>{go("behavior");setShowPlayground(false);}} style={{fontSize:13,fontWeight:600,color:"#fff",background:"#1a1a1a",border:"none",borderRadius:8,padding:"8px 18px",cursor:"pointer",fontFamily:"inherit"}}>Set up Behavior →</button>
      </div>}
      {ms.length===0&&hb&&<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",opacity:.4}}><Ic name="sparkle" size={32} color="#a0a0a0"/><div style={{fontSize:15,fontWeight:600,marginTop:12}}>Test your AI</div><div style={{fontSize:13,color:"#6e6e6e",marginTop:4}}>Ask a question to see how it responds</div></div>}
      {ms.map((m,i)=>m.role==="user"
        ?<div key={i} style={{display:"flex",justifyContent:"flex-end",marginBottom:16}}><div style={{padding:"10px 16px",borderRadius:18,background:"#f0f0ee",fontSize:14}}>{m.text}</div></div>
        :<div key={i} style={{marginBottom:18}}>
          <div style={{display:"flex",gap:10}}>
            <div style={{width:28,height:28,borderRadius:"50%",background:"#1a1a1a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic name="sparkle" size={14} color="#fff"/></div>
            <div style={{padding:"10px 16px",borderRadius:"4px 18px 18px 18px",background:"#eef4ff",fontSize:14}}>{m.text}</div>
          </div>
          {m.citation&&<div style={{marginLeft:38,marginTop:8}}>
            <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
              <Ic name={m.citation.ks.type==="link"?"link":"textlines"} size={12} color="#a0a0a0"/>
              <span style={{fontSize:11,fontWeight:600,color:"#a0a0a0"}}>{m.citation.ks.title}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:4}}>
              {m.citation.highlights.map((h,idx)=>(
                <button key={idx} onClick={()=>handleCitation(m.citation.ks,h)} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",borderRadius:6,border:"1px solid #e5e5e3",background:"#fff",cursor:"pointer",fontFamily:"inherit",textAlign:"left",transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="#0078ff";e.currentTarget.style.background="#f0f7ff";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#e5e5e3";e.currentTarget.style.background="#fff";}}>
                  <span style={{width:18,height:18,borderRadius:"50%",background:"#f0f0ee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#6e6e6e",flexShrink:0}}>{idx+1}</span>
                  <span style={{fontSize:12,color:"#6e6e6e",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}}>"{h.replace(/\n/g," ").slice(0,60)}{h.length>60?"…":""}"</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}><path d="M5 12h14M13 6l6 6-6 6" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              ))}
            </div>
          </div>}
        </div>
      )}
      {typ&&<D3/>}
      <div ref={ce}/>
    </div>
    <div style={{padding:"0 16px 6px",display:"flex",gap:5,flexWrap:"wrap",flexShrink:0}}>{["How much do cakes cost?","Opening hours?"].map((q,i)=><button key={i} onClick={()=>snd(q)} style={{fontSize:12,padding:"5px 10px",borderRadius:6,border:"1px solid #e5e5e3",background:"#fff",color:"#6e6e6e",cursor:"pointer",fontFamily:"inherit"}}>{q}</button>)}</div>
    <div style={{padding:"8px 16px 14px",borderTop:"1px solid #e5e5e3",flexShrink:0}}><div style={{display:"flex",gap:8,padding:"8px 8px 8px 14px",borderRadius:10,border:"1px solid #0078ff"}}><input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&snd()} placeholder="Ask me anything" style={{flex:1,border:"none",outline:"none",fontSize:14,background:"transparent",fontFamily:"inherit"}}/><button onClick={()=>snd()} style={{width:32,height:32,borderRadius:8,border:"none",background:inp.trim()?"#1a1a1a":"#f0f0ee",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><Ic name="sparkle" size={16} color={inp.trim()?"#fff":"#a0a0a0"}/></button></div></div>
  </>;

  const STYLES=`@keyframes fd{from{opacity:0}to{opacity:1}}@keyframes pls{0%,100%{opacity:.3}50%{opacity:.9}}@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slideDown{from{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes slideRight{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes hlPulse{0%{background:#fef08a}40%{background:#fbbf24}100%{background:#fef08a}}@keyframes fabPulse{0%{transform:scale(1);box-shadow:0 4px 16px rgba(0,0,0,.25)}40%{transform:scale(1.12);box-shadow:0 6px 24px rgba(0,0,0,.4)}100%{transform:scale(1);box-shadow:0 4px 16px rgba(0,0,0,.25)}}*{box-sizing:border-box;margin:0;padding:0}`;

  // ─── IA VIEW ─────────────────────────────────────────────────────────────────
  if(showIA){
    // Zone block used in mini wireframes
    const ZB=({bg,bc,tc,label,style={}})=>(
      <div style={{background:bg,border:`1px solid ${bc}`,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",padding:"3px 5px",...style}}>
        <span style={{fontSize:8,fontWeight:700,color:tc,textAlign:"center",lineHeight:1.3,whiteSpace:"pre-line"}}>{label}</span>
      </div>
    );
    const zH ={bg:"#dbeafe",bc:"#93c5fd",tc:"#1e40af"};
    const zG ={bg:"#ede9fe",bc:"#c4b5fd",tc:"#6d28d9"};
    const zN ={bg:"#d1fae5",bc:"#6ee7b7",tc:"#065f46"};
    const zC ={bg:"#f0fdf4",bc:"#86efac",tc:"#166534"};
    const zP ={bg:"#f5f3ff",bc:"#c4b5fd",tc:"#6d28d9"};
    const Arrow=()=><div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,flexShrink:0,padding:"0 4px"}}><span style={{fontSize:9,color:"#a0a0a0",whiteSpace:"nowrap"}}>tap / click</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#a0a0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>;
    const SectionTitle=({n,label,sub})=><div style={{marginBottom:14,marginTop:4}}><span style={{fontSize:11,fontWeight:700,color:"#a0a0a0",textTransform:"uppercase",letterSpacing:.5,marginRight:8}}>{n}</span><span style={{fontSize:15,fontWeight:700,color:"#1a1a1a"}}>{label}</span>{sub&&<span style={{fontSize:13,color:"#6e6e6e",marginLeft:8}}>{sub}</span>}</div>;
    return(
    <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f0f0ee",fontFamily:"system-ui,sans-serif",fontSize:14,color:"#1a1a1a",overflow:"hidden"}}>
      <style>{STYLES}</style>
      {/* IA header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",height:52,background:"#1a1a1a",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:14,fontWeight:700,color:"#fff"}}>Information Architecture</span>
          <span style={{fontSize:11,color:"#888",background:"rgba(255,255,255,.08)",borderRadius:4,padding:"2px 8px"}}>Manychat AI</span>
        </div>
        <button onClick={()=>setShowIA(false)} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.1)",border:"none",borderRadius:8,color:"#fff",fontSize:13,padding:"6px 14px",cursor:"pointer",fontFamily:"inherit",fontWeight:500}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.2)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.1)"}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to prototype
        </button>
      </div>
      {/* Content */}
      <div style={{flex:1,overflow:"auto",padding:"24px 28px"}}>
        <div style={{maxWidth:980,margin:"0 auto",display:"flex",flexDirection:"column",gap:28}}>

          {/* ── Section 1: Breakpoints ── */}
          <div>
            <SectionTitle n="01" label="Responsive Breakpoints" sub="How the layout adapts at each screen size"/>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>

              {/* Mobile ≤640px */}
              <div style={{flex:"1 1 160px",background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:16}}>
                <div style={{fontSize:11,fontWeight:700,color:"#a0a0a0",marginBottom:3}}>MOBILE</div>
                <div style={{fontSize:13,fontWeight:600,marginBottom:12}}>\u2264640px</div>
                <div style={{display:"flex",flexDirection:"column",gap:2,height:200}}>
                  <div style={{display:"flex",gap:2,height:26,flexShrink:0}}>
                    <ZB {...zH} label="HEADER" style={{flex:1}}/>
                    <ZB {...zG} label="\u2630" style={{width:26,flexShrink:0,fontSize:11}}/>
                  </div>
                  <ZB {...zH} label="BREADCRUMB" style={{height:18,flexShrink:0,opacity:.7}}/>
                  <ZB {...zC} label="CONFIG AREA" style={{flex:1}}/>
                </div>
                <div style={{marginTop:10,fontSize:11,color:"#6e6e6e",lineHeight:1.5}}>"Test AI" button in header \u2192 slide-up overlay. Hamburger \u2630 opens full navigation drawer</div>
              </div>

              {/* Compact 641–900px */}
              <div style={{flex:"2 1 220px",background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:16}}>
                <div style={{fontSize:11,fontWeight:700,color:"#a0a0a0",marginBottom:3}}>COMPACT</div>
                <div style={{fontSize:13,fontWeight:600,marginBottom:12}}>641\u2013900px</div>
                <div style={{display:"flex",flexDirection:"column",gap:2,height:200}}>
                  <ZB {...zH} label="HEADER" style={{height:22,flexShrink:0}}/>
                  <div style={{display:"flex",gap:2,flex:1}}>
                    <ZB {...zG} label={"GLOBAL\nNAV"} style={{width:26,flexShrink:0}}/>
                    <div style={{display:"flex",flexDirection:"column",gap:2,flex:1}}>
                      <ZB {...zN} label="SECTION TABS" style={{height:18,flexShrink:0}}/>
                      <div style={{display:"flex",gap:2,flex:1}}>
                        <ZB {...zC} label="CONFIG" style={{flex:1}}/>
                        <div style={{width:3,background:"#d1d5db",borderRadius:1,flexShrink:0}}/>
                        <ZB {...zP} label="PLAYGROUND" style={{flex:1}}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{marginTop:10,fontSize:11,color:"#6e6e6e",lineHeight:1.5}}>Sub-nav collapses to horizontal tabs to free up horizontal space for the split</div>
              </div>

              {/* Desktop >900px */}
              <div style={{flex:"3 1 300px",background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:16}}>
                <div style={{fontSize:11,fontWeight:700,color:"#a0a0a0",marginBottom:3}}>DESKTOP</div>
                <div style={{fontSize:13,fontWeight:600,marginBottom:12}}>&gt;900px</div>
                <div style={{display:"flex",flexDirection:"column",gap:2,height:200}}>
                  <ZB {...zH} label="HEADER" style={{height:22,flexShrink:0}}/>
                  <div style={{display:"flex",gap:2,flex:1}}>
                    <ZB {...zG} label={"G\nN"} style={{width:22,flexShrink:0}}/>
                    <ZB {...zN} label={"SECTION\nNAV"} style={{width:50,flexShrink:0}}/>
                    <ZB {...zC} label="CONFIGURATION AREA" style={{flex:1}}/>
                    <div style={{width:3,background:"#d1d5db",borderRadius:1,flexShrink:0}}/>
                    <ZB {...zP} label="AI PLAYGROUND" style={{flex:1}}/>
                  </div>
                </div>
                <div style={{marginTop:10,fontSize:11,color:"#6e6e6e",lineHeight:1.5}}>Full layout — vertical sub-nav + resizable 50/50 split. Config content centers when playground is narrower than 50%</div>
              </div>
            </div>
          </div>

          {/* ── Section 2: Knowledge drill-down ── */}
          <div>
            <SectionTitle n="02" label="Knowledge: drill-down navigation" sub="List view \u2192 Detail view \u2192 back to list"/>
            <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:20}}>
              <p style={{fontSize:13,color:"#6e6e6e",marginBottom:18,lineHeight:1.6}}>Knowledge has a 2-level structure within the same page area. Clicking a source opens its detail view — a back button returns to the list. This is not a new page or tab, it replaces the content area in place.</p>
              <div style={{display:"flex",gap:8,alignItems:"stretch",flexWrap:"wrap"}}>

                {/* List view */}
                <div style={{flex:"1 1 180px",background:zC.bg,border:`1.5px solid ${zC.bc}`,borderRadius:10,padding:14,minHeight:180}}>
                  <div style={{fontSize:11,fontWeight:700,color:zC.tc,marginBottom:10}}>Knowledge — List view</div>
                  {["Working hours","Custom cake order","Payment info","New chocolate recipes"].map((t,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 10px",background:"#fff",borderRadius:6,marginBottom:5,fontSize:12,cursor:"pointer"}}>
                      <div style={{width:5,height:5,borderRadius:"50%",background:zC.bc,flexShrink:0}}/>
                      {t}
                    </div>
                  ))}
                </div>

                <Arrow/>

                {/* Detail view */}
                <div style={{flex:"1 1 200px",background:zC.bg,border:`1.5px solid ${zC.bc}`,borderRadius:10,padding:14,minHeight:180}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke={zC.tc} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{fontSize:11,fontWeight:700,color:zC.tc}}>Knowledge — Detail view</span>
                  </div>
                  <div style={{fontSize:13,fontWeight:700,marginBottom:4}}>Working hours</div>
                  <div style={{fontSize:11,color:"#a0a0a0",marginBottom:10}}>Last updated 10 minutes ago</div>
                  <div style={{fontSize:12,lineHeight:1.7,color:"#444"}}>
                    Mon \u2013 Fri: 9:00 AM \u2013 6:00 PM<br/>
                    <mark style={{background:"#fef08a",borderRadius:2,padding:"1px 3px"}}>Sat: 10:00 AM \u2013 4:00 PM</mark><br/>
                    Consultations by appointment only...
                  </div>
                </div>

                {/* Back arrow */}
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3,flexShrink:0,padding:"0 4px"}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="#a0a0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{fontSize:9,color:"#a0a0a0",whiteSpace:"nowrap"}}>back button</span>
                </div>

                {/* Back to list */}
                <div style={{flex:"1 1 180px",background:zC.bg,border:`1.5px dashed ${zC.bc}`,borderRadius:10,padding:14,display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{fontSize:12,color:zC.tc,fontWeight:600,textAlign:"center",lineHeight:1.6}}>Returns to<br/>Knowledge list view<br/><span style={{fontSize:11,fontWeight:400,opacity:.7}}>(same config area,<br/>no page navigation)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 3: Citation flow ── */}
          <div>
            <SectionTitle n="03" label="Playground \u2192 Knowledge citation flow" sub="Cross-area interaction"/>
            <div style={{background:"#fff",borderRadius:12,border:"1px solid #e5e5e3",padding:20}}>
              <p style={{fontSize:13,color:"#6e6e6e",marginBottom:18,lineHeight:1.6}}>When AI answers in the Playground, citation chips appear below the response. Clicking one navigates the config area to Knowledge detail and highlights the exact text chunk used — without leaving the split view.</p>
              <div style={{display:"flex",gap:8,alignItems:"stretch",flexWrap:"wrap"}}>

                {/* Playground */}
                <div style={{flex:"1 1 180px",background:zP.bg,border:`1.5px solid ${zP.bc}`,borderRadius:10,padding:14}}>
                  <div style={{fontSize:11,fontWeight:700,color:zP.tc,marginBottom:10}}>AI Playground</div>
                  <div style={{background:"#f0f0ee",borderRadius:8,padding:"6px 10px",fontSize:11,marginBottom:6,textAlign:"right"}}>What are your hours?</div>
                  <div style={{background:"#eef4ff",borderRadius:8,padding:"6px 10px",fontSize:11,marginBottom:8,lineHeight:1.5}}>We're open Mon\u2013Fri 9am\u20136pm and Sat 10am\u20134pm...</div>
                  <div style={{display:"flex",flexDirection:"column",gap:4}}>
                    <div style={{background:"#fff",border:"1px solid #e5e5e3",borderRadius:5,padding:"4px 8px",fontSize:10,fontWeight:600,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                      <span style={{width:14,height:14,borderRadius:"50%",background:"#f0f0ee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,flexShrink:0}}>1</span>
                      "Mon \u2013 Fri: 9:00 AM..."
                    </div>
                    <div style={{background:"#fff",border:"1px solid #e5e5e3",borderRadius:5,padding:"4px 8px",fontSize:10,fontWeight:600,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                      <span style={{width:14,height:14,borderRadius:"50%",background:"#f0f0ee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,flexShrink:0}}>2</span>
                      "Consultations are by..."
                    </div>
                  </div>
                </div>

                <Arrow/>

                {/* Knowledge detail with highlight */}
                <div style={{flex:"1 1 200px",background:zC.bg,border:`1.5px solid ${zC.bc}`,borderRadius:10,padding:14}}>
                  <div style={{fontSize:11,fontWeight:700,color:zC.tc,marginBottom:8}}>Knowledge \u2192 Working hours</div>
                  <div style={{fontSize:12,lineHeight:1.8,color:"#444"}}>
                    <mark style={{background:"#fbbf24",borderRadius:2,padding:"1px 3px",fontWeight:500}}>Mon \u2013 Fri: 9:00 AM \u2013 6:00 PM</mark><br/>
                    Sat: 10:00 AM \u2013 4:00 PM<br/>Sun: Closed<br/><br/>
                    Consultations and tastings are by appointment only...
                  </div>
                  <div style={{marginTop:8,fontSize:10,color:zC.tc,background:"#fff",borderRadius:4,padding:"3px 8px",display:"inline-block"}}>Scrolled to highlight automatically</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>);
  }

  // ─── MOBILE LAYOUT ───────────────────────────────────────────────────────────
  if(isMobile) return (
    <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f4f4f4",fontFamily:"system-ui,sans-serif",overflow:"hidden",fontSize:14,color:"#1a1a1a"}}>
      <style>{STYLES}</style>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:52,borderBottom:"1px solid #e5e5e3",background:"#fff",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:28,height:28,borderRadius:7,background:"#c084fc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{fontSize:11,fontWeight:700,color:"#fff"}}>DJ</span></div>
          <span style={{fontSize:17,fontWeight:700}}>Manychat AI</span>
          <span style={{fontSize:10,fontWeight:700,color:"#16a34a",background:"#dcfce7",borderRadius:4,padding:"1px 6px",border:"1px solid #86efac"}}>BETA</span>
          <Ic name="instagram" size={16} color="#6e6e6e"/>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={()=>setShowIA(true)} style={{fontSize:12,fontWeight:600,color:"#6e6e6e",background:"none",border:"1px solid #e5e5e3",borderRadius:8,padding:"5px 8px",cursor:"pointer",fontFamily:"inherit"}}>IA</button>
          <button onClick={()=>setShowMobileMenu(true)} style={{display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",cursor:"pointer",padding:4}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="6" x2="21" y2="6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Tab strip */}
      <div style={{display:"flex",borderBottom:"1px solid #e5e5e3",background:"#fff",flexShrink:0,overflowX:"auto",scrollbarWidth:"none"}}>
        {NV.map(n=>(
          <button key={n.id} onClick={()=>{go(n.id);setSelectedKS(null);setHighlightTexts([]);}} style={{display:"flex",alignItems:"center",gap:5,padding:"10px 14px",border:"none",borderBottom:pg===n.id?"2px solid #1a1a1a":"2px solid transparent",background:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:pg===n.id?600:400,color:pg===n.id?"#1a1a1a":"#6e6e6e",whiteSpace:"nowrap",flexShrink:0}}>
            {n.l}
            {n.b&&<span style={{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:4,background:"#5b5fc7",color:"#fff"}}>{n.b}</span>}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{flex:1,overflow:"auto",background:"#f4f4f4"}}>
        {PageContent({mobile:true})}
      </div>

      {/* FAB: Test AI */}
      <button onClick={()=>setShowPlayground(true)} style={{position:"fixed",bottom:24,right:20,height:46,borderRadius:23,background:"#1a1a1a",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8,padding:"0 20px",boxShadow:"0 4px 16px rgba(0,0,0,.25)",zIndex:50,animation:fabFlash?"fabPulse .6s ease":"none"}}>
        <Ic name="sparkle" size={16} color="#fff"/>
        <span style={{fontSize:13,fontWeight:700,color:"#fff",fontFamily:"system-ui,sans-serif"}}>Test AI</span>
      </button>

      {/* Playground overlay */}
      {showPlayground&&(
        <div style={{position:"fixed",inset:0,zIndex:200,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
          <div onClick={closePlayground} style={{position:"absolute",inset:0,background:"rgba(0,0,0,.4)"}}/>
          <div style={{position:"relative",background:"#fff",borderRadius:"20px 20px 0 0",height:"85vh",display:"flex",flexDirection:"column",animation:closingPlayground?"slideDown .3s ease-in forwards":"slideUp .3s ease"}}>
            <div style={{width:36,height:4,borderRadius:2,background:"#e5e5e3",margin:"10px auto 0"}}/>
            {PlaygroundPanel({onClose:closePlayground})}
          </div>
        </div>
      )}

      {/* Hamburger menu */}
      {showMobileMenu&&(
        <div style={{position:"fixed",inset:0,zIndex:300,display:"flex"}}>
          <div onClick={()=>setShowMobileMenu(false)} style={{flex:1,background:"rgba(0,0,0,.4)"}}/>
          <div style={{width:"75%",maxWidth:280,background:"#fff",height:"100%",display:"flex",flexDirection:"column",animation:"slideRight .25s ease",overflow:"hidden"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid #e5e5e3",flexShrink:0}}>
              <span style={{fontSize:15,fontWeight:700}}>Navigation</span>
              <button onClick={()=>setShowMobileMenu(false)} style={{background:"none",border:"none",cursor:"pointer",padding:4}}><Ic name="x" size={20} color="#6e6e6e"/></button>
            </div>
            <div style={{flex:1,overflow:"auto",padding:"12px"}}>
              <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",letterSpacing:.5,padding:"4px 8px",marginBottom:6}}>AI Settings</div>
              {NV.map(n=>(
                <button key={n.id} onClick={()=>{go(n.id);setShowMobileMenu(false);}} style={{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"11px 12px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:pg===n.id?600:400,background:pg===n.id?"#f0f0ee":"transparent",color:pg===n.id?"#1a1a1a":"#6e6e6e",textAlign:"left",marginBottom:2}}>
                  <Ic name={n.i} size={18} color={pg===n.id?"#1a1a1a":"#a0a0a0"}/>{n.l}
                  {n.b&&<span style={{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:4,background:"#5b5fc7",color:"#fff",marginLeft:"auto"}}>{n.b}</span>}
                </button>
              ))}
              <div style={{height:1,background:"#f0f0ee",margin:"12px 0"}}/>
              <div style={{fontSize:11,fontWeight:600,color:"#a0a0a0",textTransform:"uppercase",letterSpacing:.5,padding:"4px 8px",marginBottom:6}}>Product</div>
              {[{icon:"home",id:"home",label:"Home"},{icon:"contacts",id:"contacts",label:"Contacts"},{icon:"flows",id:"flows",label:"Flows"},{icon:"sparkle",id:"ai",label:"AI"},{icon:"chart",id:"analytics",label:"Analytics"},{icon:"growth",id:"growth",label:"Growth"},{icon:"settings",id:"settings",label:"Settings"},{icon:"help",id:"help",label:"Help"}].map(({icon,id,label})=>(
                <button key={id} onClick={()=>{setGlobalTab(id);setShowMobileMenu(false);}} style={{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"10px 12px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,background:globalTab===id?"#f0f0ee":"transparent",color:globalTab===id?"#1a1a1a":"#6e6e6e",textAlign:"left",marginBottom:2}}>
                  <Ic name={icon} size={17} color={globalTab===id?"#1a1a1a":"#a0a0a0"}/>{label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // ─── COMPACT LAYOUT (641–900px) ──────────────────────────────────────────────
  if(isCompact) return(
  <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f4f4f4",fontFamily:"system-ui,sans-serif",overflow:"hidden",fontSize:14,color:"#1a1a1a"}}>
    <style>{STYLES}</style>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",height:52,borderBottom:"1px solid #e5e5e3",background:"#f4f4f4",flexShrink:0,paddingLeft:68}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18,fontWeight:700}}>Manychat AI</span><span style={{fontSize:13,color:"#a0a0a0"}}>BETA for Instagram</span></div>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <button onClick={()=>setShowIA(true)} style={{fontSize:13,fontWeight:600,color:"#6e6e6e",background:"none",border:"1px solid #e5e5e3",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontFamily:"inherit"}}>IA View</button>
        <button style={{fontSize:13,color:"#fff",background:"#0078ff",border:"none",borderRadius:8,padding:"7px 16px",cursor:"pointer",fontWeight:600,fontFamily:"inherit"}}>Go Live</button>
      </div>
    </div>
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      {/* Global sidebar */}
      <div style={{width:52,flexShrink:0,background:"#f4f4f4",borderRight:"1px solid #e5e5e3",display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0",gap:2,zIndex:1}}>
        <div style={{width:30,height:30,borderRadius:8,background:"#c084fc",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10,flexShrink:0}}><span style={{fontSize:12,fontWeight:700,color:"#fff"}}>DJ</span></div>
        <GlobalSidebarItem icon="home" active={globalTab==="home"} onClick={()=>setGlobalTab("home")}/>
        <GlobalSidebarItem icon="contacts" active={globalTab==="contacts"} onClick={()=>setGlobalTab("contacts")}/>
        <GlobalSidebarItem icon="flows" active={globalTab==="flows"} onClick={()=>setGlobalTab("flows")}/>
        <GlobalSidebarItem icon="sparkle" active={globalTab==="ai"} onClick={()=>setGlobalTab("ai")}/>
        <GlobalSidebarItem icon="chart" active={globalTab==="analytics"} onClick={()=>setGlobalTab("analytics")}/>
        <GlobalSidebarItem icon="growth" active={globalTab==="growth"} onClick={()=>setGlobalTab("growth")}/>
        <div style={{flex:1}}/>
        <GlobalSidebarItem icon="settings" active={globalTab==="settings"} onClick={()=>setGlobalTab("settings")}/>
        <GlobalSidebarItem icon="help" active={globalTab==="help"} onClick={()=>setGlobalTab("help")}/>
      </div>
      {/* Right side: tab strip + split */}
      <div style={{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"}}>
        <div style={{display:"flex",borderBottom:"1px solid #e5e5e3",background:"#f4f4f4",flexShrink:0,overflowX:"auto",scrollbarWidth:"none"}}>
          {NV.map(n=>(
            <button key={n.id} onClick={()=>go(n.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 14px",border:"none",borderBottom:pg===n.id?"2px solid #1a1a1a":"2px solid transparent",background:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:pg===n.id?600:400,color:pg===n.id?"#1a1a1a":"#6e6e6e",whiteSpace:"nowrap",flexShrink:0}}>
              <Ic name={n.i} size={15} color={pg===n.id?"#1a1a1a":"#a0a0a0"}/>{n.l}
              {n.b&&<span style={{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:4,background:"#5b5fc7",color:"#fff"}}>{n.b}</span>}
            </button>
          ))}
        </div>
        <div ref={splitRef} style={{display:"flex",flex:1,overflow:"hidden",userSelect:dragging?"none":"auto"}}>
          <div style={{flex:1,overflow:"auto",background:"#f4f4f4"}}>
            {PageContent({compact:true})}
          </div>
          <div onMouseDown={startResize} style={{width:6,flexShrink:0,cursor:"col-resize",background:dragging?"#d0d0ce":"#e5e5e3",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .15s"}} onMouseEnter={e=>e.currentTarget.style.background="#d0d0ce"} onMouseLeave={e=>{if(!dragging)e.currentTarget.style.background="#e5e5e3";}}>
            <div style={{display:"flex",flexDirection:"column",gap:3}}>{[0,1,2].map(i=><div key={i} style={{width:2,height:10,borderRadius:1,background:"#a0a0a0"}}/>)}</div>
          </div>
          <div style={{width:playgroundWidth||"50%",flexShrink:0,background:"#fff",display:"flex",flexDirection:"column",overflow:"hidden"}}>
            {PlaygroundPanel({})}
          </div>
        </div>
      </div>
    </div>
  </div>);

  // ─── DESKTOP LAYOUT ──────────────────────────────────────────────────────────
  return(
  <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f4f4f4",fontFamily:"system-ui,sans-serif",overflow:"hidden",fontSize:14,color:"#1a1a1a"}}>
    <style>{STYLES}</style>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",height:52,borderBottom:"1px solid #e5e5e3",background:"#f4f4f4",flexShrink:0,paddingLeft:68}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18,fontWeight:700}}>Manychat AI</span><span style={{fontSize:13,color:"#a0a0a0"}}>BETA for Instagram</span></div>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        <button onClick={()=>setShowIA(true)} style={{fontSize:13,fontWeight:600,color:"#6e6e6e",background:"none",border:"1px solid #e5e5e3",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontFamily:"inherit"}}>IA View</button>
        <button style={{fontSize:13,color:"#fff",background:"#0078ff",border:"none",borderRadius:8,padding:"7px 16px",cursor:"pointer",fontWeight:600,fontFamily:"inherit"}}>Go Live</button>
      </div>
    </div>
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      {/* Global collapsed sidebar */}
      <div style={{width:52,flexShrink:0,background:"#f4f4f4",borderRight:"1px solid #e5e5e3",display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0",gap:2,zIndex:1}}>
        <div style={{width:30,height:30,borderRadius:8,background:"#c084fc",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10,flexShrink:0}}>
          <span style={{fontSize:12,fontWeight:700,color:"#fff"}}>DJ</span>
        </div>
        <GlobalSidebarItem icon="home" active={globalTab==="home"} onClick={()=>setGlobalTab("home")}/>
        <GlobalSidebarItem icon="contacts" active={globalTab==="contacts"} onClick={()=>setGlobalTab("contacts")}/>
        <GlobalSidebarItem icon="flows" active={globalTab==="flows"} onClick={()=>setGlobalTab("flows")}/>
        <GlobalSidebarItem icon="sparkle" active={globalTab==="ai"} onClick={()=>setGlobalTab("ai")}/>
        <GlobalSidebarItem icon="chart" active={globalTab==="analytics"} onClick={()=>setGlobalTab("analytics")}/>
        <GlobalSidebarItem icon="growth" active={globalTab==="growth"} onClick={()=>setGlobalTab("growth")}/>
        <div style={{flex:1}}/>
        <GlobalSidebarItem icon="settings" active={globalTab==="settings"} onClick={()=>setGlobalTab("settings")}/>
        <GlobalSidebarItem icon="help" active={globalTab==="help"} onClick={()=>setGlobalTab("help")}/>
      </div>
      {/* Split: config column + handle + playground */}
      <div ref={splitRef} style={{display:"flex",flex:1,overflow:"hidden",userSelect:dragging?"none":"auto"}}>
        {/* Config column: tabs + content */}
        <div style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",borderBottom:"1px solid #e5e5e3",background:"#f4f4f4",flexShrink:0}}>
            {NV.map(n=>(
              <button key={n.id} onClick={()=>go(n.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 16px",border:"none",borderBottom:pg===n.id?"2px solid #1a1a1a":"2px solid transparent",background:"transparent",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:pg===n.id?600:400,color:pg===n.id?"#1a1a1a":"#6e6e6e",whiteSpace:"nowrap",flexShrink:0}}>
                <Ic name={n.i} size={15} color={pg===n.id?"#1a1a1a":"#a0a0a0"}/>{n.l}
                {n.b&&<span style={{fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:4,background:"#5b5fc7",color:"#fff"}}>{n.b}</span>}
              </button>
            ))}
          </div>
          <div style={{flex:1,overflow:"auto",background:"#f4f4f4"}}>
            {PageContent({})}
          </div>
        </div>
        {/* Drag handle */}
        <div onMouseDown={startResize} style={{width:6,flexShrink:0,cursor:"col-resize",background:dragging?"#d0d0ce":"#e5e5e3",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .15s"}} onMouseEnter={e=>e.currentTarget.style.background="#d0d0ce"} onMouseLeave={e=>{if(!dragging)e.currentTarget.style.background="#e5e5e3";}}>
          <div style={{display:"flex",flexDirection:"column",gap:3}}>
            {[0,1,2].map(i=><div key={i} style={{width:2,height:10,borderRadius:1,background:"#a0a0a0"}}/>)}
          </div>
        </div>
        {/* AI Playground */}
        <div style={{width:playgroundWidth||"35%",flexShrink:0,borderLeft:"none",background:"#fff",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {PlaygroundPanel({})}
        </div>
      </div>
    </div>
  </div>);
}
