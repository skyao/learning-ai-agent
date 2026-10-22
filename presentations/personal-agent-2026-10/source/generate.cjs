/** Native, editable PowerPoint shapes and text. See README.md for regeneration. */
const fs = require('node:fs');
const path = require('node:path');
const PptxGenJS = require('pptxgenjs');
const OUTPUT_DIR = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'slides.json'), 'utf8'));
const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Sky';
pptx.subject = 'Personal Agent 业界调研与架构学习';
pptx.title = data.title;
pptx.company = 'AI Agent 学习笔记';
pptx.lang = 'zh-CN';
pptx.theme = { headFontFace: 'Microsoft YaHei', bodyFontFace: 'Microsoft YaHei', lang: 'zh-CN' };
pptx.revision = '1';
pptx.defineSlideMaster({ title: 'LIGHT', background: {color:'F6F5F1'}, objects: [] });
pptx.defineSlideMaster({ title: 'DARK', background: {color:'142638'}, objects: [] });
const W=13.333333, H=7.5;
const C={bg:'F6F5F1',dark:'142638',ink:'1E3446',muted:'61717B',line:'D8DFE1',white:'FFFFFF',teal:'078F84',mint:'DDEFE9',blue:'456FC7',pale:'E8EDF6',orange:'BA691F',sand:'F7EAD7',soft:'ABBFC9'};
const metrics=[];
let serial=0;
function rect(s,x,y,w,h,fill=C.white,line=fill,radius=false){
 s.addShape(radius?pptx.ShapeType.roundRect:pptx.ShapeType.rect,{x,y,w,h,rectRadius:0.12,fill:{color:fill},line:{color:line,width:0.6},radius:0.12,shapeName:`panel-${++serial}`});
}
function text(s,t,x,y,w,h,size=20,color=C.ink,bold=false,extra={}){
 // Track explicit geometry for reproducible overflow checks; content is editable text.
 metrics.push({slide:s._slideNum,text:String(t).slice(0,70),x,y,w,h,size});
 s.addText(t,{x,y,w,h,fontFace:'Microsoft YaHei',fontSize:size,color,bold,margin:0,breakLine:false,valign:'mid',align:'left',lang:'zh-CN',fit:'shrink',paraSpaceAfterPt:4,...extra});
}
function line(s,x1,y1,x2,y2,color=C.line,width=1,arrow=false,dash=false){
 s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,beginArrowType:undefined,endArrowType:arrow?'triangle':undefined,dashType:dash?'dash':undefined}});
}
function label(s,t,x,y,w=2,color=C.teal){ text(s,t,x,y,w,0.28,11,color,true); }
function ribbon(s,t,dark=false){
 rect(s,0.55,6.30,12.23,0.57,dark?'203B4B':C.mint);
 text(s,t,0.76,6.39,11.82,0.33,16,dark?'C7ECE5':C.teal,true);
}
function footer(s,item,index,dark=false){
 const color=dark?C.soft:C.muted;
 line(s,0.55,7.08,12.78,7.08,dark?'35505E':C.line,0.7);
 let refs=item.refs.map(k=>data.references[k]).filter(Boolean);
 if(refs.length){
  let runs=[{text:'资料 / ',options:{color}}];
  refs.forEach((ref,i)=>runs.push({text:(i?'  ·  ':'')+ref.name, options:{color,hyperlink:ref.url?{url:ref.url,tooltip:ref.name}:undefined}}));
  text(s,runs,0.58,7.17,10.3,0.17,8.2,color,false);
 }else text(s,'AI Agent 学习笔记  /  2026.10  /  资料快照 10.21–10.22',0.58,7.17,10.3,0.17,8.2,color);
 text(s,index<=29?`${String(index).padStart(2,'0')} / 29`:`附录 ${String.fromCharCode(65+index-30)}`,11.65,7.15,1.10,0.22,10,color,false,{align:'right'});
}
function header(s,item,index,dark=false){
 const ink=dark?C.white:C.ink;
 label(s,`${String(index).padStart(2,'0')}  /  ${item.chapter}`,0.57,0.35,8,dark?'78CFC2':C.teal);
 text(s,item.title,0.55,0.90,12.23,0.66,30,ink,true);
 line(s,0.55,1.75,12.78,1.75,dark?'35505E':C.line,0.8);
 footer(s,item,index,dark);
}
function panel(s,x,y,w,h,title,body,{accent=C.teal,fill=C.white,size=20,kicker=null}={}){
 rect(s,x,y,w,h,fill);
 rect(s,x,y,0.045,h,accent);
 let ty=y+0.27;
 if(kicker){ label(s,kicker,x+0.24,ty,w-0.48,accent);ty+=0.42; }
 text(s,title,x+0.24,ty,w-0.48,0.46,23,C.ink,true);
 text(s,body,x+0.24,ty+0.69,w-0.48,h-(ty-y)-0.91,size,C.muted,false,{valign:'top',lineSpacingMultiple:1.18});
}
function flow(s,steps,{y=2.65,x=.62,w=12.05,h=1.75,size=21,fill=C.white}={}){
 const gap=.29,cw=(w-gap*(steps.length-1))/steps.length;
 steps.forEach((step,i)=>{
  const xx=x+i*(cw+gap);
  rect(s,xx,y,cw,h,fill);
  label(s,`${String(i+1).padStart(2,'0')}`,xx+.18,y+.18,cw-.36);
  text(s,step[0],xx+.18,y+.65,cw-.36,.47,size,C.ink,true);
  if(step[1])text(s,step[1],xx+.18,y+1.20,cw-.36,h-1.28,15.5,C.muted,false,{valign:'top'});
  if(i<steps.length-1)line(s,xx+cw+.035,y+h/2,xx+cw+gap-.035,y+h/2,C.teal,1.6,true);
 });
}
function matrix(s,headers,rows,{x=.60,y=2.04,w=12.1,rowH=.67,colWidths=null,fontSize=17.5,headerH=.48}={}){
 const widths=colWidths||headers.map(()=>w/headers.length);
 let xx=x;
 headers.forEach((h,i)=>{rect(s,xx,y,widths[i],headerH,C.dark);text(s,h,xx+.14,y+.08,widths[i]-.28,headerH-.12,13.5,C.white,true);xx+=widths[i];});
 rows.forEach((row,ri)=>{
  xx=x;
  row.forEach((v,ci)=>{
   rect(s,xx,y+headerH+ri*rowH,widths[ci],rowH,ri%2? 'ECEFEB':C.white);
   text(s,v,xx+.14,y+headerH+ri*rowH+.08,widths[ci]-.28,rowH-.14,fontSize,ci?C.muted:C.ink,ci===0);
   xx+=widths[ci];
  });
 });
}
function sourceNotes(item,index){
 let out=`${String(index).padStart(2,'0')} | ${item.title}\n`;
 out+=item.seconds?`建议时间：${item.seconds} 秒。\n`:'备查页，不计入 40 分钟主流程。\n';
 out+='\n'+item.notes+'\n\n【来源与证据】\n';
 for(const slug of item.refs){ const r=data.references[slug]; out+=`${r.name}\n本地：${r.local}\n`;if(r.url)out+=`原始入口：${r.url}\n`; }
 out+='\n证据范围：基于既有调研笔记（第一批 2026-10-21，第二批 2026-10-22）。除 Muse 原有探索外，没有新增账号或部署实测。架构参考模型与建设判断为个人分析。';
 return out;
}
let elapsed=0;
for(const [idx,item] of data.slides.entries()){
 const index=idx+1;
 const dark=['cover','takeaways','discussion'].includes(item.kind);
 const s=pptx.addSlide({masterName:dark?'DARK':'LIGHT'});
 s.background={color:dark?C.dark:C.bg};
 s.addNotes(sourceNotes(item,index));
 if(item.seconds){s._timingSeconds=item.seconds; elapsed+=item.seconds;}
 if(item.kind==='cover'){
  label(s,'FIELD NOTES / PERSONAL AGENT',.65,.58,9,'78CFC2');
  text(s,item.title,.65,1.55,10.9,.95,54,C.white,true);
  text(s,item.subtitle,.69,2.72,11.8,.82,36,C.white,true);
  rect(s,.70,4.12,.75,.06,C.teal);
  text(s,item.eyebrow,.70,4.56,11,.48,24,'ABC7CF');
  text(s,item.takeaway,.70,5.20,11,.40,19,'ABC7CF');
  text(s,item.date,.70,6.58,11,.30,14,'ABC7CF');
  // A restrained native shape motif.
  for(let i=0;i<4;i++)rect(s,11.35+i*.18,.70+i*.18,.68,.68,i%2?'2D4C5E':'236B6C');
  continue;
 }
 header(s,item,index,dark);
 switch(item.kind){
 case 'agenda':{
  item.items.forEach((it,i)=>{
   const x=.6+i*4.1;
   rect(s,x,2.20,3.92,3.55,C.white);
   text(s,it[0],x+.24,2.42,1.7,.72,40,C.teal,true);
   text(s,it[1],x+.24,3.35,3.44,.5,26,C.ink,true);
   text(s,it[2],x+.24,4.05,3.44,.70,18,C.muted);
   text(s,it[3],x+.24,5.08,3.44,.35,15,C.teal,true);
  }); break;
 }
 case 'scenario':{
  text(s,'“持续跟踪产品更新，按我的关注点维护笔记，\n并交付可以核查的阶段性比较。”',.75,2.08,11.7,1.10,27,C.ink,true);
  flow(s,item.steps,{y:3.58,h:2.13});
  label(s,item.tag,.7,5.87,11,C.muted); break;
 }
 case 'definition':{
  text(s,item.quote,.73,2.10,11.8,1.18,29,C.ink,true);
  const w=2.30,g=.15;
  item.items.forEach((it,i)=>{
   let x=.64+i*(w+g);
   rect(s,x,3.88,w,1.78,C.white);
   text(s,it[0],x+.17,4.11,w-.34,.40,21,C.teal,true);
   text(s,it[1],x+.17,4.80,w-.34,.58,16,C.muted);
  });break;
 }
 case 'landscape':{
  item.groups.forEach((it,i)=>{
   const x=.60+(i%3)*4.10,y=2.02+Math.floor(i/3)*2.02;
   panel(s,x,y,3.91,1.83,it[0],it[1]+'\n'+it[2],{size:16.5,accent:i<3?C.teal:C.blue});
  });break;
 }
 case 'evidence':{
  item.items.forEach((it,i)=>{
   const x=.60+i*3.08;
   rect(s,x,2.30,2.90,3.4,C.white);
   label(s,`${i+1}`,x+.2,2.55,2.5);
   text(s,it[0],x+.2,3.14,2.5,.45,23,C.ink,true);
   text(s,it[1],x+.2,3.94,2.5,.75,18,C.muted);
   text(s,it[2],x+.2,4.95,2.5,.45,16,C.teal,true);
  });break;
 }
 case 'products':{
  const n=item.cards.length, gap=.22,w=(12.13-gap*(n-1))/n;
  const font=n===4?17:19.5;
  item.cards.forEach((card,i)=>{
   const x=.6+i*(w+gap);
   rect(s,x,2.08,w,3.91,C.white);
   label(s,card.focus,x+.20,2.35,w-.4);
   text(s,card.name,x+.20,2.94,w-.4,.78,n===4?22:26,C.ink,true);
   card.points.forEach((point,pi)=>{
    const step=n===2?.42:n===3?.64:0;
    const ph=n===2?.36:n===3?.52:1.08;
    text(s,'• '+point,x+.20,3.94+pi*step,w-.4,ph,n===2?19.5:n===3?18.5:17,C.muted,false,{valign:'top'});
   });
   line(s,x+.20,5.25,x+w-.2,5.25,C.line,.7);
   text(s,card.question,x+.20,5.44,w-.4,.36,n===4?15.5:16.5,C.teal,true);
  });break;
 }
 case 'objects':{
  const gap=.16,w=(12.1-gap*4)/5;
  item.items.forEach((it,i)=>{
   const x=.62+i*(w+gap);
   rect(s,x,2.58,w,2.75,C.white);
   text(s,String(i+1).padStart(2,'0'),x+.17,2.83,w-.34,.4,20,C.teal,true);
   text(s,it[0],x+.17,3.57,w-.34,.54,28,C.ink,true);
   text(s,it[1],x+.17,4.40,w-.34,.52,16.5,C.muted);
  });break;
 }
 case 'architecture':{
  // All four layers and side rails are editable native shapes.
  rect(s,.6,2.02,1.05,3.92,C.dark);
  rect(s,11.68,2.02,1.05,3.92,C.dark);
  text(s,'权 限\n凭 证\n撤 销',.77,2.85,.70,2.0,19,'D4E9E6',true,{align:'center',valign:'mid'});
  text(s,'事 件\n产 物\n成 本',11.85,2.85,.70,2.0,19,'D4E9E6',true,{align:'center',valign:'mid'});
  item.layers.forEach((it,i)=>{
   let y=2.02+i*1.02;
   rect(s,1.88,y,9.56,.86,i===1?C.mint:C.white);
   text(s,it[0],2.08,y+.16,1.38,.46,20,C.teal,true);
   text(s,it[1],3.60,y+.11,7.54,.31,19,C.ink,true);
   text(s,it[2],3.60,y+.50,7.54,.23,13,C.muted);
   if(i<3)line(s,6.66,y+.88,6.66,y+1.00,C.teal,1,true);
  }); break;
 }
 case 'lifecycle':{
  const x=.70,right=12.6;
  const ys=[2.43,3.52,4.78];
  const labs=['长期目标','计划 / 触发','单次运行'];
  labs.forEach((l,i)=>{text(s,l,x,ys[i]-.20,1.48,.40,18,C.ink,true);line(s,2.34,ys[i],right,ys[i],C.line,2);});
  rect(s,2.46,2.18,9.83,.48,C.mint);text(s,'持续跟踪产品，并维护学习笔记',2.65,2.26,9.5,.25,16,C.teal,true);
  const nodes=[2.85,5.82,9.27,11.74];
  ['触发 A','触发 B','触发 C','停止计划'].forEach((t,i)=>{
   s.addShape(pptx.ShapeType.ellipse,{x:nodes[i]-.075,y:3.445,w:.15,h:.15,line:{color:C.teal},fill:{color:C.teal}});
   text(s,t,nodes[i]-.55,3.78,1.3,.31,14,C.muted,false,{align:'center'});
  });
  const runs=[[2.51,1.40,'运行 1','完成',C.mint],[5.14,1.50,'运行 2','中断',C.sand],[7.07,1.70,'恢复运行','检查回执',C.pale],[9.37,1.65,'运行 3','等待审批',C.mint]];
  runs.forEach(([xx,w,a,b,col])=>{rect(s,xx,4.43,w,.9,col);text(s,a,xx+.1,4.54,w-.2,.26,15,C.ink,true,{align:'center'});text(s,b,xx+.1,4.96,w-.2,.23,12,C.muted,false,{align:'center'});});
  line(s,6.70,4.88,7.02,4.88,C.orange,1.5,true);
  text(s,'故障点：外部写入已成功，结果尚未记入状态。',.78,5.65,11.8,.32,17,C.orange,true);break;
 }
 case 'scheduling':{
  item.items.forEach((it,i)=>{
   const x=.60+(i%2)*6.18,y=2.12+Math.floor(i/2)*1.92;
   rect(s,x,y,5.96,1.69,C.white);
   label(s,it[0],x+.22,y+.20,5.5);
   text(s,it[1],x+.22,y+.65,5.5,.40,23,C.ink,true);
   text(s,it[2],x+.22,y+1.20,5.5,.25,16.5,C.muted);
  });break;
 }
 case 'memory':{
  flow(s,item.steps,{y:2.28,h:1.85,size:21});
  item.checks.forEach((it,i)=>{
   let x=.62+i*4.10;
   text(s,it[0],x+.08,4.72,3.8,.37,22,C.teal,true);
   text(s,it[1],x+.08,5.30,3.8,.41,18,C.muted);
  });break;
 }
 case 'memorycompare':{
  matrix(s,['样本','公开机制','我会怎样验证'],item.rows,{y:2.35,rowH:1.02,colWidths:[2.65,4.25,5.20],fontSize:19});break;
 }
 case 'locations':{
  matrix(s,item.headers,item.rows,{y:2.35,rowH:.96,colWidths:[3.25,4.60,4.25],fontSize:19});
  text(s,'分别检查：模型端点、数据流、执行宿主与凭证主体。',.76,5.91,11.8,.29,16,C.teal,true);break;
 }
 case 'handoff':{
  flow(s,item.steps,{y:2.17,h:1.94});
  label(s,'每次交接携带',.72,4.62,3);
  item.payload.forEach((t,i)=>{let x=.72+i*3.07;rect(s,x,5.12,2.87,.55,C.mint);text(s,t,x+.10,5.25,2.67,.25,16,C.teal,true,{align:'center'});});break;
 }
 case 'extensions':{
  item.items.forEach((it,i)=>{const x=.6+i*4.10;panel(s,x,2.35,3.90,3.30,it[0],it[1]+'\n\n'+it[2],{size:21,kicker:`LAYER 0${i+1}`,accent:i===1?C.blue:C.teal});});break;
 }
 case 'identity':{
  flow(s,item.steps,{y:2.42,h:2.24,size:21});
  text(s,'示例：我提出修改 → 代理组织 → 审核人批准 → 团队账号写入 → 指定文档版本',.73,5.29,11.9,.57,18,C.muted);break;
 }
 case 'controls':{
  item.items.forEach((it,i)=>{let x=.60+i*4.10;panel(s,x,2.36,3.90,3.37,it[0],it[1]+'\n\n'+it[2],{kicker:`CONTROL 0${i+1}`,size:19.5,accent:[C.teal,C.blue,C.orange][i]});});break;
 }
 case 'revocation':{
  item.items.forEach((it,i)=>{
   const x=.60+(i%2)*6.18,y=2.12+Math.floor(i/2)*1.92;
   panel(s,x,y,5.96,1.69,it[0],it[1]+' · '+it[2],{size:16.8});
  });break;
 }
 case 'trace':{
  flow(s,item.steps,{y:2.67,h:2.12,size:21});
  text(s,'委托 ID ─────────── 运行 ID ─────────── 动作 ID ─────────── 产物版本',.82,5.38,11.7,.46,18,C.teal,true);break;
 }
 case 'evaluation':{
  matrix(s,['共同场景','完成标准','留存证据'],item.rows,{y:2.10,rowH:.69,colWidths:[2.65,4.22,5.23],fontSize:18});break;
 }
 case 'cost':{
  text(s,item.formula,.74,2.12,11.9,.55,29,C.ink,true);
  item.items.forEach((it,i)=>{let x=.62+i*3.075;rect(s,x,3.13,2.88,2.25,C.white);text(s,it[0],x+.18,3.44,2.52,.43,22,C.teal,true);text(s,it[1],x+.18,4.25,2.52,.55,18,C.muted);});break;
 }
 case 'roadmap':{
  item.items.forEach((it,i)=>{
   let x=.60+i*4.10;
   rect(s,x,2.12,3.91,3.90,C.white);
   text(s,it[0],x+.22,2.40,3.47,.70,38,C.teal,true);
   text(s,it[1],x+.22,3.37,3.47,.47,24,C.ink,true);
   text(s,it[2],x+.22,4.15,3.47,.70,18,C.muted);
   text(s,it[3],x+.22,5.25,3.47,.35,16,C.teal,true);
  });break;
 }
 case 'takeaways':{
  item.items.forEach((it,i)=>{
   let y=2.17+i*1.18;
   text(s,`0${i+1}`,.73,y,.76,.53,28,'78CFC2',true);
   text(s,it[0],1.72,y,2.10,.53,26,C.white,true);
   text(s,it[1],4.02,y+.07,8.45,.40,23,'C5D4DC');
   if(i<2)line(s,.74,y+.90,12.5,y+.9,'35505E',.6);
  });break;
 }
 case 'discussion':{
  item.items.forEach((it,i)=>{let y=2.33+i*1.17;label(s,`0${i+1}`,.73,y,.75,'78CFC2');text(s,it,1.68,y-.03,10.8,.69,26,C.white,true);});break;
 }
 case 'catalog':{
  matrix(s,['产品','阅读重点','证据与条件'],item.rows,{y:1.99,rowH:.515,headerH:.45,colWidths:[2.72,4.29,5.09],fontSize:15.5});break;
 }
 case 'appendixdetail':{
  item.items.forEach((it,i)=>{let y=2.10+i*1.25;rect(s,.64,y,12.04,1.06,C.white);text(s,it[0],.86,y+.16,3.62,.64,20,C.teal,true);text(s,it[1],4.64,y+.16,7.79,.66,18,C.muted);});break;
 }
 case 'sources':{
  item.source_products.forEach((slug,i)=>{
   const r=data.references[slug],y=2.04+i*.50;
   text(s,r.name,.73,y,3.08,.34,17,C.ink,true);
   const display=r.url.replace(/^https:\/\//,'').replace(/\/$/,'');
   text(s,display,3.84,y+.03,8.65,.29,12.5,C.teal,false,{hyperlink:{url:r.url,tooltip:r.url}});
  });
  text(s,'完整日期与证据范围：仓库各产品 references/index.md；逐页来源也保存在讲者备注。',.75,6.35,11.8,.37,15,C.muted);break;
 }
 case 'record':{
  matrix(s,['记录部分','必须保留的信息'],item.rows,{y:2.13,rowH:.60,headerH:.44,colWidths:[2.73,9.37],fontSize:18});break;
 }
 default:throw new Error('Unknown layout '+item.kind);
 }
 if(item.ribbon)ribbon(s,item.ribbon,dark);
}
if(elapsed!==2400)throw new Error('Timing mismatch');
for(const m of metrics){
 if(m.x<0||m.y<0||m.x+m.w>W+.02||m.y+m.h>H+.02)throw new Error(`Out of slide: ${JSON.stringify(m)}`);
}
const out=path.join(OUTPUT_DIR,'personal-agent-40min.pptx');
pptx.writeFile({fileName:out}).then(()=>{
 fs.writeFileSync(path.join(__dirname,'layout-metrics.json'),JSON.stringify(metrics,null,2)+'\n');
 console.log(`Created ${out}: ${data.slides.length} slides, ${elapsed} seconds, ${metrics.length} text objects`);
});
