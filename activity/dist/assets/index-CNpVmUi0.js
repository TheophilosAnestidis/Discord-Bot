(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Df(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Go={exports:{}},du;function Eh(){return du||(du=1,(function(n){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function r(u,l,f){this.fn=u,this.context=l,this.once=f||!1}function s(u,l,f,h,p){if(typeof f!="function")throw new TypeError("The listener must be a function");var m=new r(f,h||u,p),x=t?t+l:l;return u._events[x]?u._events[x].fn?u._events[x]=[u._events[x],m]:u._events[x].push(m):(u._events[x]=m,u._eventsCount++),u}function a(u,l){--u._eventsCount===0?u._events=new i:delete u._events[l]}function o(){this._events=new i,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],f,h;if(this._eventsCount===0)return l;for(h in f=this._events)e.call(f,h)&&l.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(f)):l},o.prototype.listeners=function(l){var f=t?t+l:l,h=this._events[f];if(!h)return[];if(h.fn)return[h.fn];for(var p=0,m=h.length,x=new Array(m);p<m;p++)x[p]=h[p].fn;return x},o.prototype.listenerCount=function(l){var f=t?t+l:l,h=this._events[f];return h?h.fn?1:h.length:0},o.prototype.emit=function(l,f,h,p,m,x){var b=t?t+l:l;if(!this._events[b])return!1;var _=this._events[b],g=arguments.length,I,D;if(_.fn){switch(_.once&&this.removeListener(l,_.fn,void 0,!0),g){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,f),!0;case 3:return _.fn.call(_.context,f,h),!0;case 4:return _.fn.call(_.context,f,h,p),!0;case 5:return _.fn.call(_.context,f,h,p,m),!0;case 6:return _.fn.call(_.context,f,h,p,m,x),!0}for(D=1,I=new Array(g-1);D<g;D++)I[D-1]=arguments[D];_.fn.apply(_.context,I)}else{var y=_.length,P;for(D=0;D<y;D++)switch(_[D].once&&this.removeListener(l,_[D].fn,void 0,!0),g){case 1:_[D].fn.call(_[D].context);break;case 2:_[D].fn.call(_[D].context,f);break;case 3:_[D].fn.call(_[D].context,f,h);break;case 4:_[D].fn.call(_[D].context,f,h,p);break;default:if(!I)for(P=1,I=new Array(g-1);P<g;P++)I[P-1]=arguments[P];_[D].fn.apply(_[D].context,I)}}return!0},o.prototype.on=function(l,f,h){return s(this,l,f,h,!1)},o.prototype.once=function(l,f,h){return s(this,l,f,h,!0)},o.prototype.removeListener=function(l,f,h,p){var m=t?t+l:l;if(!this._events[m])return this;if(!f)return a(this,m),this;var x=this._events[m];if(x.fn)x.fn===f&&(!p||x.once)&&(!h||x.context===h)&&a(this,m);else{for(var b=0,_=[],g=x.length;b<g;b++)(x[b].fn!==f||p&&!x[b].once||h&&x[b].context!==h)&&_.push(x[b]);_.length?this._events[m]=_.length===1?_[0]:_:a(this,m)}return this},o.prototype.removeAllListeners=function(l){var f;return l?(f=t?t+l:l,this._events[f]&&a(this,f)):(this._events=new i,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,n.exports=o})(Go)),Go.exports}var Sh=Eh(),Mh=Df(Sh),Et;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(Et||(Et={}));var yl;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(yl||(yl={}));const Ie=Et.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),tr=n=>{switch(typeof n){case"undefined":return Ie.undefined;case"string":return Ie.string;case"number":return isNaN(n)?Ie.nan:Ie.number;case"boolean":return Ie.boolean;case"function":return Ie.function;case"bigint":return Ie.bigint;case"symbol":return Ie.symbol;case"object":return Array.isArray(n)?Ie.array:n===null?Ie.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?Ie.promise:typeof Map<"u"&&n instanceof Map?Ie.map:typeof Set<"u"&&n instanceof Set?Ie.set:typeof Date<"u"&&n instanceof Date?Ie.date:Ie.object;default:return Ie.unknown}},pe=Et.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),yh=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class Un extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,u=0;for(;u<a.path.length;){const l=a.path[u];u===a.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(a))):o[l]=o[l]||{_errors:[]},o=o[l],u++}}};return r(this),i}static assert(e){if(!(e instanceof Un))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Et.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Un.create=n=>new Un(n);const cs=(n,e)=>{let t;switch(n.code){case pe.invalid_type:n.received===Ie.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case pe.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,Et.jsonStringifyReplacer)}`;break;case pe.unrecognized_keys:t=`Unrecognized key(s) in object: ${Et.joinValues(n.keys,", ")}`;break;case pe.invalid_union:t="Invalid input";break;case pe.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Et.joinValues(n.options)}`;break;case pe.invalid_enum_value:t=`Invalid enum value. Expected ${Et.joinValues(n.options)}, received '${n.received}'`;break;case pe.invalid_arguments:t="Invalid function arguments";break;case pe.invalid_return_type:t="Invalid function return type";break;case pe.invalid_date:t="Invalid date";break;case pe.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:Et.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case pe.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case pe.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case pe.custom:t="Invalid input";break;case pe.invalid_intersection_types:t="Intersection results could not be merged";break;case pe.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case pe.not_finite:t="Number must be finite";break;default:t=e.defaultError,Et.assertNever(n)}return{message:t}};let Lf=cs;function Th(n){Lf=n}function ao(){return Lf}const oo=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let o="";const u=i.filter(l=>!!l).slice().reverse();for(const l of u)o=l(a,{data:e,defaultError:o}).message;return{...r,path:s,message:o}},bh=[];function be(n,e){const t=ao(),i=oo({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===cs?void 0:cs].filter(r=>!!r)});n.common.issues.push(i)}class mn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return Je;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t){const s=await r.key,a=await r.value;i.push({key:s,value:a})}return mn.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return Je;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const Je=Object.freeze({status:"aborted"}),is=n=>({status:"dirty",value:n}),yn=n=>({status:"valid",value:n}),Tl=n=>n.status==="aborted",bl=n=>n.status==="dirty",Ys=n=>n.status==="valid",Zs=n=>typeof Promise<"u"&&n instanceof Promise;function lo(n,e,t,i){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function Cf(n,e,t,i,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var Ve;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(Ve||(Ve={}));var Bs,Gs;class xi{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const hu=(n,e)=>{if(Ys(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Un(n.common.issues);return this._error=t,this._error}}};function rt(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>{var u,l;const{message:f}=n;return a.code==="invalid_enum_value"?{message:f??o.defaultError}:typeof o.data>"u"?{message:(u=f??i)!==null&&u!==void 0?u:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(l=f??t)!==null&&l!==void 0?l:o.defaultError}},description:r}}class lt{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return tr(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:tr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mn,ctx:{common:e.parent.common,data:e.data,parsedType:tr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Zs(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:tr(e)},s=this._parseSync({data:e,path:r.path,parent:r});return hu(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:tr(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Zs(r)?r:Promise.resolve(r));return hu(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:pe.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(u=>u?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new ri({schema:this,typeName:Ye.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return mi.create(this,this._def)}nullable(){return lr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ii.create(this,this._def)}promise(){return fs.create(this,this._def)}or(e){return Qs.create([this,e],this._def)}and(e){return js.create(this,e,this._def)}transform(e){return new ri({...rt(this._def),schema:this,typeName:Ye.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new ra({...rt(this._def),innerType:this,defaultValue:t,typeName:Ye.ZodDefault})}brand(){return new Mc({typeName:Ye.ZodBranded,type:this,...rt(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new sa({...rt(this._def),innerType:this,catchValue:t,typeName:Ye.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ha.create(this,e)}readonly(){return aa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ah=/^c[^\s-]{8,}$/i,wh=/^[0-9a-z]+$/,Rh=/^[0-9A-HJKMNP-TV-Z]{26}$/,Ih=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ph=/^[a-z0-9_-]{21}$/i,Nh=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Dh=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Lh="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ko;const Ch=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Uh=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Oh=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Uf="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Fh=new RegExp(`^${Uf}$`);function Of(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function Bh(n){return new RegExp(`^${Of(n)}$`)}function Ff(n){let e=`${Uf}T${Of(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Gh(n,e){return!!((e==="v4"||!e)&&Ch.test(n)||(e==="v6"||!e)&&Uh.test(n))}class ti extends lt{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Ie.string){const s=this._getOrReturnCtx(e);return be(s,{code:pe.invalid_type,expected:Ie.string,received:s.parsedType}),Je}const i=new mn;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:pe.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:pe.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?be(r,{code:pe.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&be(r,{code:pe.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")Dh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"email",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")ko||(ko=new RegExp(Lh,"u")),ko.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"emoji",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")Ih.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"uuid",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")Ph.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"nanoid",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")Ah.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"cuid",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")wh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"cuid2",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")Rh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"ulid",code:pe.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),be(r,{validation:"url",code:pe.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"regex",code:pe.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?Ff(s).test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?Fh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?Bh(s).test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{code:pe.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?Nh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"duration",code:pe.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?Gh(e.data,s.version)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"ip",code:pe.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?Oh.test(e.data)||(r=this._getOrReturnCtx(e,r),be(r,{validation:"base64",code:pe.invalid_string,message:s.message}),i.dirty()):Et.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(r=>e.test(r),{validation:t,code:pe.invalid_string,...Ve.errToObj(i)})}_addCheck(e){return new ti({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Ve.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Ve.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Ve.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Ve.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Ve.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Ve.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Ve.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Ve.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Ve.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Ve.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(t=e?.offset)!==null&&t!==void 0?t:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...Ve.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Ve.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Ve.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Ve.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...Ve.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Ve.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Ve.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Ve.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Ve.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Ve.errToObj(t)})}nonempty(e){return this.min(1,Ve.errToObj(e))}trim(){return new ti({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ti({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ti({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ti.create=n=>{var e;return new ti({checks:[],typeName:Ye.ZodString,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...rt(n)})};function kh(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class sr extends lt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Ie.number){const s=this._getOrReturnCtx(e);return be(s,{code:pe.invalid_type,expected:Ie.number,received:s.parsedType}),Je}let i;const r=new mn;for(const s of this._def.checks)s.kind==="int"?Et.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),be(i,{code:pe.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?kh(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),be(i,{code:pe.not_finite,message:s.message}),r.dirty()):Et.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ve.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ve.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ve.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ve.toString(t))}setLimit(e,t,i,r){return new sr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ve.toString(r)}]})}_addCheck(e){return new sr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Ve.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Ve.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ve.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Ve.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ve.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ve.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Et.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}sr.create=n=>new sr({checks:[],typeName:Ye.ZodNumber,coerce:n?.coerce||!1,...rt(n)});class ar extends lt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Ie.bigint){const s=this._getOrReturnCtx(e);return be(s,{code:pe.invalid_type,expected:Ie.bigint,received:s.parsedType}),Je}let i;const r=new mn;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),be(i,{code:pe.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):Et.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ve.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ve.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ve.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ve.toString(t))}setLimit(e,t,i,r){return new ar({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ve.toString(r)}]})}_addCheck(e){return new ar({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Ve.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Ve.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Ve.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Ve.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ve.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ar.create=n=>{var e;return new ar({checks:[],typeName:Ye.ZodBigInt,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...rt(n)})};class Ks extends lt{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Ie.boolean){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.boolean,received:i.parsedType}),Je}return yn(e.data)}}Ks.create=n=>new Ks({typeName:Ye.ZodBoolean,coerce:n?.coerce||!1,...rt(n)});class Ar extends lt{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Ie.date){const s=this._getOrReturnCtx(e);return be(s,{code:pe.invalid_type,expected:Ie.date,received:s.parsedType}),Je}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return be(s,{code:pe.invalid_date}),Je}const i=new mn;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:pe.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),be(r,{code:pe.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):Et.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ar({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Ve.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Ve.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ar.create=n=>new Ar({checks:[],coerce:n?.coerce||!1,typeName:Ye.ZodDate,...rt(n)});class co extends lt{_parse(e){if(this._getType(e)!==Ie.symbol){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.symbol,received:i.parsedType}),Je}return yn(e.data)}}co.create=n=>new co({typeName:Ye.ZodSymbol,...rt(n)});class $s extends lt{_parse(e){if(this._getType(e)!==Ie.undefined){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.undefined,received:i.parsedType}),Je}return yn(e.data)}}$s.create=n=>new $s({typeName:Ye.ZodUndefined,...rt(n)});class Js extends lt{_parse(e){if(this._getType(e)!==Ie.null){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.null,received:i.parsedType}),Je}return yn(e.data)}}Js.create=n=>new Js({typeName:Ye.ZodNull,...rt(n)});class us extends lt{constructor(){super(...arguments),this._any=!0}_parse(e){return yn(e.data)}}us.create=n=>new us({typeName:Ye.ZodAny,...rt(n)});class Tr extends lt{constructor(){super(...arguments),this._unknown=!0}_parse(e){return yn(e.data)}}Tr.create=n=>new Tr({typeName:Ye.ZodUnknown,...rt(n)});class ki extends lt{_parse(e){const t=this._getOrReturnCtx(e);return be(t,{code:pe.invalid_type,expected:Ie.never,received:t.parsedType}),Je}}ki.create=n=>new ki({typeName:Ye.ZodNever,...rt(n)});class uo extends lt{_parse(e){if(this._getType(e)!==Ie.undefined){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.void,received:i.parsedType}),Je}return yn(e.data)}}uo.create=n=>new uo({typeName:Ye.ZodVoid,...rt(n)});class ii extends lt{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==Ie.array)return be(t,{code:pe.invalid_type,expected:Ie.array,received:t.parsedType}),Je;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(be(t,{code:a?pe.too_big:pe.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(be(t,{code:pe.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(be(t,{code:pe.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new xi(t,a,t.path,o)))).then(a=>mn.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new xi(t,a,t.path,o)));return mn.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new ii({...this._def,minLength:{value:e,message:Ve.toString(t)}})}max(e,t){return new ii({...this._def,maxLength:{value:e,message:Ve.toString(t)}})}length(e,t){return new ii({...this._def,exactLength:{value:e,message:Ve.toString(t)}})}nonempty(e){return this.min(1,e)}}ii.create=(n,e)=>new ii({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ye.ZodArray,...rt(e)});function es(n){if(n instanceof Wt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=mi.create(es(i))}return new Wt({...n._def,shape:()=>e})}else return n instanceof ii?new ii({...n._def,type:es(n.element)}):n instanceof mi?mi.create(es(n.unwrap())):n instanceof lr?lr.create(es(n.unwrap())):n instanceof Ei?Ei.create(n.items.map(e=>es(e))):n}class Wt extends lt{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Et.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Ie.object){const l=this._getOrReturnCtx(e);return be(l,{code:pe.invalid_type,expected:Ie.object,received:l.parsedType}),Je}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof ki&&this._def.unknownKeys==="strip"))for(const l in r.data)a.includes(l)||o.push(l);const u=[];for(const l of a){const f=s[l],h=r.data[l];u.push({key:{status:"valid",value:l},value:f._parse(new xi(r,h,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof ki){const l=this._def.unknownKeys;if(l==="passthrough")for(const f of o)u.push({key:{status:"valid",value:f},value:{status:"valid",value:r.data[f]}});else if(l==="strict")o.length>0&&(be(r,{code:pe.unrecognized_keys,keys:o}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const f of o){const h=r.data[f];u.push({key:{status:"valid",value:f},value:l._parse(new xi(r,h,r.path,f)),alwaysSet:f in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const f of u){const h=await f.key,p=await f.value;l.push({key:h,value:p,alwaysSet:f.alwaysSet})}return l}).then(l=>mn.mergeObjectSync(i,l)):mn.mergeObjectSync(i,u)}get shape(){return this._def.shape()}strict(e){return Ve.errToObj,new Wt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const u=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=Ve.errToObj(e).message)!==null&&o!==void 0?o:u}:{message:u}}}:{}})}strip(){return new Wt({...this._def,unknownKeys:"strip"})}passthrough(){return new Wt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Wt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Wt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ye.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Wt({...this._def,catchall:e})}pick(e){const t={};return Et.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new Wt({...this._def,shape:()=>t})}omit(e){const t={};return Et.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new Wt({...this._def,shape:()=>t})}deepPartial(){return es(this)}partial(e){const t={};return Et.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new Wt({...this._def,shape:()=>t})}required(e){const t={};return Et.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof mi;)s=s._def.innerType;t[i]=s}}),new Wt({...this._def,shape:()=>t})}keyof(){return Bf(Et.objectKeys(this.shape))}}Wt.create=(n,e)=>new Wt({shape:()=>n,unknownKeys:"strip",catchall:ki.create(),typeName:Ye.ZodObject,...rt(e)});Wt.strictCreate=(n,e)=>new Wt({shape:()=>n,unknownKeys:"strict",catchall:ki.create(),typeName:Ye.ZodObject,...rt(e)});Wt.lazycreate=(n,e)=>new Wt({shape:n,unknownKeys:"strip",catchall:ki.create(),typeName:Ye.ZodObject,...rt(e)});class Qs extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Un(o.ctx.common.issues));return be(t,{code:pe.invalid_union,unionErrors:a}),Je}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const u of i){const l={...t,common:{...t.common,issues:[]},parent:null},f=u._parseSync({data:t.data,path:t.path,parent:l});if(f.status==="valid")return f;f.status==="dirty"&&!s&&(s={result:f,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(u=>new Un(u));return be(t,{code:pe.invalid_union,unionErrors:o}),Je}}get options(){return this._def.options}}Qs.create=(n,e)=>new Qs({options:n,typeName:Ye.ZodUnion,...rt(e)});const Di=n=>n instanceof ta?Di(n.schema):n instanceof ri?Di(n.innerType()):n instanceof na?[n.value]:n instanceof or?n.options:n instanceof ia?Et.objectValues(n.enum):n instanceof ra?Di(n._def.innerType):n instanceof $s?[void 0]:n instanceof Js?[null]:n instanceof mi?[void 0,...Di(n.unwrap())]:n instanceof lr?[null,...Di(n.unwrap())]:n instanceof Mc||n instanceof aa?Di(n.unwrap()):n instanceof sa?Di(n._def.innerType):[];class Mo extends lt{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.object)return be(t,{code:pe.invalid_type,expected:Ie.object,received:t.parsedType}),Je;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(be(t,{code:pe.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Je)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=Di(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new Mo({typeName:Ye.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...rt(i)})}}function Al(n,e){const t=tr(n),i=tr(e);if(n===e)return{valid:!0,data:n};if(t===Ie.object&&i===Ie.object){const r=Et.objectKeys(e),s=Et.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const u=Al(n[o],e[o]);if(!u.valid)return{valid:!1};a[o]=u.data}return{valid:!0,data:a}}else if(t===Ie.array&&i===Ie.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],u=Al(a,o);if(!u.valid)return{valid:!1};r.push(u.data)}return{valid:!0,data:r}}else return t===Ie.date&&i===Ie.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class js extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(Tl(s)||Tl(a))return Je;const o=Al(s.value,a.value);return o.valid?((bl(s)||bl(a))&&t.dirty(),{status:t.value,value:o.data}):(be(i,{code:pe.invalid_intersection_types}),Je)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}js.create=(n,e,t)=>new js({left:n,right:e,typeName:Ye.ZodIntersection,...rt(t)});class Ei extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.array)return be(i,{code:pe.invalid_type,expected:Ie.array,received:i.parsedType}),Je;if(i.data.length<this._def.items.length)return be(i,{code:pe.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Je;!this._def.rest&&i.data.length>this._def.items.length&&(be(i,{code:pe.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const u=this._def.items[o]||this._def.rest;return u?u._parse(new xi(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>mn.mergeArray(t,a)):mn.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new Ei({...this._def,rest:e})}}Ei.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ei({items:n,typeName:Ye.ZodTuple,rest:null,...rt(e)})};class ea extends lt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.object)return be(i,{code:pe.invalid_type,expected:Ie.object,received:i.parsedType}),Je;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new xi(i,o,i.path,o)),value:a._parse(new xi(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?mn.mergeObjectAsync(t,r):mn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof lt?new ea({keyType:e,valueType:t,typeName:Ye.ZodRecord,...rt(i)}):new ea({keyType:ti.create(),valueType:e,typeName:Ye.ZodRecord,...rt(t)})}}class fo extends lt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.map)return be(i,{code:pe.invalid_type,expected:Ie.map,received:i.parsedType}),Je;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,u],l)=>({key:r._parse(new xi(i,o,i.path,[l,"key"])),value:s._parse(new xi(i,u,i.path,[l,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const u of a){const l=await u.key,f=await u.value;if(l.status==="aborted"||f.status==="aborted")return Je;(l.status==="dirty"||f.status==="dirty")&&t.dirty(),o.set(l.value,f.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const u of a){const l=u.key,f=u.value;if(l.status==="aborted"||f.status==="aborted")return Je;(l.status==="dirty"||f.status==="dirty")&&t.dirty(),o.set(l.value,f.value)}return{status:t.value,value:o}}}}fo.create=(n,e,t)=>new fo({valueType:e,keyType:n,typeName:Ye.ZodMap,...rt(t)});class wr extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Ie.set)return be(i,{code:pe.invalid_type,expected:Ie.set,received:i.parsedType}),Je;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(be(i,{code:pe.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(be(i,{code:pe.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(u){const l=new Set;for(const f of u){if(f.status==="aborted")return Je;f.status==="dirty"&&t.dirty(),l.add(f.value)}return{status:t.value,value:l}}const o=[...i.data.values()].map((u,l)=>s._parse(new xi(i,u,i.path,l)));return i.common.async?Promise.all(o).then(u=>a(u)):a(o)}min(e,t){return new wr({...this._def,minSize:{value:e,message:Ve.toString(t)}})}max(e,t){return new wr({...this._def,maxSize:{value:e,message:Ve.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}wr.create=(n,e)=>new wr({valueType:n,minSize:null,maxSize:null,typeName:Ye.ZodSet,...rt(e)});class rs extends lt{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.function)return be(t,{code:pe.invalid_type,expected:Ie.function,received:t.parsedType}),Je;function i(o,u){return oo({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ao(),cs].filter(l=>!!l),issueData:{code:pe.invalid_arguments,argumentsError:u}})}function r(o,u){return oo({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ao(),cs].filter(l=>!!l),issueData:{code:pe.invalid_return_type,returnTypeError:u}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof fs){const o=this;return yn(async function(...u){const l=new Un([]),f=await o._def.args.parseAsync(u,s).catch(m=>{throw l.addIssue(i(u,m)),l}),h=await Reflect.apply(a,this,f);return await o._def.returns._def.type.parseAsync(h,s).catch(m=>{throw l.addIssue(r(h,m)),l})})}else{const o=this;return yn(function(...u){const l=o._def.args.safeParse(u,s);if(!l.success)throw new Un([i(u,l.error)]);const f=Reflect.apply(a,this,l.data),h=o._def.returns.safeParse(f,s);if(!h.success)throw new Un([r(f,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new rs({...this._def,args:Ei.create(e).rest(Tr.create())})}returns(e){return new rs({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new rs({args:e||Ei.create([]).rest(Tr.create()),returns:t||Tr.create(),typeName:Ye.ZodFunction,...rt(i)})}}class ta extends lt{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ta.create=(n,e)=>new ta({getter:n,typeName:Ye.ZodLazy,...rt(e)});class na extends lt{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return be(t,{received:t.data,code:pe.invalid_literal,expected:this._def.value}),Je}return{status:"valid",value:e.data}}get value(){return this._def.value}}na.create=(n,e)=>new na({value:n,typeName:Ye.ZodLiteral,...rt(e)});function Bf(n,e){return new or({values:n,typeName:Ye.ZodEnum,...rt(e)})}class or extends lt{constructor(){super(...arguments),Bs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return be(t,{expected:Et.joinValues(i),received:t.parsedType,code:pe.invalid_type}),Je}if(lo(this,Bs)||Cf(this,Bs,new Set(this._def.values)),!lo(this,Bs).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return be(t,{received:t.data,code:pe.invalid_enum_value,options:i}),Je}return yn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return or.create(e,{...this._def,...t})}exclude(e,t=this._def){return or.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}Bs=new WeakMap;or.create=Bf;class ia extends lt{constructor(){super(...arguments),Gs.set(this,void 0)}_parse(e){const t=Et.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Ie.string&&i.parsedType!==Ie.number){const r=Et.objectValues(t);return be(i,{expected:Et.joinValues(r),received:i.parsedType,code:pe.invalid_type}),Je}if(lo(this,Gs)||Cf(this,Gs,new Set(Et.getValidEnumValues(this._def.values))),!lo(this,Gs).has(e.data)){const r=Et.objectValues(t);return be(i,{received:i.data,code:pe.invalid_enum_value,options:r}),Je}return yn(e.data)}get enum(){return this._def.values}}Gs=new WeakMap;ia.create=(n,e)=>new ia({values:n,typeName:Ye.ZodNativeEnum,...rt(e)});class fs extends lt{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ie.promise&&t.common.async===!1)return be(t,{code:pe.invalid_type,expected:Ie.promise,received:t.parsedType}),Je;const i=t.parsedType===Ie.promise?t.data:Promise.resolve(t.data);return yn(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}fs.create=(n,e)=>new fs({type:n,typeName:Ye.ZodPromise,...rt(e)});class ri extends lt{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ye.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{be(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Je;const u=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return u.status==="aborted"?Je:u.status==="dirty"||t.value==="dirty"?is(u.value):u});{if(t.value==="aborted")return Je;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?Je:o.status==="dirty"||t.value==="dirty"?is(o.value):o}}if(r.type==="refinement"){const a=o=>{const u=r.refinement(o,s);if(i.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Je:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?Je:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ys(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>Ys(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);Et.assertNever(r)}}ri.create=(n,e,t)=>new ri({schema:n,typeName:Ye.ZodEffects,effect:e,...rt(t)});ri.createWithPreprocess=(n,e,t)=>new ri({schema:e,effect:{type:"preprocess",transform:n},typeName:Ye.ZodEffects,...rt(t)});class mi extends lt{_parse(e){return this._getType(e)===Ie.undefined?yn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}mi.create=(n,e)=>new mi({innerType:n,typeName:Ye.ZodOptional,...rt(e)});class lr extends lt{_parse(e){return this._getType(e)===Ie.null?yn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}lr.create=(n,e)=>new lr({innerType:n,typeName:Ye.ZodNullable,...rt(e)});class ra extends lt{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===Ie.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ra.create=(n,e)=>new ra({innerType:n,typeName:Ye.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...rt(e)});class sa extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Zs(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Un(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Un(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}sa.create=(n,e)=>new sa({innerType:n,typeName:Ye.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...rt(e)});class ho extends lt{_parse(e){if(this._getType(e)!==Ie.nan){const i=this._getOrReturnCtx(e);return be(i,{code:pe.invalid_type,expected:Ie.nan,received:i.parsedType}),Je}return{status:"valid",value:e.data}}}ho.create=n=>new ho({typeName:Ye.ZodNaN,...rt(n)});const Vh=Symbol("zod_brand");class Mc extends lt{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class ha extends lt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Je:s.status==="dirty"?(t.dirty(),is(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?Je:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new ha({in:e,out:t,typeName:Ye.ZodPipeline})}}class aa extends lt{_parse(e){const t=this._def.innerType._parse(e),i=r=>(Ys(r)&&(r.value=Object.freeze(r.value)),r);return Zs(t)?t.then(r=>i(r)):i(t)}unwrap(){return this._def.innerType}}aa.create=(n,e)=>new aa({innerType:n,typeName:Ye.ZodReadonly,...rt(e)});function yc(n,e={},t){return n?us.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,u=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,l=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...l,fatal:u})}}):us.create()}const Hh={object:Wt.lazycreate};var Ye;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ye||(Ye={}));const zh=(n,e={message:`Input not instance of ${n.name}`})=>yc(t=>t instanceof n,e),H=ti.create,He=sr.create,Wh=ho.create,Gf=ar.create,$e=Ks.create,Xh=Ar.create,qh=co.create,Yh=$s.create,yo=Js.create,Zh=us.create,oa=Tr.create,Kh=ki.create,$h=uo.create,xt=ii.create,ge=Wt.create,Jh=Wt.strictCreate,Tc=Qs.create,Qh=Mo.create,jh=js.create,ep=Ei.create,tp=ea.create,np=fo.create,ip=wr.create,rp=rs.create,sp=ta.create,Kt=na.create,ap=or.create,vs=ia.create,op=fs.create,pu=ri.create,kf=mi.create,lp=lr.create,Vf=ri.createWithPreprocess,cp=ha.create,up=()=>H().optional(),fp=()=>He().optional(),dp=()=>$e().optional(),hp={string:(n=>ti.create({...n,coerce:!0})),number:(n=>sr.create({...n,coerce:!0})),boolean:(n=>Ks.create({...n,coerce:!0})),bigint:(n=>ar.create({...n,coerce:!0})),date:(n=>Ar.create({...n,coerce:!0}))},pp=Je;var U=Object.freeze({__proto__:null,defaultErrorMap:cs,setErrorMap:Th,getErrorMap:ao,makeIssue:oo,EMPTY_PATH:bh,addIssueToContext:be,ParseStatus:mn,INVALID:Je,DIRTY:is,OK:yn,isAborted:Tl,isDirty:bl,isValid:Ys,isAsync:Zs,get util(){return Et},get objectUtil(){return yl},ZodParsedType:Ie,getParsedType:tr,ZodType:lt,datetimeRegex:Ff,ZodString:ti,ZodNumber:sr,ZodBigInt:ar,ZodBoolean:Ks,ZodDate:Ar,ZodSymbol:co,ZodUndefined:$s,ZodNull:Js,ZodAny:us,ZodUnknown:Tr,ZodNever:ki,ZodVoid:uo,ZodArray:ii,ZodObject:Wt,ZodUnion:Qs,ZodDiscriminatedUnion:Mo,ZodIntersection:js,ZodTuple:Ei,ZodRecord:ea,ZodMap:fo,ZodSet:wr,ZodFunction:rs,ZodLazy:ta,ZodLiteral:na,ZodEnum:or,ZodNativeEnum:ia,ZodPromise:fs,ZodEffects:ri,ZodTransformer:ri,ZodOptional:mi,ZodNullable:lr,ZodDefault:ra,ZodCatch:sa,ZodNaN:ho,BRAND:Vh,ZodBranded:Mc,ZodPipeline:ha,ZodReadonly:aa,custom:yc,Schema:lt,ZodSchema:lt,late:Hh,get ZodFirstPartyTypeKind(){return Ye},coerce:hp,any:Zh,array:xt,bigint:Gf,boolean:$e,date:Xh,discriminatedUnion:Qh,effect:pu,enum:ap,function:rp,instanceof:zh,intersection:jh,lazy:sp,literal:Kt,map:np,nan:Wh,nativeEnum:vs,never:Kh,null:yo,nullable:lp,number:He,object:ge,oboolean:dp,onumber:fp,optional:kf,ostring:up,pipeline:cp,preprocess:Vf,promise:op,record:tp,set:ip,strictObject:Jh,string:H,symbol:qh,transformer:pu,tuple:ep,undefined:Yh,union:Tc,unknown:oa,void:$h,NEVER:pp,ZodIssueCode:pe,quotelessJson:yh,ZodError:Un}),Vo={exports:{}},mu;function mp(){return mu||(mu=1,(function(n){var e=(function(t){var i=1e7,r=7,s=9007199254740992,a=x(s),o="0123456789abcdefghijklmnopqrstuvwxyz",u=typeof BigInt=="function";function l(d,c,E,T){return typeof d>"u"?l[0]:typeof c<"u"?+c==10&&!E?Ue(d):Ft(d,c,E,T):Ue(d)}function f(d,c){this.value=d,this.sign=c,this.isSmall=!1}f.prototype=Object.create(l.prototype);function h(d){this.value=d,this.sign=d<0,this.isSmall=!0}h.prototype=Object.create(l.prototype);function p(d){this.value=d}p.prototype=Object.create(l.prototype);function m(d){return-s<d&&d<s}function x(d){return d<1e7?[d]:d<1e14?[d%1e7,Math.floor(d/1e7)]:[d%1e7,Math.floor(d/1e7)%1e7,Math.floor(d/1e14)]}function b(d){_(d);var c=d.length;if(c<4&&_e(d,a)<0)switch(c){case 0:return 0;case 1:return d[0];case 2:return d[0]+d[1]*i;default:return d[0]+(d[1]+d[2]*i)*i}return d}function _(d){for(var c=d.length;d[--c]===0;);d.length=c+1}function g(d){for(var c=new Array(d),E=-1;++E<d;)c[E]=0;return c}function I(d){return d>0?Math.floor(d):Math.ceil(d)}function D(d,c){var E=d.length,T=c.length,N=new Array(E),C=0,z=i,L,B;for(B=0;B<T;B++)L=d[B]+c[B]+C,C=L>=z?1:0,N[B]=L-C*z;for(;B<E;)L=d[B]+C,C=L===z?1:0,N[B++]=L-C*z;return C>0&&N.push(C),N}function y(d,c){return d.length>=c.length?D(d,c):D(c,d)}function P(d,c){var E=d.length,T=new Array(E),N=i,C,z;for(z=0;z<E;z++)C=d[z]-N+c,c=Math.floor(C/N),T[z]=C-c*N,c+=1;for(;c>0;)T[z++]=c%N,c=Math.floor(c/N);return T}f.prototype.add=function(d){var c=Ue(d);if(this.sign!==c.sign)return this.subtract(c.negate());var E=this.value,T=c.value;return c.isSmall?new f(P(E,Math.abs(T)),this.sign):new f(y(E,T),this.sign)},f.prototype.plus=f.prototype.add,h.prototype.add=function(d){var c=Ue(d),E=this.value;if(E<0!==c.sign)return this.subtract(c.negate());var T=c.value;if(c.isSmall){if(m(E+T))return new h(E+T);T=x(Math.abs(T))}return new f(P(T,Math.abs(E)),E<0)},h.prototype.plus=h.prototype.add,p.prototype.add=function(d){return new p(this.value+Ue(d).value)},p.prototype.plus=p.prototype.add;function A(d,c){var E=d.length,T=c.length,N=new Array(E),C=0,z=i,L,B;for(L=0;L<T;L++)B=d[L]-C-c[L],B<0?(B+=z,C=1):C=0,N[L]=B;for(L=T;L<E;L++){if(B=d[L]-C,B<0)B+=z;else{N[L++]=B;break}N[L]=B}for(;L<E;L++)N[L]=d[L];return _(N),N}function R(d,c,E){var T;return _e(d,c)>=0?T=A(d,c):(T=A(c,d),E=!E),T=b(T),typeof T=="number"?(E&&(T=-T),new h(T)):new f(T,E)}function v(d,c,E){var T=d.length,N=new Array(T),C=-c,z=i,L,B;for(L=0;L<T;L++)B=d[L]+C,C=Math.floor(B/z),B%=z,N[L]=B<0?B+z:B;return N=b(N),typeof N=="number"?(E&&(N=-N),new h(N)):new f(N,E)}f.prototype.subtract=function(d){var c=Ue(d);if(this.sign!==c.sign)return this.add(c.negate());var E=this.value,T=c.value;return c.isSmall?v(E,Math.abs(T),this.sign):R(E,T,this.sign)},f.prototype.minus=f.prototype.subtract,h.prototype.subtract=function(d){var c=Ue(d),E=this.value;if(E<0!==c.sign)return this.add(c.negate());var T=c.value;return c.isSmall?new h(E-T):v(T,Math.abs(E),E>=0)},h.prototype.minus=h.prototype.subtract,p.prototype.subtract=function(d){return new p(this.value-Ue(d).value)},p.prototype.minus=p.prototype.subtract,f.prototype.negate=function(){return new f(this.value,!this.sign)},h.prototype.negate=function(){var d=this.sign,c=new h(-this.value);return c.sign=!d,c},p.prototype.negate=function(){return new p(-this.value)},f.prototype.abs=function(){return new f(this.value,!1)},h.prototype.abs=function(){return new h(Math.abs(this.value))},p.prototype.abs=function(){return new p(this.value>=0?this.value:-this.value)};function w(d,c){var E=d.length,T=c.length,N=E+T,C=g(N),z=i,L,B,ne,he,se;for(ne=0;ne<E;++ne){he=d[ne];for(var le=0;le<T;++le)se=c[le],L=he*se+C[ne+le],B=Math.floor(L/z),C[ne+le]=L-B*z,C[ne+le+1]+=B}return _(C),C}function G(d,c){var E=d.length,T=new Array(E),N=i,C=0,z,L;for(L=0;L<E;L++)z=d[L]*c+C,C=Math.floor(z/N),T[L]=z-C*N;for(;C>0;)T[L++]=C%N,C=Math.floor(C/N);return T}function F(d,c){for(var E=[];c-- >0;)E.push(0);return E.concat(d)}function k(d,c){var E=Math.max(d.length,c.length);if(E<=30)return w(d,c);E=Math.ceil(E/2);var T=d.slice(E),N=d.slice(0,E),C=c.slice(E),z=c.slice(0,E),L=k(N,z),B=k(T,C),ne=k(y(N,T),y(z,C)),he=y(y(L,F(A(A(ne,L),B),E)),F(B,2*E));return _(he),he}function j(d,c){return-.012*d-.012*c+15e-6*d*c>0}f.prototype.multiply=function(d){var c=Ue(d),E=this.value,T=c.value,N=this.sign!==c.sign,C;if(c.isSmall){if(T===0)return l[0];if(T===1)return this;if(T===-1)return this.negate();if(C=Math.abs(T),C<i)return new f(G(E,C),N);T=x(C)}return j(E.length,T.length)?new f(k(E,T),N):new f(w(E,T),N)},f.prototype.times=f.prototype.multiply;function re(d,c,E){return d<i?new f(G(c,d),E):new f(w(c,x(d)),E)}h.prototype._multiplyBySmall=function(d){return m(d.value*this.value)?new h(d.value*this.value):re(Math.abs(d.value),x(Math.abs(this.value)),this.sign!==d.sign)},f.prototype._multiplyBySmall=function(d){return d.value===0?l[0]:d.value===1?this:d.value===-1?this.negate():re(Math.abs(d.value),this.value,this.sign!==d.sign)},h.prototype.multiply=function(d){return Ue(d)._multiplyBySmall(this)},h.prototype.times=h.prototype.multiply,p.prototype.multiply=function(d){return new p(this.value*Ue(d).value)},p.prototype.times=p.prototype.multiply;function Z(d){var c=d.length,E=g(c+c),T=i,N,C,z,L,B;for(z=0;z<c;z++){L=d[z],C=0-L*L;for(var ne=z;ne<c;ne++)B=d[ne],N=2*(L*B)+E[z+ne]+C,C=Math.floor(N/T),E[z+ne]=N-C*T;E[z+c]=C}return _(E),E}f.prototype.square=function(){return new f(Z(this.value),!1)},h.prototype.square=function(){var d=this.value*this.value;return m(d)?new h(d):new f(Z(x(Math.abs(this.value))),!1)},p.prototype.square=function(d){return new p(this.value*this.value)};function te(d,c){var E=d.length,T=c.length,N=i,C=g(c.length),z=c[T-1],L=Math.ceil(N/(2*z)),B=G(d,L),ne=G(c,L),he,se,le,we,Ne,Ze,V;for(B.length<=E&&B.push(0),ne.push(0),z=ne[T-1],se=E-T;se>=0;se--){for(he=N-1,B[se+T]!==z&&(he=Math.floor((B[se+T]*N+B[se+T-1])/z)),le=0,we=0,Ze=ne.length,Ne=0;Ne<Ze;Ne++)le+=he*ne[Ne],V=Math.floor(le/N),we+=B[se+Ne]-(le-V*N),le=V,we<0?(B[se+Ne]=we+N,we=-1):(B[se+Ne]=we,we=0);for(;we!==0;){for(he-=1,le=0,Ne=0;Ne<Ze;Ne++)le+=B[se+Ne]-N+ne[Ne],le<0?(B[se+Ne]=le+N,le=0):(B[se+Ne]=le,le=1);we+=le}C[se]=he}return B=oe(B,L)[0],[b(C),b(B)]}function J(d,c){for(var E=d.length,T=c.length,N=[],C=[],z=i,L,B,ne,he,se;E;){if(C.unshift(d[--E]),_(C),_e(C,c)<0){N.push(0);continue}B=C.length,ne=C[B-1]*z+C[B-2],he=c[T-1]*z+c[T-2],B>T&&(ne=(ne+1)*z),L=Math.ceil(ne/he);do{if(se=G(c,L),_e(se,C)<=0)break;L--}while(L);N.push(L),C=A(C,se)}return N.reverse(),[b(N),b(C)]}function oe(d,c){var E=d.length,T=g(E),N=i,C,z,L,B;for(L=0,C=E-1;C>=0;--C)B=L*N+d[C],z=I(B/c),L=B-z*c,T[C]=z|0;return[T,L|0]}function fe(d,c){var E,T=Ue(c);if(u)return[new p(d.value/T.value),new p(d.value%T.value)];var N=d.value,C=T.value,z;if(C===0)throw new Error("Cannot divide by zero");if(d.isSmall)return T.isSmall?[new h(I(N/C)),new h(N%C)]:[l[0],d];if(T.isSmall){if(C===1)return[d,l[0]];if(C==-1)return[d.negate(),l[0]];var L=Math.abs(C);if(L<i){E=oe(N,L),z=b(E[0]);var B=E[1];return d.sign&&(B=-B),typeof z=="number"?(d.sign!==T.sign&&(z=-z),[new h(z),new h(B)]):[new f(z,d.sign!==T.sign),new h(B)]}C=x(L)}var ne=_e(N,C);if(ne===-1)return[l[0],d];if(ne===0)return[l[d.sign===T.sign?1:-1],l[0]];N.length+C.length<=200?E=te(N,C):E=J(N,C),z=E[0];var he=d.sign!==T.sign,se=E[1],le=d.sign;return typeof z=="number"?(he&&(z=-z),z=new h(z)):z=new f(z,he),typeof se=="number"?(le&&(se=-se),se=new h(se)):se=new f(se,le),[z,se]}f.prototype.divmod=function(d){var c=fe(this,d);return{quotient:c[0],remainder:c[1]}},p.prototype.divmod=h.prototype.divmod=f.prototype.divmod,f.prototype.divide=function(d){return fe(this,d)[0]},p.prototype.over=p.prototype.divide=function(d){return new p(this.value/Ue(d).value)},h.prototype.over=h.prototype.divide=f.prototype.over=f.prototype.divide,f.prototype.mod=function(d){return fe(this,d)[1]},p.prototype.mod=p.prototype.remainder=function(d){return new p(this.value%Ue(d).value)},h.prototype.remainder=h.prototype.mod=f.prototype.remainder=f.prototype.mod,f.prototype.pow=function(d){var c=Ue(d),E=this.value,T=c.value,N,C,z;if(T===0)return l[1];if(E===0)return l[0];if(E===1)return l[1];if(E===-1)return c.isEven()?l[1]:l[-1];if(c.sign)return l[0];if(!c.isSmall)throw new Error("The exponent "+c.toString()+" is too large.");if(this.isSmall&&m(N=Math.pow(E,T)))return new h(I(N));for(C=this,z=l[1];T&!0&&(z=z.times(C),--T),T!==0;)T/=2,C=C.square();return z},h.prototype.pow=f.prototype.pow,p.prototype.pow=function(d){var c=Ue(d),E=this.value,T=c.value,N=BigInt(0),C=BigInt(1),z=BigInt(2);if(T===N)return l[1];if(E===N)return l[0];if(E===C)return l[1];if(E===BigInt(-1))return c.isEven()?l[1]:l[-1];if(c.isNegative())return new p(N);for(var L=this,B=l[1];(T&C)===C&&(B=B.times(L),--T),T!==N;)T/=z,L=L.square();return B},f.prototype.modPow=function(d,c){if(d=Ue(d),c=Ue(c),c.isZero())throw new Error("Cannot take modPow with modulus 0");var E=l[1],T=this.mod(c);for(d.isNegative()&&(d=d.multiply(l[-1]),T=T.modInv(c));d.isPositive();){if(T.isZero())return l[0];d.isOdd()&&(E=E.multiply(T).mod(c)),d=d.divide(2),T=T.square().mod(c)}return E},p.prototype.modPow=h.prototype.modPow=f.prototype.modPow;function _e(d,c){if(d.length!==c.length)return d.length>c.length?1:-1;for(var E=d.length-1;E>=0;E--)if(d[E]!==c[E])return d[E]>c[E]?1:-1;return 0}f.prototype.compareAbs=function(d){var c=Ue(d),E=this.value,T=c.value;return c.isSmall?1:_e(E,T)},h.prototype.compareAbs=function(d){var c=Ue(d),E=Math.abs(this.value),T=c.value;return c.isSmall?(T=Math.abs(T),E===T?0:E>T?1:-1):-1},p.prototype.compareAbs=function(d){var c=this.value,E=Ue(d).value;return c=c>=0?c:-c,E=E>=0?E:-E,c===E?0:c>E?1:-1},f.prototype.compare=function(d){if(d===1/0)return-1;if(d===-1/0)return 1;var c=Ue(d),E=this.value,T=c.value;return this.sign!==c.sign?c.sign?1:-1:c.isSmall?this.sign?-1:1:_e(E,T)*(this.sign?-1:1)},f.prototype.compareTo=f.prototype.compare,h.prototype.compare=function(d){if(d===1/0)return-1;if(d===-1/0)return 1;var c=Ue(d),E=this.value,T=c.value;return c.isSmall?E==T?0:E>T?1:-1:E<0!==c.sign?E<0?-1:1:E<0?1:-1},h.prototype.compareTo=h.prototype.compare,p.prototype.compare=function(d){if(d===1/0)return-1;if(d===-1/0)return 1;var c=this.value,E=Ue(d).value;return c===E?0:c>E?1:-1},p.prototype.compareTo=p.prototype.compare,f.prototype.equals=function(d){return this.compare(d)===0},p.prototype.eq=p.prototype.equals=h.prototype.eq=h.prototype.equals=f.prototype.eq=f.prototype.equals,f.prototype.notEquals=function(d){return this.compare(d)!==0},p.prototype.neq=p.prototype.notEquals=h.prototype.neq=h.prototype.notEquals=f.prototype.neq=f.prototype.notEquals,f.prototype.greater=function(d){return this.compare(d)>0},p.prototype.gt=p.prototype.greater=h.prototype.gt=h.prototype.greater=f.prototype.gt=f.prototype.greater,f.prototype.lesser=function(d){return this.compare(d)<0},p.prototype.lt=p.prototype.lesser=h.prototype.lt=h.prototype.lesser=f.prototype.lt=f.prototype.lesser,f.prototype.greaterOrEquals=function(d){return this.compare(d)>=0},p.prototype.geq=p.prototype.greaterOrEquals=h.prototype.geq=h.prototype.greaterOrEquals=f.prototype.geq=f.prototype.greaterOrEquals,f.prototype.lesserOrEquals=function(d){return this.compare(d)<=0},p.prototype.leq=p.prototype.lesserOrEquals=h.prototype.leq=h.prototype.lesserOrEquals=f.prototype.leq=f.prototype.lesserOrEquals,f.prototype.isEven=function(){return(this.value[0]&1)===0},h.prototype.isEven=function(){return(this.value&1)===0},p.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},f.prototype.isOdd=function(){return(this.value[0]&1)===1},h.prototype.isOdd=function(){return(this.value&1)===1},p.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},f.prototype.isPositive=function(){return!this.sign},h.prototype.isPositive=function(){return this.value>0},p.prototype.isPositive=h.prototype.isPositive,f.prototype.isNegative=function(){return this.sign},h.prototype.isNegative=function(){return this.value<0},p.prototype.isNegative=h.prototype.isNegative,f.prototype.isUnit=function(){return!1},h.prototype.isUnit=function(){return Math.abs(this.value)===1},p.prototype.isUnit=function(){return this.abs().value===BigInt(1)},f.prototype.isZero=function(){return!1},h.prototype.isZero=function(){return this.value===0},p.prototype.isZero=function(){return this.value===BigInt(0)},f.prototype.isDivisibleBy=function(d){var c=Ue(d);return c.isZero()?!1:c.isUnit()?!0:c.compareAbs(2)===0?this.isEven():this.mod(c).isZero()},p.prototype.isDivisibleBy=h.prototype.isDivisibleBy=f.prototype.isDivisibleBy;function Ee(d){var c=d.abs();if(c.isUnit())return!1;if(c.equals(2)||c.equals(3)||c.equals(5))return!0;if(c.isEven()||c.isDivisibleBy(3)||c.isDivisibleBy(5))return!1;if(c.lesser(49))return!0}function Re(d,c){for(var E=d.prev(),T=E,N=0,C,z,L;T.isEven();)T=T.divide(2),N++;e:for(z=0;z<c.length;z++)if(!d.lesser(c[z])&&(L=e(c[z]).modPow(T,d),!(L.isUnit()||L.equals(E)))){for(C=N-1;C!=0;C--){if(L=L.square().mod(d),L.isUnit())return!1;if(L.equals(E))continue e}return!1}return!0}f.prototype.isPrime=function(d){var c=Ee(this);if(c!==t)return c;var E=this.abs(),T=E.bitLength();if(T<=64)return Re(E,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var N=Math.log(2)*T.toJSNumber(),C=Math.ceil(d===!0?2*Math.pow(N,2):N),z=[],L=0;L<C;L++)z.push(e(L+2));return Re(E,z)},p.prototype.isPrime=h.prototype.isPrime=f.prototype.isPrime,f.prototype.isProbablePrime=function(d,c){var E=Ee(this);if(E!==t)return E;for(var T=this.abs(),N=d===t?5:d,C=[],z=0;z<N;z++)C.push(e.randBetween(2,T.minus(2),c));return Re(T,C)},p.prototype.isProbablePrime=h.prototype.isProbablePrime=f.prototype.isProbablePrime,f.prototype.modInv=function(d){for(var c=e.zero,E=e.one,T=Ue(d),N=this.abs(),C,z,L;!N.isZero();)C=T.divide(N),z=c,L=T,c=E,T=N,E=z.subtract(C.multiply(E)),N=L.subtract(C.multiply(N));if(!T.isUnit())throw new Error(this.toString()+" and "+d.toString()+" are not co-prime");return c.compare(0)===-1&&(c=c.add(d)),this.isNegative()?c.negate():c},p.prototype.modInv=h.prototype.modInv=f.prototype.modInv,f.prototype.next=function(){var d=this.value;return this.sign?v(d,1,this.sign):new f(P(d,1),this.sign)},h.prototype.next=function(){var d=this.value;return d+1<s?new h(d+1):new f(a,!1)},p.prototype.next=function(){return new p(this.value+BigInt(1))},f.prototype.prev=function(){var d=this.value;return this.sign?new f(P(d,1),!0):v(d,1,this.sign)},h.prototype.prev=function(){var d=this.value;return d-1>-s?new h(d-1):new f(a,!0)},p.prototype.prev=function(){return new p(this.value-BigInt(1))};for(var nt=[1];2*nt[nt.length-1]<=i;)nt.push(2*nt[nt.length-1]);var Mt=nt.length,st=nt[Mt-1];function ae(d){return Math.abs(d)<=i}f.prototype.shiftLeft=function(d){var c=Ue(d).toJSNumber();if(!ae(c))throw new Error(String(c)+" is too large for shifting.");if(c<0)return this.shiftRight(-c);var E=this;if(E.isZero())return E;for(;c>=Mt;)E=E.multiply(st),c-=Mt-1;return E.multiply(nt[c])},p.prototype.shiftLeft=h.prototype.shiftLeft=f.prototype.shiftLeft,f.prototype.shiftRight=function(d){var c,E=Ue(d).toJSNumber();if(!ae(E))throw new Error(String(E)+" is too large for shifting.");if(E<0)return this.shiftLeft(-E);for(var T=this;E>=Mt;){if(T.isZero()||T.isNegative()&&T.isUnit())return T;c=fe(T,st),T=c[1].isNegative()?c[0].prev():c[0],E-=Mt-1}return c=fe(T,nt[E]),c[1].isNegative()?c[0].prev():c[0]},p.prototype.shiftRight=h.prototype.shiftRight=f.prototype.shiftRight;function ue(d,c,E){c=Ue(c);for(var T=d.isNegative(),N=c.isNegative(),C=T?d.not():d,z=N?c.not():c,L=0,B=0,ne=null,he=null,se=[];!C.isZero()||!z.isZero();)ne=fe(C,st),L=ne[1].toJSNumber(),T&&(L=st-1-L),he=fe(z,st),B=he[1].toJSNumber(),N&&(B=st-1-B),C=ne[0],z=he[0],se.push(E(L,B));for(var le=E(T?1:0,N?1:0)!==0?e(-1):e(0),we=se.length-1;we>=0;we-=1)le=le.multiply(st).add(e(se[we]));return le}f.prototype.not=function(){return this.negate().prev()},p.prototype.not=h.prototype.not=f.prototype.not,f.prototype.and=function(d){return ue(this,d,function(c,E){return c&E})},p.prototype.and=h.prototype.and=f.prototype.and,f.prototype.or=function(d){return ue(this,d,function(c,E){return c|E})},p.prototype.or=h.prototype.or=f.prototype.or,f.prototype.xor=function(d){return ue(this,d,function(c,E){return c^E})},p.prototype.xor=h.prototype.xor=f.prototype.xor;var de=1<<30,Xe=(i&-i)*(i&-i)|de;function ze(d){var c=d.value,E=typeof c=="number"?c|de:typeof c=="bigint"?c|BigInt(de):c[0]+c[1]*i|Xe;return E&-E}function We(d,c){if(c.compareTo(d)<=0){var E=We(d,c.square(c)),T=E.p,N=E.e,C=T.multiply(c);return C.compareTo(d)<=0?{p:C,e:N*2+1}:{p:T,e:N*2}}return{p:e(1),e:0}}f.prototype.bitLength=function(){var d=this;return d.compareTo(e(0))<0&&(d=d.negate().subtract(e(1))),d.compareTo(e(0))===0?e(0):e(We(d,e(2)).e).add(e(1))},p.prototype.bitLength=h.prototype.bitLength=f.prototype.bitLength;function Pt(d,c){return d=Ue(d),c=Ue(c),d.greater(c)?d:c}function it(d,c){return d=Ue(d),c=Ue(c),d.lesser(c)?d:c}function St(d,c){if(d=Ue(d).abs(),c=Ue(c).abs(),d.equals(c))return d;if(d.isZero())return c;if(c.isZero())return d;for(var E=l[1],T,N;d.isEven()&&c.isEven();)T=it(ze(d),ze(c)),d=d.divide(T),c=c.divide(T),E=E.multiply(T);for(;d.isEven();)d=d.divide(ze(d));do{for(;c.isEven();)c=c.divide(ze(c));d.greater(c)&&(N=c,c=d,d=N),c=c.subtract(d)}while(!c.isZero());return E.isUnit()?d:d.multiply(E)}function dt(d,c){return d=Ue(d).abs(),c=Ue(c).abs(),d.divide(St(d,c)).multiply(c)}function ct(d,c,E){d=Ue(d),c=Ue(c);var T=E||Math.random,N=it(d,c),C=Pt(d,c),z=C.subtract(N).add(1);if(z.isSmall)return N.add(Math.floor(T()*z));for(var L=Lt(z,i).value,B=[],ne=!0,he=0;he<L.length;he++){var se=ne?L[he]+(he+1<L.length?L[he+1]/i:0):i,le=I(T()*se);B.push(le),le<L[he]&&(ne=!1)}return N.add(l.fromArray(B,i,!1))}var Ft=function(d,c,E,T){E=E||o,d=String(d),T||(d=d.toLowerCase(),E=E.toLowerCase());var N=d.length,C,z=Math.abs(c),L={};for(C=0;C<E.length;C++)L[E[C]]=C;for(C=0;C<N;C++){var B=d[C];if(B!=="-"&&B in L&&L[B]>=z){if(B==="1"&&z===1)continue;throw new Error(B+" is not a valid digit in base "+c+".")}}c=Ue(c);var ne=[],he=d[0]==="-";for(C=he?1:0;C<d.length;C++){var B=d[C];if(B in L)ne.push(Ue(L[B]));else if(B==="<"){var se=C;do C++;while(d[C]!==">"&&C<d.length);ne.push(Ue(d.slice(se+1,C)))}else throw new Error(B+" is not a valid character")}return Bt(ne,c,he)};function Bt(d,c,E){var T=l[0],N=l[1],C;for(C=d.length-1;C>=0;C--)T=T.add(d[C].times(N)),N=N.times(c);return E?T.negate():T}function Yt(d,c){return c=c||o,d<c.length?c[d]:"<"+d+">"}function Lt(d,c){if(c=e(c),c.isZero()){if(d.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(c.equals(-1)){if(d.isZero())return{value:[0],isNegative:!1};if(d.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-d.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var E=Array.apply(null,Array(d.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return E.unshift([1]),{value:[].concat.apply([],E),isNegative:!1}}var T=!1;if(d.isNegative()&&c.isPositive()&&(T=!0,d=d.abs()),c.isUnit())return d.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(d.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:T};for(var N=[],C=d,z;C.isNegative()||C.compareAbs(c)>=0;){z=C.divmod(c),C=z.quotient;var L=z.remainder;L.isNegative()&&(L=c.minus(L).abs(),C=C.next()),N.push(L.toJSNumber())}return N.push(C.toJSNumber()),{value:N.reverse(),isNegative:T}}function Nt(d,c,E){var T=Lt(d,c);return(T.isNegative?"-":"")+T.value.map(function(N){return Yt(N,E)}).join("")}f.prototype.toArray=function(d){return Lt(this,d)},h.prototype.toArray=function(d){return Lt(this,d)},p.prototype.toArray=function(d){return Lt(this,d)},f.prototype.toString=function(d,c){if(d===t&&(d=10),d!==10||c)return Nt(this,d,c);for(var E=this.value,T=E.length,N=String(E[--T]),C="0000000",z;--T>=0;)z=String(E[T]),N+=C.slice(z.length)+z;var L=this.sign?"-":"";return L+N},h.prototype.toString=function(d,c){return d===t&&(d=10),d!=10||c?Nt(this,d,c):String(this.value)},p.prototype.toString=h.prototype.toString,p.prototype.toJSON=f.prototype.toJSON=h.prototype.toJSON=function(){return this.toString()},f.prototype.valueOf=function(){return parseInt(this.toString(),10)},f.prototype.toJSNumber=f.prototype.valueOf,h.prototype.valueOf=function(){return this.value},h.prototype.toJSNumber=h.prototype.valueOf,p.prototype.valueOf=p.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function Ct(d){if(m(+d)){var c=+d;if(c===I(c))return u?new p(BigInt(c)):new h(c);throw new Error("Invalid integer: "+d)}var E=d[0]==="-";E&&(d=d.slice(1));var T=d.split(/e/i);if(T.length>2)throw new Error("Invalid integer: "+T.join("e"));if(T.length===2){var N=T[1];if(N[0]==="+"&&(N=N.slice(1)),N=+N,N!==I(N)||!m(N))throw new Error("Invalid integer: "+N+" is not a valid exponent.");var C=T[0],z=C.indexOf(".");if(z>=0&&(N-=C.length-z-1,C=C.slice(0,z)+C.slice(z+1)),N<0)throw new Error("Cannot include negative exponent part for integers");C+=new Array(N+1).join("0"),d=C}var L=/^([0-9][0-9]*)$/.test(d);if(!L)throw new Error("Invalid integer: "+d);if(u)return new p(BigInt(E?"-"+d:d));for(var B=[],ne=d.length,he=r,se=ne-he;ne>0;)B.push(+d.slice(se,ne)),se-=he,se<0&&(se=0),ne-=he;return _(B),new f(B,E)}function W(d){if(u)return new p(BigInt(d));if(m(d)){if(d!==I(d))throw new Error(d+" is not an integer.");return new h(d)}return Ct(d.toString())}function Ue(d){return typeof d=="number"?W(d):typeof d=="string"?Ct(d):typeof d=="bigint"?new p(d):d}for(var at=0;at<1e3;at++)l[at]=Ue(at),at>0&&(l[-at]=Ue(-at));return l.one=l[1],l.zero=l[0],l.minusOne=l[-1],l.max=Pt,l.min=it,l.gcd=St,l.lcm=dt,l.isInstance=function(d){return d instanceof f||d instanceof h||d instanceof p},l.randBetween=ct,l.fromArray=function(d,c,E){return Bt(d.map(Ue),Ue(c||10),E)},l})();n.hasOwnProperty("exports")&&(n.exports=e)})(Vo)),Vo.exports}var _p=mp(),gp=Df(_p);const Hf=64,wl=16,nr=Hf/wl;function vp(){try{return!0}catch{return!1}}function xp(n,e,t){let i=0;for(let r=0;r<t;r++){const s=n[e+r];if(s===void 0)break;i+=s*16**r}return i}function zf(n){const e=[];for(let t=0;t<n.length;t++){let i=Number(n[t]);for(let r=0;i||r<e.length;r++)i+=(e[r]||0)*10,e[r]=i%16,i=(i-e[r])/16}return e}function Ep(n){const e=zf(n),t=Array(nr);for(let i=0;i<nr;i++)t[nr-1-i]=xp(e,i*nr,nr);return t}class ci{static fromString(e){return new ci(Ep(e),e)}static fromBit(e){const t=Array(nr),i=Math.floor(e/wl);for(let r=0;r<nr;r++)t[nr-1-r]=r===i?1<<e-i*wl:0;return new ci(t)}constructor(e,t){this.parts=e,this.str=t}and({parts:e}){return new ci(this.parts.map((t,i)=>t&e[i]))}or({parts:e}){return new ci(this.parts.map((t,i)=>t|e[i]))}xor({parts:e}){return new ci(this.parts.map((t,i)=>t^e[i]))}not(){return new ci(this.parts.map(e=>~e))}equals({parts:e}){return this.parts.every((t,i)=>t===e[i])}toString(){if(this.str!=null)return this.str;const e=new Array(Hf/4);return this.parts.forEach((t,i)=>{const r=zf(t.toString());for(let s=0;s<4;s++)e[s+i*4]=r[3-s]||0}),this.str=gp.fromArray(e,16).toString()}toJSON(){return this.toString()}}const dr=vp();dr&&BigInt.prototype.toJSON==null&&(BigInt.prototype.toJSON=function(){return this.toString()});const Ia={},Wf=dr?function(e){return BigInt(e)}:function(e){return e instanceof ci?e:(typeof e=="number"&&(e=e.toString()),Ia[e]!=null||(Ia[e]=ci.fromString(e)),Ia[e])},on=Wf(0),To=dr?function(e=on,t=on){return e&t}:function(e=on,t=on){return e.and(t)},Xf=dr?function(e=on,t=on){return e|t}:function(e=on,t=on){return e.or(t)},Sp=dr?function(e=on,t=on){return e^t}:function(e=on,t=on){return e.xor(t)},Mp=dr?function(e=on){return~e}:function(e=on){return e.not()},bc=dr?function(e,t){return e===t}:function(e,t){return e==null||t==null?e==t:e.equals(t)};function yp(...n){let e=n[0];for(let t=1;t<n.length;t++)e=Xf(e,n[t]);return e}function Tp(n,e){return bc(To(n,e),e)}function bp(n,e){return!bc(To(n,e),on)}function Ap(n,e){return e===on?n:Xf(n,e)}function wp(n,e){return e===on?n:Sp(n,To(n,e))}const Rp=dr?function(e){return BigInt(1)<<BigInt(e)}:function(e){return ci.fromBit(e)};var qe={combine:yp,add:Ap,remove:wp,filter:To,invert:Mp,has:Tp,hasAny:bp,equals:bc,deserialize:Wf,getFlag:Rp},_u;(function(n){n[n.CLOSE_NORMAL=1e3]="CLOSE_NORMAL",n[n.CLOSE_UNSUPPORTED=1003]="CLOSE_UNSUPPORTED",n[n.CLOSE_ABNORMAL=1006]="CLOSE_ABNORMAL",n[n.INVALID_CLIENTID=4e3]="INVALID_CLIENTID",n[n.INVALID_ORIGIN=4001]="INVALID_ORIGIN",n[n.RATELIMITED=4002]="RATELIMITED",n[n.TOKEN_REVOKED=4003]="TOKEN_REVOKED",n[n.INVALID_VERSION=4004]="INVALID_VERSION",n[n.INVALID_ENCODING=4005]="INVALID_ENCODING"})(_u||(_u={}));var Rl;(function(n){n[n.INVALID_PAYLOAD=4e3]="INVALID_PAYLOAD",n[n.INVALID_COMMAND=4002]="INVALID_COMMAND",n[n.INVALID_GUILD=4003]="INVALID_GUILD",n[n.INVALID_EVENT=4004]="INVALID_EVENT",n[n.INVALID_CHANNEL=4005]="INVALID_CHANNEL",n[n.INVALID_PERMISSIONS=4006]="INVALID_PERMISSIONS",n[n.INVALID_CLIENTID=4007]="INVALID_CLIENTID",n[n.INVALID_ORIGIN=4008]="INVALID_ORIGIN",n[n.INVALID_TOKEN=4009]="INVALID_TOKEN",n[n.INVALID_USER=4010]="INVALID_USER"})(Rl||(Rl={}));var Il;(function(n){n.LANDSCAPE="landscape",n.PORTRAIT="portrait"})(Il||(Il={}));var Ci;(function(n){n.MOBILE="mobile",n.DESKTOP="desktop"})(Ci||(Ci={}));Object.freeze({CREATE_INSTANT_INVITE:qe.getFlag(0),KICK_MEMBERS:qe.getFlag(1),BAN_MEMBERS:qe.getFlag(2),ADMINISTRATOR:qe.getFlag(3),MANAGE_CHANNELS:qe.getFlag(4),MANAGE_GUILD:qe.getFlag(5),ADD_REACTIONS:qe.getFlag(6),VIEW_AUDIT_LOG:qe.getFlag(7),PRIORITY_SPEAKER:qe.getFlag(8),STREAM:qe.getFlag(9),VIEW_CHANNEL:qe.getFlag(10),SEND_MESSAGES:qe.getFlag(11),SEND_TTS_MESSAGES:qe.getFlag(12),MANAGE_MESSAGES:qe.getFlag(13),EMBED_LINKS:qe.getFlag(14),ATTACH_FILES:qe.getFlag(15),READ_MESSAGE_HISTORY:qe.getFlag(16),MENTION_EVERYONE:qe.getFlag(17),USE_EXTERNAL_EMOJIS:qe.getFlag(18),VIEW_GUILD_INSIGHTS:qe.getFlag(19),CONNECT:qe.getFlag(20),SPEAK:qe.getFlag(21),MUTE_MEMBERS:qe.getFlag(22),DEAFEN_MEMBERS:qe.getFlag(23),MOVE_MEMBERS:qe.getFlag(24),USE_VAD:qe.getFlag(25),CHANGE_NICKNAME:qe.getFlag(26),MANAGE_NICKNAMES:qe.getFlag(27),MANAGE_ROLES:qe.getFlag(28),MANAGE_WEBHOOKS:qe.getFlag(29),MANAGE_GUILD_EXPRESSIONS:qe.getFlag(30),USE_APPLICATION_COMMANDS:qe.getFlag(31),REQUEST_TO_SPEAK:qe.getFlag(32),MANAGE_EVENTS:qe.getFlag(33),MANAGE_THREADS:qe.getFlag(34),CREATE_PUBLIC_THREADS:qe.getFlag(35),CREATE_PRIVATE_THREADS:qe.getFlag(36),USE_EXTERNAL_STICKERS:qe.getFlag(37),SEND_MESSAGES_IN_THREADS:qe.getFlag(38),USE_EMBEDDED_ACTIVITIES:qe.getFlag(39),MODERATE_MEMBERS:qe.getFlag(40),VIEW_CREATOR_MONETIZATION_ANALYTICS:qe.getFlag(41),USE_SOUNDBOARD:qe.getFlag(42),CREATE_GUILD_EXPRESSIONS:qe.getFlag(43),CREATE_EVENTS:qe.getFlag(44),USE_EXTERNAL_SOUNDS:qe.getFlag(45),SEND_VOICE_MESSAGES:qe.getFlag(46),SEND_POLLS:qe.getFlag(49),USE_EXTERNAL_APPS:qe.getFlag(50)});const gu=-1,Ip=250;function _n(n){return Vf(e=>{var t;const[i]=(t=Object.entries(n).find(([,r])=>r===e))!==null&&t!==void 0?t:[];return e!=null&&i===void 0?n.UNHANDLED:e},H().or(He()))}function qf(n){const e=yc().transform(t=>{const i=n.safeParse(t);return i.success?i.data:n._def.defaultValue()});return e.overlayType=n,e}const Pp=U.object({image_url:U.string()}).describe('Response for "INITIATE_IMAGE_UPLOAD" Command'),Np=U.object({mediaUrl:U.string().max(1024)}).describe('Request for "OPEN_SHARE_MOMENT_DIALOG" Command'),Dp=U.object({access_token:U.union([U.string(),U.null()]).optional()}).describe('Request for "AUTHENTICATE" Command'),Yf=U.object({access_token:U.string(),user:U.object({username:U.string(),discriminator:U.string(),id:U.string(),avatar:U.union([U.string(),U.null()]).optional(),public_flags:U.number(),global_name:U.union([U.string(),U.null()]).optional()}),scopes:U.array(qf(U.enum(["identify","identify.premium","email","connections","guilds","guilds.join","guilds.members.read","guilds.channels.read","gdm.join","bot","rpc","rpc.notifications.read","rpc.voice.read","rpc.voice.write","rpc.video.read","rpc.video.write","rpc.screenshare.read","rpc.screenshare.write","rpc.activities.write","webhook.incoming","messages.read","applications.builds.upload","applications.builds.read","applications.commands","applications.commands.permissions.update","applications.commands.update","applications.store.update","applications.entitlements","activities.read","activities.write","activities.invites.write","relationships.read","relationships.write","voice","dm_channels.read","role_connections.write","presences.read","presences.write","openid","dm_channels.messages.read","dm_channels.messages.write","gateway.connect","account.global_name.update","payment_sources.country_code","sdk.social_layer_presence","sdk.social_layer","lobbies.write","application_identities.write"]).or(U.literal(-1)).default(-1))),expires:U.string(),application:U.object({description:U.string(),icon:U.union([U.string(),U.null()]).optional(),id:U.string(),rpc_origins:U.array(U.string()).optional(),name:U.string()})}).describe('Response for "AUTHENTICATE" Command'),Zf=U.object({participants:U.array(U.object({id:U.string(),username:U.string(),global_name:U.union([U.string(),U.null()]).optional(),discriminator:U.string(),avatar:U.union([U.string(),U.null()]).optional(),flags:U.number(),bot:U.boolean(),avatar_decoration_data:U.union([U.object({asset:U.union([U.string(),U.null()]).optional(),skuId:U.string().optional(),expiresAt:U.number().optional()}),U.null()]).optional(),premium_type:U.union([U.number(),U.null()]).optional(),nickname:U.string().optional()}))}).describe('Response for "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS" Command'),Lp=U.object({command:U.string(),options:U.array(U.object({name:U.string(),value:U.string()})).optional(),content:U.string().max(2e3).optional(),require_launch_channel:U.boolean().optional(),preview_image:U.object({height:U.number(),url:U.string(),width:U.number()}).optional(),components:U.array(U.object({type:U.literal(1),components:U.array(U.object({type:U.literal(2),style:U.number().gte(1).lte(5),label:U.string().max(80).optional(),custom_id:U.string().max(100).describe("Developer-defined identifier for the button; max 100 characters").optional()})).max(5).optional()})).optional(),pid:U.number().optional()}).describe('Request for "SHARE_INTERACTION" Command'),Cp=U.object({success:U.boolean()}).describe('Response for "SHARE_INTERACTION" Command'),Up=U.object({custom_id:U.string().max(64).optional(),message:U.string().max(1e3),link_id:U.string().max(64).optional()}).describe('Request for "SHARE_LINK" Command'),Op=U.object({success:U.boolean(),didCopyLink:U.boolean(),didSendMessage:U.boolean()}).describe('Response for "SHARE_LINK" Command'),Kf=U.object({relationships:U.array(U.object({type:U.number(),user:U.object({id:U.string(),username:U.string(),global_name:U.union([U.string(),U.null()]).optional(),discriminator:U.string(),avatar:U.union([U.string(),U.null()]).optional(),flags:U.number(),bot:U.boolean(),avatar_decoration_data:U.union([U.object({asset:U.union([U.string(),U.null()]).optional(),skuId:U.string().optional(),expiresAt:U.number().optional()}),U.null()]).optional(),premium_type:U.union([U.number(),U.null()]).optional()}),presence:U.object({status:U.string(),activity:U.union([U.object({session_id:U.string().optional(),type:U.number().optional(),name:U.string(),url:U.union([U.string(),U.null()]).optional(),application_id:U.string().optional(),status_display_type:U.number().optional(),state:U.string().optional(),state_url:U.string().optional(),details:U.string().optional(),details_url:U.string().optional(),emoji:U.union([U.object({name:U.string(),id:U.union([U.string(),U.null()]).optional(),animated:U.union([U.boolean(),U.null()]).optional()}),U.null()]).optional(),assets:U.object({large_image:U.string().optional(),large_text:U.string().optional(),large_url:U.string().optional(),small_image:U.string().optional(),small_text:U.string().optional(),small_url:U.string().optional()}).optional(),timestamps:U.object({start:U.number().optional(),end:U.number().optional()}).optional(),party:U.object({id:U.string().optional(),size:U.array(U.number()).min(2).max(2).optional(),privacy:U.number().optional()}).optional(),secrets:U.object({match:U.string().optional(),join:U.string().optional()}).optional(),sync_id:U.string().optional(),created_at:U.number().optional(),instance:U.boolean().optional(),flags:U.number().optional(),metadata:U.object({}).optional(),platform:U.string().optional(),supported_platforms:U.array(U.string()).optional(),buttons:U.array(U.string()).optional(),hangStatus:U.string().optional()}),U.null()]).optional()}).optional()}))}).describe('Response for "GET_RELATIONSHIPS" Command'),Fp=U.object({user_id:U.string(),content:U.string().min(0).max(1024).optional()}).describe('Request for "INVITE_USER_EMBEDDED" Command'),Bp=U.object({id:U.string().max(64)}).describe('Request for "GET_USER" Command'),Gp=U.union([U.object({id:U.string(),username:U.string(),global_name:U.union([U.string(),U.null()]).optional(),discriminator:U.string(),avatar:U.union([U.string(),U.null()]).optional(),flags:U.number(),bot:U.boolean(),avatar_decoration_data:U.union([U.object({asset:U.union([U.string(),U.null()]).optional(),skuId:U.string().optional(),expiresAt:U.number().optional()}),U.null()]).optional(),premium_type:U.union([U.number(),U.null()]).optional()}),U.null()]),kp=U.object({quest_id:U.string()}).describe('Request for "GET_QUEST_ENROLLMENT_STATUS" Command'),Vp=U.object({quest_id:U.string(),is_enrolled:U.boolean(),enrolled_at:U.union([U.string(),U.null()]).optional()}).describe('Response for "GET_QUEST_ENROLLMENT_STATUS" Command'),Hp=U.object({quest_id:U.string()}).describe('Request for "QUEST_START_TIMER" Command'),zp=U.object({success:U.boolean()}).describe('Response for "QUEST_START_TIMER" Command'),Wp=U.object({quest_id:U.string(),enrolled_at:U.union([U.string(),U.null()]).optional(),completed_at:U.union([U.string(),U.null()]).optional(),external_cta_url:U.string()}).describe('Response for "GET_QUEST" Command'),Xp=U.object({ticket:U.string()}).describe('Response for "REQUEST_PROXY_TICKET_REFRESH" Command');var It;(function(n){n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.AUTHENTICATE="AUTHENTICATE",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.SHARE_INTERACTION="SHARE_INTERACTION",n.SHARE_LINK="SHARE_LINK",n.GET_RELATIONSHIPS="GET_RELATIONSHIPS",n.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED",n.GET_USER="GET_USER",n.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS",n.QUEST_START_TIMER="QUEST_START_TIMER",n.GET_QUEST="GET_QUEST",n.REQUEST_PROXY_TICKET_REFRESH="REQUEST_PROXY_TICKET_REFRESH"})(It||(It={}));const vu=U.object({}).optional().nullable(),Ps=U.void(),$f={[It.INITIATE_IMAGE_UPLOAD]:{request:Ps,response:Pp},[It.OPEN_SHARE_MOMENT_DIALOG]:{request:Np,response:vu},[It.AUTHENTICATE]:{request:Dp,response:Yf},[It.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]:{request:Ps,response:Zf},[It.SHARE_INTERACTION]:{request:Lp,response:Cp},[It.SHARE_LINK]:{request:Up,response:Op},[It.GET_RELATIONSHIPS]:{request:Ps,response:Kf},[It.INVITE_USER_EMBEDDED]:{request:Fp,response:vu},[It.GET_USER]:{request:Bp,response:Gp},[It.GET_QUEST_ENROLLMENT_STATUS]:{request:kp,response:Vp},[It.QUEST_START_TIMER]:{request:Hp,response:zp},[It.GET_QUEST]:{request:Ps,response:Wp},[It.REQUEST_PROXY_TICKET_REFRESH]:{request:Ps,response:Xp}},qp="DISPATCH";var Ce;(function(n){n.AUTHORIZE="AUTHORIZE",n.GET_GUILDS="GET_GUILDS",n.GET_GUILD="GET_GUILD",n.GET_CHANNEL="GET_CHANNEL",n.GET_CHANNELS="GET_CHANNELS",n.SELECT_VOICE_CHANNEL="SELECT_VOICE_CHANNEL",n.SELECT_TEXT_CHANNEL="SELECT_TEXT_CHANNEL",n.SUBSCRIBE="SUBSCRIBE",n.UNSUBSCRIBE="UNSUBSCRIBE",n.CAPTURE_SHORTCUT="CAPTURE_SHORTCUT",n.SET_CERTIFIED_DEVICES="SET_CERTIFIED_DEVICES",n.SET_ACTIVITY="SET_ACTIVITY",n.GET_SKUS="GET_SKUS",n.GET_ENTITLEMENTS="GET_ENTITLEMENTS",n.GET_SKUS_EMBEDDED="GET_SKUS_EMBEDDED",n.GET_ENTITLEMENTS_EMBEDDED="GET_ENTITLEMENTS_EMBEDDED",n.START_PURCHASE="START_PURCHASE",n.SET_CONFIG="SET_CONFIG",n.SEND_ANALYTICS_EVENT="SEND_ANALYTICS_EVENT",n.USER_SETTINGS_GET_LOCALE="USER_SETTINGS_GET_LOCALE",n.OPEN_EXTERNAL_LINK="OPEN_EXTERNAL_LINK",n.ENCOURAGE_HW_ACCELERATION="ENCOURAGE_HW_ACCELERATION",n.CAPTURE_LOG="CAPTURE_LOG",n.SET_ORIENTATION_LOCK_STATE="SET_ORIENTATION_LOCK_STATE",n.OPEN_INVITE_DIALOG="OPEN_INVITE_DIALOG",n.GET_PLATFORM_BEHAVIORS="GET_PLATFORM_BEHAVIORS",n.GET_CHANNEL_PERMISSIONS="GET_CHANNEL_PERMISSIONS",n.AUTHENTICATE="AUTHENTICATE",n.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",n.GET_QUEST="GET_QUEST",n.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS",n.GET_RELATIONSHIPS="GET_RELATIONSHIPS",n.GET_USER="GET_USER",n.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD",n.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED",n.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG",n.QUEST_START_TIMER="QUEST_START_TIMER",n.REQUEST_PROXY_TICKET_REFRESH="REQUEST_PROXY_TICKET_REFRESH",n.SHARE_INTERACTION="SHARE_INTERACTION",n.SHARE_LINK="SHARE_LINK"})(Ce||(Ce={}));const xs=ge({cmd:H(),data:oa(),evt:yo(),nonce:H()}).passthrough(),Yp=Object.assign(Object.assign({},Yf.shape.scopes.element.overlayType._def.innerType.options[0].Values),{UNHANDLED:-1});_n(Yp);const Zp=Kf.shape.relationships.element,cr=ge({id:H(),username:H(),discriminator:H(),global_name:H().optional().nullable(),avatar:H().optional().nullable(),avatar_decoration_data:ge({asset:H(),sku_id:H().optional()}).nullable(),bot:$e(),flags:He().optional().nullable(),premium_type:He().optional().nullable()}),Ac=ge({user:cr,nick:H().optional().nullable(),roles:xt(H()),joined_at:H(),deaf:$e(),mute:$e()}),Kp=ge({user_id:H(),nick:H().optional().nullable(),guild_id:H(),avatar:H().optional().nullable(),avatar_decoration_data:ge({asset:H(),sku_id:H().optional().nullable()}).optional().nullable(),color_string:H().optional().nullable()}),wc=ge({id:H(),name:H().optional().nullable(),roles:xt(H()).optional().nullable(),user:cr.optional().nullable(),require_colons:$e().optional().nullable(),managed:$e().optional().nullable(),animated:$e().optional().nullable(),available:$e().optional().nullable()}),Jf=ge({mute:$e(),deaf:$e(),self_mute:$e(),self_deaf:$e(),suppress:$e()}),Qf=ge({mute:$e(),nick:H(),user:cr,voice_state:Jf,volume:He()}),$p={UNHANDLED:-1,IDLE:"idle",DND:"dnd",ONLINE:"online",OFFLINE:"offline"},Pa=_n($p),Ws=ge({name:H(),type:He(),url:H().optional().nullable(),created_at:He().optional().nullable(),timestamps:ge({start:He(),end:He()}).partial().optional().nullable(),application_id:H().optional().nullable(),details:H().optional().nullable(),details_url:H().url().optional().nullable(),state:H().optional().nullable(),state_url:H().url().optional().nullable(),emoji:wc.optional().nullable(),party:ge({id:H().optional().nullable(),size:xt(He()).optional().nullable()}).optional().nullable(),assets:ge({large_image:H().nullable(),large_text:H().nullable(),large_url:H().url().optional().nullable(),small_image:H().nullable(),small_text:H().nullable(),small_url:H().url().optional().nullable()}).partial().optional().nullable(),secrets:ge({join:H(),match:H()}).partial().optional().nullable(),instance:$e().optional().nullable(),flags:He().optional().nullable()}),Jp={UNHANDLED:-1,ROLE:0,MEMBER:1},Qp=ge({id:H(),type:_n(Jp),allow:H(),deny:H()}),jf={UNHANDLED:-1,DM:1,GROUP_DM:3,GUILD_TEXT:0,GUILD_VOICE:2,GUILD_CATEGORY:4,GUILD_ANNOUNCEMENT:5,GUILD_STORE:6,ANNOUNCEMENT_THREAD:10,PUBLIC_THREAD:11,PRIVATE_THREAD:12,GUILD_STAGE_VOICE:13,GUILD_DIRECTORY:14,GUILD_FORUM:15},ed=ge({id:H(),type:_n(jf),guild_id:H().optional().nullable(),position:He().optional().nullable(),permission_overwrites:xt(Qp).optional().nullable(),name:H().optional().nullable(),topic:H().optional().nullable(),nsfw:$e().optional().nullable(),last_message_id:H().optional().nullable(),bitrate:He().optional().nullable(),user_limit:He().optional().nullable(),rate_limit_per_user:He().optional().nullable(),recipients:xt(cr).optional().nullable(),icon:H().optional().nullable(),owner_id:H().optional().nullable(),application_id:H().optional().nullable(),parent_id:H().optional().nullable(),last_pin_timestamp:H().optional().nullable()}),jp=ge({user:cr,guild_id:H(),status:Pa,activities:xt(Ws),client_status:ge({desktop:Pa,mobile:Pa,web:Pa}).partial()}),em=ge({id:H(),name:H(),color:He(),hoist:$e(),position:He(),permissions:H(),managed:$e(),mentionable:$e()});ge({id:H(),name:H(),owner_id:H(),icon:H().nullable(),icon_hash:H().optional().nullable(),splash:H().nullable(),discovery_splash:H().nullable(),owner:$e().optional().nullable(),permissions:H().optional().nullable(),region:H(),afk_channel_id:H().nullable(),afk_timeout:He(),widget_enabled:$e().optional().nullable(),widget_channel_id:H().optional().nullable(),verification_level:He(),default_message_notifications:He(),explicit_content_filter:He(),roles:xt(em),emojis:xt(wc),features:xt(H()),mfa_level:He(),application_id:H().nullable(),system_channel_id:H().nullable(),system_channel_flags:He(),rules_channel_id:H().nullable(),joined_at:H().optional().nullable(),large:$e().optional().nullable(),unavailable:$e().optional().nullable(),member_count:He().optional().nullable(),voice_states:xt(Jf).optional().nullable(),members:xt(Ac).optional().nullable(),channels:xt(ed).optional().nullable(),presences:xt(jp).optional().nullable(),max_presences:He().optional().nullable(),max_members:He().optional().nullable(),vanity_url_code:H().nullable(),description:H().nullable(),banner:H().nullable(),premium_tier:He(),premium_subscription_count:He().optional().nullable(),preferred_locale:H(),public_updates_channel_id:H().nullable(),max_video_channel_users:He().optional().nullable(),approximate_member_count:He().optional().nullable(),approximate_presence_count:He().optional().nullable()});const tm=ge({id:H(),guild_id:H(),type:He(),name:H()}),nm=ge({id:H(),filename:H(),size:He(),url:H(),proxy_url:H(),height:He().optional().nullable(),width:He().optional().nullable()}),im=ge({text:H(),icon_url:H().optional().nullable(),proxy_icon_url:H().optional().nullable()}),Pl=ge({url:H().optional().nullable(),proxy_url:H().optional().nullable(),height:He().optional().nullable(),width:He().optional().nullable()}),rm=Pl.omit({proxy_url:!0}),sm=ge({name:H().optional().nullable(),url:H().optional().nullable()}),am=ge({name:H().optional().nullable(),url:H().optional().nullable(),icon_url:H().optional().nullable(),proxy_icon_url:H().optional().nullable()}),om=ge({name:H(),value:H(),inline:$e()}),lm=ge({title:H().optional().nullable(),type:H().optional().nullable(),description:H().optional().nullable(),url:H().optional().nullable(),timestamp:H().optional().nullable(),color:He().optional().nullable(),footer:im.optional().nullable(),image:Pl.optional().nullable(),thumbnail:Pl.optional().nullable(),video:rm.optional().nullable(),provider:sm.optional().nullable(),author:am.optional().nullable(),fields:xt(om).optional().nullable()}),cm=ge({count:He(),me:$e(),emoji:wc}),um=ge({type:He(),party_id:H().optional().nullable()}),fm=ge({id:H(),cover_image:H().optional().nullable(),description:H(),icon:H().optional().nullable(),name:H()}),dm=ge({message_id:H().optional().nullable(),channel_id:H().optional().nullable(),guild_id:H().optional().nullable()}),hm=ge({id:H(),channel_id:H(),guild_id:H().optional().nullable(),author:cr.optional().nullable(),member:Ac.optional().nullable(),content:H(),timestamp:H(),edited_timestamp:H().optional().nullable(),tts:$e(),mention_everyone:$e(),mentions:xt(cr),mention_roles:xt(H()),mention_channels:xt(tm),attachments:xt(nm),embeds:xt(lm),reactions:xt(cm).optional().nullable(),nonce:Tc([H(),He()]).optional().nullable(),pinned:$e(),webhook_id:H().optional().nullable(),type:He(),activity:um.optional().nullable(),application:fm.optional().nullable(),message_reference:dm.optional().nullable(),flags:He().optional().nullable(),stickers:xt(oa()).optional().nullable(),referenced_message:oa().optional().nullable()}),pm=ge({id:H(),name:H()}),mm={UNHANDLED:-1,KEYBOARD_KEY:0,MOUSE_BUTTON:1,KEYBOARD_MODIFIER_KEY:2,GAMEPAD_BUTTON:3},td=ge({type:_n(mm),code:He(),name:H()}),_m={UNHANDLED:-1,PUSH_TO_TALK:"PUSH_TO_TALK",VOICE_ACTIVITY:"VOICE_ACTIVITY"},gm=ge({type:_n(_m),auto_threshold:$e(),threshold:He(),shortcut:xt(td),delay:He()}),xu=ge({device_id:H(),volume:He(),available_devices:xt(pm)}),vm={UNHANDLED:-1,AUDIO_INPUT:"AUDIO_INPUT",AUDIO_OUTPUT:"AUDIO_OUTPUT",VIDEO_INPUT:"VIDEO_INPUT"};ge({type:_n(vm),id:H(),vendor:ge({name:H(),url:H()}),model:ge({name:H(),url:H()}),related:xt(H()),echo_cancellation:$e().optional().nullable(),noise_suppression:$e().optional().nullable(),automatic_gain_control:$e().optional().nullable(),hardware_mute:$e().optional().nullable()});const xm={UNHANDLED:-1,APPLICATION:1,DLC:2,CONSUMABLE:3,BUNDLE:4,SUBSCRIPTION:5},Em=ge({id:H(),name:H(),type:_n(xm),price:ge({amount:He(),currency:H()}),application_id:H(),flags:He(),release_date:H().nullable()}),Sm={UNHANDLED:-1,PURCHASE:1,PREMIUM_SUBSCRIPTION:2,DEVELOPER_GIFT:3,TEST_MODE_PURCHASE:4,FREE_PURCHASE:5,USER_GIFT:6,PREMIUM_PURCHASE:7},Rc=ge({id:H(),sku_id:H(),application_id:H(),user_id:H(),gift_code_flags:He(),type:_n(Sm),gifter_user_id:H().optional().nullable(),branches:xt(H()).optional().nullable(),starts_at:H().optional().nullable(),ends_at:H().optional().nullable(),parent_id:H().optional().nullable(),consumed:$e().optional().nullable(),deleted:$e().optional().nullable(),gift_code_batch_id:H().optional().nullable()}),Mm={UNHANDLED:-1,UNLOCKED:1,PORTRAIT:2,LANDSCAPE:3};_n(Mm);const ym={UNHANDLED:-1,NOMINAL:0,FAIR:1,SERIOUS:2,CRITICAL:3},Tm=_n(ym),nd={UNHANDLED:-1,PORTRAIT:0,LANDSCAPE:1};_n(nd);const id={UNHANDLED:-1,FOCUSED:0,PIP:1,GRID:2};_n(id);const Ic="ERROR";var ft;(function(n){n.READY="READY",n.VOICE_STATE_UPDATE="VOICE_STATE_UPDATE",n.SPEAKING_START="SPEAKING_START",n.SPEAKING_STOP="SPEAKING_STOP",n.ACTIVITY_LAYOUT_MODE_UPDATE="ACTIVITY_LAYOUT_MODE_UPDATE",n.ORIENTATION_UPDATE="ORIENTATION_UPDATE",n.CURRENT_USER_UPDATE="CURRENT_USER_UPDATE",n.CURRENT_GUILD_MEMBER_UPDATE="CURRENT_GUILD_MEMBER_UPDATE",n.ENTITLEMENT_CREATE="ENTITLEMENT_CREATE",n.THERMAL_STATE_UPDATE="THERMAL_STATE_UPDATE",n.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE="ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",n.RELATIONSHIP_UPDATE="RELATIONSHIP_UPDATE",n.ACTIVITY_JOIN="ACTIVITY_JOIN",n.QUEST_ENROLLMENT_STATUS_UPDATE="QUEST_ENROLLMENT_STATUS_UPDATE"})(ft||(ft={}));const hn=xs.extend({evt:vs(ft),nonce:H().nullable(),cmd:Kt(qp),data:ge({}).passthrough()}),rd=xs.extend({evt:Kt(Ic),data:ge({code:He(),message:H().optional()}).passthrough(),cmd:vs(Ce),nonce:H().nullable()}),bm=hn.extend({evt:H()}),Am=Tc([hn,bm,rd]);function wm(n){const e=n.evt;if(!(e in ft))throw new Error(`Unrecognized event type ${n.evt}`);return Rm[e].payload.parse(n)}const Rm={[ft.READY]:{payload:hn.extend({evt:Kt(ft.READY),data:ge({v:He(),config:ge({cdn_host:H().optional(),api_endpoint:H(),environment:H()}),user:ge({id:H(),username:H(),discriminator:H(),avatar:H().optional()}).optional()})})},[ft.VOICE_STATE_UPDATE]:{payload:hn.extend({evt:Kt(ft.VOICE_STATE_UPDATE),data:Qf}),subscribeArgs:ge({channel_id:H()})},[ft.SPEAKING_START]:{payload:hn.extend({evt:Kt(ft.SPEAKING_START),data:ge({lobby_id:H().optional(),channel_id:H().optional(),user_id:H()})}),subscribeArgs:ge({lobby_id:H().nullable().optional(),channel_id:H().nullable().optional()})},[ft.SPEAKING_STOP]:{payload:hn.extend({evt:Kt(ft.SPEAKING_STOP),data:ge({lobby_id:H().optional(),channel_id:H().optional(),user_id:H()})}),subscribeArgs:ge({lobby_id:H().nullable().optional(),channel_id:H().nullable().optional()})},[ft.ACTIVITY_LAYOUT_MODE_UPDATE]:{payload:hn.extend({evt:Kt(ft.ACTIVITY_LAYOUT_MODE_UPDATE),data:ge({layout_mode:_n(id)})})},[ft.ORIENTATION_UPDATE]:{payload:hn.extend({evt:Kt(ft.ORIENTATION_UPDATE),data:ge({screen_orientation:_n(nd),orientation:vs(Il)})})},[ft.CURRENT_USER_UPDATE]:{payload:hn.extend({evt:Kt(ft.CURRENT_USER_UPDATE),data:cr})},[ft.CURRENT_GUILD_MEMBER_UPDATE]:{payload:hn.extend({evt:Kt(ft.CURRENT_GUILD_MEMBER_UPDATE),data:Kp}),subscribeArgs:ge({guild_id:H()})},[ft.ENTITLEMENT_CREATE]:{payload:hn.extend({evt:Kt(ft.ENTITLEMENT_CREATE),data:ge({entitlement:Rc})})},[ft.THERMAL_STATE_UPDATE]:{payload:hn.extend({evt:Kt(ft.THERMAL_STATE_UPDATE),data:ge({thermal_state:Tm})})},[ft.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]:{payload:hn.extend({evt:Kt(ft.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),data:ge({participants:Zf.shape.participants})})},[ft.RELATIONSHIP_UPDATE]:{payload:hn.extend({evt:Kt(ft.RELATIONSHIP_UPDATE),data:Zp})},[ft.ACTIVITY_JOIN]:{payload:hn.extend({evt:Kt(ft.ACTIVITY_JOIN),data:ge({applicationId:H(),secret:H()})})},[ft.QUEST_ENROLLMENT_STATUS_UPDATE]:{payload:hn.extend({evt:Kt(ft.QUEST_ENROLLMENT_STATUS_UPDATE),data:ge({quest_id:H(),is_enrolled:$e(),enrolled_at:H().date()})})}};function Im(n,e){throw e}const bo=ge({}).nullable(),sd=ge({code:H()}),Pm=ge({guilds:xt(ge({id:H(),name:H()}))}),Nm=ge({id:H(),name:H(),icon_url:H().optional(),members:xt(Ac)}),ds=ge({id:H(),type:_n(jf),guild_id:H().optional().nullable(),name:H().optional().nullable(),topic:H().optional().nullable(),bitrate:He().optional().nullable(),user_limit:He().optional().nullable(),position:He().optional().nullable(),voice_states:xt(Qf),messages:xt(hm)}),Dm=ge({channels:xt(ed)});ds.nullable();const Lm=ds.nullable(),Cm=ds.nullable();ge({input:xu,output:xu,mode:gm,automatic_gain_control:$e(),echo_cancellation:$e(),noise_suppression:$e(),qos:$e(),silence_warning:$e(),deaf:$e(),mute:$e()});const Um=ge({evt:H()}),Om=ge({shortcut:td}),ad=Ws,od=ge({skus:xt(Em)}),ld=ge({entitlements:xt(Rc)}),cd=xt(Rc).nullable(),ud=ge({use_interactive_pip:$e()}),fd=ge({locale:H()}),dd=ge({enabled:$e()}),hd=ge({permissions:Gf().or(H())}),pd=qf(ge({opened:$e().or(yo())}).default({opened:null})),md=ge({iosKeyboardResizesView:kf($e())}),Fm=xs.extend({cmd:vs(Ce),evt:yo()});function Bm({cmd:n,data:e}){switch(n){case Ce.AUTHORIZE:return sd.parse(e);case Ce.CAPTURE_SHORTCUT:return Om.parse(e);case Ce.ENCOURAGE_HW_ACCELERATION:return dd.parse(e);case Ce.GET_CHANNEL:return ds.parse(e);case Ce.GET_CHANNELS:return Dm.parse(e);case Ce.GET_CHANNEL_PERMISSIONS:return hd.parse(e);case Ce.GET_GUILD:return Nm.parse(e);case Ce.GET_GUILDS:return Pm.parse(e);case Ce.GET_PLATFORM_BEHAVIORS:return md.parse(e);case Ce.GET_CHANNEL:return ds.parse(e);case Ce.SELECT_TEXT_CHANNEL:return Cm.parse(e);case Ce.SELECT_VOICE_CHANNEL:return Lm.parse(e);case Ce.SET_ACTIVITY:return ad.parse(e);case Ce.GET_SKUS_EMBEDDED:return od.parse(e);case Ce.GET_ENTITLEMENTS_EMBEDDED:return ld.parse(e);case Ce.SET_CONFIG:return ud.parse(e);case Ce.START_PURCHASE:return cd.parse(e);case Ce.SUBSCRIBE:case Ce.UNSUBSCRIBE:return Um.parse(e);case Ce.USER_SETTINGS_GET_LOCALE:return fd.parse(e);case Ce.OPEN_EXTERNAL_LINK:return pd.parse(e);case Ce.SET_ORIENTATION_LOCK_STATE:case Ce.SET_CERTIFIED_DEVICES:case Ce.SEND_ANALYTICS_EVENT:case Ce.OPEN_INVITE_DIALOG:case Ce.CAPTURE_LOG:case Ce.GET_SKUS:case Ce.GET_ENTITLEMENTS:return bo.parse(e);case Ce.AUTHENTICATE:case Ce.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:case Ce.GET_QUEST:case Ce.GET_QUEST_ENROLLMENT_STATUS:case Ce.GET_RELATIONSHIPS:case Ce.GET_USER:case Ce.INITIATE_IMAGE_UPLOAD:case Ce.INVITE_USER_EMBEDDED:case Ce.OPEN_SHARE_MOMENT_DIALOG:case Ce.QUEST_START_TIMER:case Ce.REQUEST_PROXY_TICKET_REFRESH:case Ce.SHARE_INTERACTION:case Ce.SHARE_LINK:const{response:t}=$f[n];return t.parse(e);default:Im(n,new Error(`Unrecognized command ${n}`))}}function Gm(n){return Object.assign(Object.assign({},n),{data:Bm(n)})}ge({frame_id:H(),platform:vs(Ci).optional().nullable()});ge({v:Kt(1),encoding:Kt("json").optional(),client_id:H(),frame_id:H()});const km=ge({code:He(),message:H().optional()}),Vm=ge({evt:H().nullable(),nonce:H().nullable(),data:oa().nullable(),cmd:H()}).passthrough();function Hm(n){const e=Vm.parse(n);return e.evt!=null?e.evt===Ic?rd.parse(e):wm(Am.parse(e)):Gm(Fm.passthrough().parse(e))}function Pn(n,e,t,i=()=>{}){const r=xs.extend({cmd:Kt(e),data:t});return async s=>{const a=await n({cmd:e,args:s,transfer:i(s)});return r.parse(a).data}}function On(n,e=()=>{}){const t=$f[n].response,i=xs.extend({cmd:Kt(n),data:t});return r=>async s=>{const a=await r({cmd:n,args:s,transfer:e(s)});return i.parse(a).data}}const zm=n=>Pn(n,Ce.AUTHORIZE,sd),Wm=n=>Pn(n,Ce.CAPTURE_LOG,bo),Xm=n=>Pn(n,Ce.ENCOURAGE_HW_ACCELERATION,dd),qm=n=>Pn(n,Ce.GET_CHANNEL,ds),Ym=n=>Pn(n,Ce.GET_ENTITLEMENTS_EMBEDDED,ld),Zm=n=>Pn(n,Ce.GET_SKUS_EMBEDDED,od),Km=n=>Pn(n,Ce.GET_CHANNEL_PERMISSIONS,hd),$m=n=>Pn(n,Ce.GET_PLATFORM_BEHAVIORS,md),Jm=n=>Pn(n,Ce.OPEN_EXTERNAL_LINK,pd),Qm=n=>Pn(n,Ce.OPEN_INVITE_DIALOG,bo);Ws.pick({state:!0,state_url:!0,details:!0,details_url:!0,timestamps:!0,assets:!0,party:!0,secrets:!0,instance:!0,type:!0}).extend({type:Ws.shape.type.optional(),instance:Ws.shape.instance.optional()}).nullable();const jm=n=>Pn(n,Ce.SET_ACTIVITY,ad),e_=n=>Pn(n,Ce.SET_CONFIG,ud);function t_({sendCommand:n,cmd:e,response:t,fallbackTransform:i,transferTransform:r=()=>{}}){const s=xs.extend({cmd:Kt(e),data:t});return async a=>{try{const o=await n({cmd:e,args:a,transfer:r(a)});return s.parse(o).data}catch(o){if(o.code===Rl.INVALID_PAYLOAD){const u=i(a),l=await n({cmd:e,args:u,transfer:r(u)});return s.parse(l).data}else throw o}}}const n_=n=>({lock_state:n.lock_state,picture_in_picture_lock_state:n.picture_in_picture_lock_state}),i_=n=>t_({sendCommand:n,cmd:Ce.SET_ORIENTATION_LOCK_STATE,response:bo,fallbackTransform:n_}),r_=n=>Pn(n,Ce.START_PURCHASE,cd),s_=n=>Pn(n,Ce.USER_SETTINGS_GET_LOCALE,fd),a_=On(It.AUTHENTICATE),Eu=On(It.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS),o_=On(It.GET_QUEST),l_=On(It.GET_QUEST_ENROLLMENT_STATUS),c_=On(It.GET_RELATIONSHIPS),u_=On(It.GET_USER),f_=On(It.INITIATE_IMAGE_UPLOAD),d_=On(It.INVITE_USER_EMBEDDED),h_=On(It.OPEN_SHARE_MOMENT_DIALOG),p_=On(It.QUEST_START_TIMER),m_=On(It.REQUEST_PROXY_TICKET_REFRESH),__=On(It.SHARE_INTERACTION),g_=On(It.SHARE_LINK);function v_(n){return{authorize:zm(n),captureLog:Wm(n),encourageHardwareAcceleration:Xm(n),getChannel:qm(n),getChannelPermissions:Km(n),getEntitlements:Ym(n),getPlatformBehaviors:$m(n),getSkus:Zm(n),openExternalLink:Jm(n),openInviteDialog:Qm(n),setActivity:jm(n),setConfig:e_(n),setOrientationLockState:i_(n),startPurchase:r_(n),userSettingsGetLocale:s_(n),getInstanceConnectedParticipants:Eu(n),authenticate:a_(n),getActivityInstanceConnectedParticipants:Eu(n),getQuest:o_(n),getQuestEnrollmentStatus:l_(n),getRelationships:c_(n),getUser:u_(n),initiateImageUpload:f_(n),inviteUserEmbedded:d_(n),openShareMomentDialog:h_(n),questStartTimer:p_(n),requestProxyTicketRefresh:m_(n),shareInteraction:__(n),shareLink:g_(n)}}class x_ extends Error{constructor(e,t=""){super(t),this.code=e,this.message=t,this.name="Discord SDK Error"}}function E_(){return{disableConsoleLogOverride:!1}}const S_=["log","warn","debug","info","error"];function M_(n,e,t){const i=n[e],r=n;i&&(n[e]=function(){const s=[].slice.call(arguments),a=""+s.join(" ");t(e,a),i.apply(r,s)})}var y_="2.5.0";const T_=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Su={randomUUID:T_};let Ho;const b_=new Uint8Array(16);function A_(){if(!Ho){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ho=crypto.getRandomValues.bind(crypto)}return Ho(b_)}const an=[];for(let n=0;n<256;++n)an.push((n+256).toString(16).slice(1));function w_(n,e=0){return(an[n[e+0]]+an[n[e+1]]+an[n[e+2]]+an[n[e+3]]+"-"+an[n[e+4]]+an[n[e+5]]+"-"+an[n[e+6]]+an[n[e+7]]+"-"+an[n[e+8]]+an[n[e+9]]+"-"+an[n[e+10]]+an[n[e+11]]+an[n[e+12]]+an[n[e+13]]+an[n[e+14]]+an[n[e+15]]).toLowerCase()}function Mu(n,e,t){if(Su.randomUUID&&!n)return Su.randomUUID();n=n||{};const i=n.random??n.rng?.()??A_();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,w_(i)}var Li;(function(n){n[n.HANDSHAKE=0]="HANDSHAKE",n[n.FRAME=1]="FRAME",n[n.CLOSE=2]="CLOSE",n[n.HELLO=3]="HELLO"})(Li||(Li={}));const R_=new Set(I_());function I_(){return typeof window>"u"?[]:[window.location.origin,"https://discord.com","https://discordapp.com","https://ptb.discord.com","https://ptb.discordapp.com","https://canary.discord.com","https://canary.discordapp.com","https://staging.discord.co","http://localhost:3333","https://pax.discord.com","null"]}function P_(){var n;return[(n=window.parent.opener)!==null&&n!==void 0?n:window.parent,document.referrer?document.referrer:"*"]}class N_{getTransfer(e){var t;switch(e.cmd){case Ce.SUBSCRIBE:case Ce.UNSUBSCRIBE:return;default:return(t=e.transfer)!==null&&t!==void 0?t:void 0}}constructor(e,t){if(this.sdkVersion=y_,this.mobileAppVersion=null,this.source=null,this.sourceOrigin="",this.eventBus=new Mh,this.pendingCommands=new Map,this.sendCommand=o=>{var u;if(this.source==null)throw new Error("Attempting to send message before initialization");const l=Mu();return(u=this.source)===null||u===void 0||u.postMessage([Li.FRAME,Object.assign(Object.assign({},o),{nonce:l})],this.sourceOrigin,this.getTransfer(o)),new Promise((h,p)=>{this.pendingCommands.set(l,{resolve:h,reject:p})})},this.commands=v_(this.sendCommand),this.handleMessage=o=>{if(!R_.has(o.origin))return;const u=o.data;if(!Array.isArray(u))return;const[l,f]=u;switch(l){case Li.HELLO:return;case Li.CLOSE:return this.handleClose(f);case Li.HANDSHAKE:return this.handleHandshake();case Li.FRAME:return this.handleFrame(f);default:throw new Error("Invalid message format")}},this.isReady=!1,this.clientId=e,this.configuration=t??E_(),typeof window<"u"&&window.addEventListener("message",this.handleMessage),typeof window>"u"){this.frameId="",this.instanceId="",this.customId=null,this.referrerId=null,this.platform=Ci.DESKTOP,this.guildId=null,this.channelId=null,this.locationId=null;return}const i=new URLSearchParams(this._getSearch()),r=i.get("frame_id");if(!r)throw new Error("frame_id query param is not defined");this.frameId=r;const s=i.get("instance_id");if(!s)throw new Error("instance_id query param is not defined");this.instanceId=s;const a=i.get("platform");if(a){if(a!==Ci.DESKTOP&&a!==Ci.MOBILE)throw new Error(`Invalid query param "platform" of "${a}". Valid values are "${Ci.DESKTOP}" or "${Ci.MOBILE}"`)}else throw new Error("platform query param is not defined");this.platform=a,this.customId=i.get("custom_id"),this.referrerId=i.get("referrer_id"),this.guildId=i.get("guild_id"),this.channelId=i.get("channel_id"),this.locationId=i.get("location_id"),this.mobileAppVersion=i.get("mobile_app_version"),[this.source,this.sourceOrigin]=P_(),this.addOnReadyListener(),this.handshake()}close(e,t){var i;window.removeEventListener("message",this.handleMessage);const r=Mu();(i=this.source)===null||i===void 0||i.postMessage([Li.CLOSE,{code:e,message:t,nonce:r}],this.sourceOrigin)}async subscribe(e,t,...i){const[r]=i,s=this.eventBus.listenerCount(e),a=this.eventBus.on(e,t);return Object.values(ft).includes(e)&&e!==ft.READY&&s===0&&await this.sendCommand({cmd:Ce.SUBSCRIBE,args:r,evt:e}),a}async unsubscribe(e,t,...i){const[r]=i;return e!==ft.READY&&this.eventBus.listenerCount(e)===1&&await this.sendCommand({cmd:Ce.UNSUBSCRIBE,evt:e,args:r}),this.eventBus.off(e,t)}async ready(){this.isReady||await new Promise(e=>{this.eventBus.once(ft.READY,e)})}parseMajorMobileVersion(){if(this.mobileAppVersion&&this.mobileAppVersion.includes("."))try{return parseInt(this.mobileAppVersion.split(".")[0])}catch{return gu}return gu}handshake(){var e;const t={v:1,encoding:"json",client_id:this.clientId,frame_id:this.frameId},i=this.parseMajorMobileVersion();(this.platform===Ci.DESKTOP||i>=Ip)&&(t.sdk_version=this.sdkVersion),(e=this.source)===null||e===void 0||e.postMessage([Li.HANDSHAKE,t],this.sourceOrigin)}addOnReadyListener(){this.eventBus.once(ft.READY,()=>{this.overrideConsoleLogging(),this.isReady=!0})}overrideConsoleLogging(){if(this.configuration.disableConsoleLogOverride)return;const e=(t,i)=>{this.commands.captureLog({level:t,message:i})};S_.forEach(t=>{M_(console,t,e)})}handleClose(e){km.parse(e)}handleHandshake(){}handleFrame(e){var t,i;let r;try{r=Hm(e)}catch(s){console.error("Failed to parse",e),console.error(s);return}if(r.cmd==="DISPATCH")this.eventBus.emit(r.evt,r.data);else{if(r.evt===Ic){if(r.nonce!=null){(t=this.pendingCommands.get(r.nonce))===null||t===void 0||t.reject(r.data),this.pendingCommands.delete(r.nonce);return}this.eventBus.emit("error",new x_(r.data.code,r.data.message))}if(r.nonce==null){console.error("Missing nonce",e);return}(i=this.pendingCommands.get(r.nonce))===null||i===void 0||i.resolve(r),this.pendingCommands.delete(r.nonce)}}_getSearch(){return typeof window>"u"?"":window.location.search}}var Es=1e9,D_={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Sd,kt=!0,Zn="[DecimalError] ",br=Zn+"Invalid argument: ",Pc=Zn+"Exponent out of range: ",Ss=Math.floor,xr=Math.pow,L_=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Ln,sn=1e7,Ot=7,_d=9007199254740991,po=Ss(_d/Ot),De={};De.absoluteValue=De.abs=function(){var n=new this.constructor(this);return n.s&&(n.s=1),n};De.comparedTo=De.cmp=function(n){var e,t,i,r,s=this;if(n=new s.constructor(n),s.s!==n.s)return s.s||-n.s;if(s.e!==n.e)return s.e>n.e^s.s<0?1:-1;for(i=s.d.length,r=n.d.length,e=0,t=i<r?i:r;e<t;++e)if(s.d[e]!==n.d[e])return s.d[e]>n.d[e]^s.s<0?1:-1;return i===r?0:i>r^s.s<0?1:-1};De.decimalPlaces=De.dp=function(){var n=this,e=n.d.length-1,t=(e-n.e)*Ot;if(e=n.d[e],e)for(;e%10==0;e/=10)t--;return t<0?0:t};De.dividedBy=De.div=function(n){return Fi(this,new this.constructor(n))};De.dividedToIntegerBy=De.idiv=function(n){var e=this,t=e.constructor;return Dt(Fi(e,new t(n),0,1),t.precision)};De.equals=De.eq=function(n){return!this.cmp(n)};De.exponent=function(){return jt(this)};De.greaterThan=De.gt=function(n){return this.cmp(n)>0};De.greaterThanOrEqualTo=De.gte=function(n){return this.cmp(n)>=0};De.isInteger=De.isint=function(){return this.e>this.d.length-2};De.isNegative=De.isneg=function(){return this.s<0};De.isPositive=De.ispos=function(){return this.s>0};De.isZero=function(){return this.s===0};De.lessThan=De.lt=function(n){return this.cmp(n)<0};De.lessThanOrEqualTo=De.lte=function(n){return this.cmp(n)<1};De.logarithm=De.log=function(n){var e,t=this,i=t.constructor,r=i.precision,s=r+5;if(n===void 0)n=new i(10);else if(n=new i(n),n.s<1||n.eq(Ln))throw Error(Zn+"NaN");if(t.s<1)throw Error(Zn+(t.s?"NaN":"-Infinity"));return t.eq(Ln)?new i(0):(kt=!1,e=Fi(la(t,s),la(n,s),s),kt=!0,Dt(e,r))};De.minus=De.sub=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?xd(e,n):gd(e,(n.s=-n.s,n))};De.modulo=De.mod=function(n){var e,t=this,i=t.constructor,r=i.precision;if(n=new i(n),!n.s)throw Error(Zn+"NaN");return t.s?(kt=!1,e=Fi(t,n,0,1).times(n),kt=!0,t.minus(e)):Dt(new i(t),r)};De.naturalExponential=De.exp=function(){return vd(this)};De.naturalLogarithm=De.ln=function(){return la(this)};De.negated=De.neg=function(){var n=new this.constructor(this);return n.s=-n.s||0,n};De.plus=De.add=function(n){var e=this;return n=new e.constructor(n),e.s==n.s?gd(e,n):xd(e,(n.s=-n.s,n))};De.precision=De.sd=function(n){var e,t,i,r=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(br+n);if(e=jt(r)+1,i=r.d.length-1,t=i*Ot+1,i=r.d[i],i){for(;i%10==0;i/=10)t--;for(i=r.d[0];i>=10;i/=10)t++}return n&&e>t?e:t};De.squareRoot=De.sqrt=function(){var n,e,t,i,r,s,a,o=this,u=o.constructor;if(o.s<1){if(!o.s)return new u(0);throw Error(Zn+"NaN")}for(n=jt(o),kt=!1,r=Math.sqrt(+o),r==0||r==1/0?(e=di(o.d),(e.length+n)%2==0&&(e+="0"),r=Math.sqrt(e),n=Ss((n+1)/2)-(n<0||n%2),r==1/0?e="5e"+n:(e=r.toExponential(),e=e.slice(0,e.indexOf("e")+1)+n),i=new u(e)):i=new u(r.toString()),t=u.precision,r=a=t+3;;)if(s=i,i=s.plus(Fi(o,s,a+2)).times(.5),di(s.d).slice(0,a)===(e=di(i.d)).slice(0,a)){if(e=e.slice(a-3,a+1),r==a&&e=="4999"){if(Dt(s,t+1,0),s.times(s).eq(o)){i=s;break}}else if(e!="9999")break;a+=4}return kt=!0,Dt(i,t)};De.times=De.mul=function(n){var e,t,i,r,s,a,o,u,l,f=this,h=f.constructor,p=f.d,m=(n=new h(n)).d;if(!f.s||!n.s)return new h(0);for(n.s*=f.s,t=f.e+n.e,u=p.length,l=m.length,u<l&&(s=p,p=m,m=s,a=u,u=l,l=a),s=[],a=u+l,i=a;i--;)s.push(0);for(i=l;--i>=0;){for(e=0,r=u+i;r>i;)o=s[r]+m[i]*p[r-i-1]+e,s[r--]=o%sn|0,e=o/sn|0;s[r]=(s[r]+e)%sn|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),n.d=s,n.e=t,kt?Dt(n,h.precision):n};De.toDecimalPlaces=De.todp=function(n,e){var t=this,i=t.constructor;return t=new i(t),n===void 0?t:(Si(n,0,Es),e===void 0?e=i.rounding:Si(e,0,8),Dt(t,n+jt(t)+1,e))};De.toExponential=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=Rr(i,!0):(Si(n,0,Es),e===void 0?e=r.rounding:Si(e,0,8),i=Dt(new r(i),n+1,e),t=Rr(i,!0,n+1)),t};De.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?Rr(r):(Si(n,0,Es),e===void 0?e=s.rounding:Si(e,0,8),i=Dt(new s(r),n+jt(r)+1,e),t=Rr(i.abs(),!1,n+jt(i)+1),r.isneg()&&!r.isZero()?"-"+t:t)};De.toInteger=De.toint=function(){var n=this,e=n.constructor;return Dt(new e(n),jt(n)+1,e.rounding)};De.toNumber=function(){return+this};De.toPower=De.pow=function(n){var e,t,i,r,s,a,o=this,u=o.constructor,l=12,f=+(n=new u(n));if(!n.s)return new u(Ln);if(o=new u(o),!o.s){if(n.s<1)throw Error(Zn+"Infinity");return o}if(o.eq(Ln))return o;if(i=u.precision,n.eq(Ln))return Dt(o,i);if(e=n.e,t=n.d.length-1,a=e>=t,s=o.s,a){if((t=f<0?-f:f)<=_d){for(r=new u(Ln),e=Math.ceil(i/Ot+4),kt=!1;t%2&&(r=r.times(o),Tu(r.d,e)),t=Ss(t/2),t!==0;)o=o.times(o),Tu(o.d,e);return kt=!0,n.s<0?new u(Ln).div(r):Dt(r,i)}}else if(s<0)throw Error(Zn+"NaN");return s=s<0&&n.d[Math.max(e,t)]&1?-1:1,o.s=1,kt=!1,r=n.times(la(o,i+l)),kt=!0,r=vd(r),r.s=s,r};De.toPrecision=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?(t=jt(r),i=Rr(r,t<=s.toExpNeg||t>=s.toExpPos)):(Si(n,1,Es),e===void 0?e=s.rounding:Si(e,0,8),r=Dt(new s(r),n,e),t=jt(r),i=Rr(r,n<=t||t<=s.toExpNeg,n)),i};De.toSignificantDigits=De.tosd=function(n,e){var t=this,i=t.constructor;return n===void 0?(n=i.precision,e=i.rounding):(Si(n,1,Es),e===void 0?e=i.rounding:Si(e,0,8)),Dt(new i(t),n,e)};De.toString=De.valueOf=De.val=De.toJSON=De[Symbol.for("nodejs.util.inspect.custom")]=function(){var n=this,e=jt(n),t=n.constructor;return Rr(n,e<=t.toExpNeg||e>=t.toExpPos)};function gd(n,e){var t,i,r,s,a,o,u,l,f=n.constructor,h=f.precision;if(!n.s||!e.s)return e.s||(e=new f(n)),kt?Dt(e,h):e;if(u=n.d,l=e.d,a=n.e,r=e.e,u=u.slice(),s=a-r,s){for(s<0?(i=u,s=-s,o=l.length):(i=l,r=a,o=u.length),a=Math.ceil(h/Ot),o=a>o?a+1:o+1,s>o&&(s=o,i.length=1),i.reverse();s--;)i.push(0);i.reverse()}for(o=u.length,s=l.length,o-s<0&&(s=o,i=l,l=u,u=i),t=0;s;)t=(u[--s]=u[s]+l[s]+t)/sn|0,u[s]%=sn;for(t&&(u.unshift(t),++r),o=u.length;u[--o]==0;)u.pop();return e.d=u,e.e=r,kt?Dt(e,h):e}function Si(n,e,t){if(n!==~~n||n<e||n>t)throw Error(br+n)}function di(n){var e,t,i,r=n.length-1,s="",a=n[0];if(r>0){for(s+=a,e=1;e<r;e++)i=n[e]+"",t=Ot-i.length,t&&(s+=ji(t)),s+=i;a=n[e],i=a+"",t=Ot-i.length,t&&(s+=ji(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}var Fi=(function(){function n(i,r){var s,a=0,o=i.length;for(i=i.slice();o--;)s=i[o]*r+a,i[o]=s%sn|0,a=s/sn|0;return a&&i.unshift(a),i}function e(i,r,s,a){var o,u;if(s!=a)u=s>a?1:-1;else for(o=u=0;o<s;o++)if(i[o]!=r[o]){u=i[o]>r[o]?1:-1;break}return u}function t(i,r,s){for(var a=0;s--;)i[s]-=a,a=i[s]<r[s]?1:0,i[s]=a*sn+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,a){var o,u,l,f,h,p,m,x,b,_,g,I,D,y,P,A,R,v,w=i.constructor,G=i.s==r.s?1:-1,F=i.d,k=r.d;if(!i.s)return new w(i);if(!r.s)throw Error(Zn+"Division by zero");for(u=i.e-r.e,R=k.length,P=F.length,m=new w(G),x=m.d=[],l=0;k[l]==(F[l]||0);)++l;if(k[l]>(F[l]||0)&&--u,s==null?I=s=w.precision:a?I=s+(jt(i)-jt(r))+1:I=s,I<0)return new w(0);if(I=I/Ot+2|0,l=0,R==1)for(f=0,k=k[0],I++;(l<P||f)&&I--;l++)D=f*sn+(F[l]||0),x[l]=D/k|0,f=D%k|0;else{for(f=sn/(k[0]+1)|0,f>1&&(k=n(k,f),F=n(F,f),R=k.length,P=F.length),y=R,b=F.slice(0,R),_=b.length;_<R;)b[_++]=0;v=k.slice(),v.unshift(0),A=k[0],k[1]>=sn/2&&++A;do f=0,o=e(k,b,R,_),o<0?(g=b[0],R!=_&&(g=g*sn+(b[1]||0)),f=g/A|0,f>1?(f>=sn&&(f=sn-1),h=n(k,f),p=h.length,_=b.length,o=e(h,b,p,_),o==1&&(f--,t(h,R<p?v:k,p))):(f==0&&(o=f=1),h=k.slice()),p=h.length,p<_&&h.unshift(0),t(b,h,_),o==-1&&(_=b.length,o=e(k,b,R,_),o<1&&(f++,t(b,R<_?v:k,_))),_=b.length):o===0&&(f++,b=[0]),x[l++]=f,o&&b[0]?b[_++]=F[y]||0:(b=[F[y]],_=1);while((y++<P||b[0]!==void 0)&&I--)}return x[0]||x.shift(),m.e=u,Dt(m,a?s+jt(m)+1:s)}})();function vd(n,e){var t,i,r,s,a,o,u=0,l=0,f=n.constructor,h=f.precision;if(jt(n)>16)throw Error(Pc+jt(n));if(!n.s)return new f(Ln);for(kt=!1,o=h,a=new f(.03125);n.abs().gte(.1);)n=n.times(a),l+=5;for(i=Math.log(xr(2,l))/Math.LN10*2+5|0,o+=i,t=r=s=new f(Ln),f.precision=o;;){if(r=Dt(r.times(n),o),t=t.times(++u),a=s.plus(Fi(r,t,o)),di(a.d).slice(0,o)===di(s.d).slice(0,o)){for(;l--;)s=Dt(s.times(s),o);return f.precision=h,e==null?(kt=!0,Dt(s,h)):s}s=a}}function jt(n){for(var e=n.e*Ot,t=n.d[0];t>=10;t/=10)e++;return e}function zo(n,e,t){if(e>n.LN10.sd())throw kt=!0,t&&(n.precision=t),Error(Zn+"LN10 precision limit exceeded");return Dt(new n(n.LN10),e)}function ji(n){for(var e="";n--;)e+="0";return e}function la(n,e){var t,i,r,s,a,o,u,l,f,h=1,p=10,m=n,x=m.d,b=m.constructor,_=b.precision;if(m.s<1)throw Error(Zn+(m.s?"NaN":"-Infinity"));if(m.eq(Ln))return new b(0);if(e==null?(kt=!1,l=_):l=e,m.eq(10))return e==null&&(kt=!0),zo(b,l);if(l+=p,b.precision=l,t=di(x),i=t.charAt(0),s=jt(m),Math.abs(s)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)m=m.times(n),t=di(m.d),i=t.charAt(0),h++;s=jt(m),i>1?(m=new b("0."+t),s++):m=new b(i+"."+t.slice(1))}else return u=zo(b,l+2,_).times(s+""),m=la(new b(i+"."+t.slice(1)),l-p).plus(u),b.precision=_,e==null?(kt=!0,Dt(m,_)):m;for(o=a=m=Fi(m.minus(Ln),m.plus(Ln),l),f=Dt(m.times(m),l),r=3;;){if(a=Dt(a.times(f),l),u=o.plus(Fi(a,new b(r),l)),di(u.d).slice(0,l)===di(o.d).slice(0,l))return o=o.times(2),s!==0&&(o=o.plus(zo(b,l+2,_).times(s+""))),o=Fi(o,new b(h),l),b.precision=_,e==null?(kt=!0,Dt(o,_)):o;o=u,r+=2}}function yu(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;e.charCodeAt(i)===48;)++i;for(r=e.length;e.charCodeAt(r-1)===48;)--r;if(e=e.slice(i,r),e){if(r-=i,t=t-i-1,n.e=Ss(t/Ot),n.d=[],i=(t+1)%Ot,t<0&&(i+=Ot),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=Ot;i<r;)n.d.push(+e.slice(i,i+=Ot));e=e.slice(i),i=Ot-e.length}else i-=r;for(;i--;)e+="0";if(n.d.push(+e),kt&&(n.e>po||n.e<-po))throw Error(Pc+t)}else n.s=0,n.e=0,n.d=[0];return n}function Dt(n,e,t){var i,r,s,a,o,u,l,f,h=n.d;for(a=1,s=h[0];s>=10;s/=10)a++;if(i=e-a,i<0)i+=Ot,r=e,l=h[f=0];else{if(f=Math.ceil((i+1)/Ot),s=h.length,f>=s)return n;for(l=s=h[f],a=1;s>=10;s/=10)a++;i%=Ot,r=i-Ot+a}if(t!==void 0&&(s=xr(10,a-r-1),o=l/s%10|0,u=e<0||h[f+1]!==void 0||l%s,u=t<4?(o||u)&&(t==0||t==(n.s<0?3:2)):o>5||o==5&&(t==4||u||t==6&&(i>0?r>0?l/xr(10,a-r):0:h[f-1])%10&1||t==(n.s<0?8:7))),e<1||!h[0])return u?(s=jt(n),h.length=1,e=e-s-1,h[0]=xr(10,(Ot-e%Ot)%Ot),n.e=Ss(-e/Ot)||0):(h.length=1,h[0]=n.e=n.s=0),n;if(i==0?(h.length=f,s=1,f--):(h.length=f+1,s=xr(10,Ot-i),h[f]=r>0?(l/xr(10,a-r)%xr(10,r)|0)*s:0),u)for(;;)if(f==0){(h[0]+=s)==sn&&(h[0]=1,++n.e);break}else{if(h[f]+=s,h[f]!=sn)break;h[f--]=0,s=1}for(i=h.length;h[--i]===0;)h.pop();if(kt&&(n.e>po||n.e<-po))throw Error(Pc+jt(n));return n}function xd(n,e){var t,i,r,s,a,o,u,l,f,h,p=n.constructor,m=p.precision;if(!n.s||!e.s)return e.s?e.s=-e.s:e=new p(n),kt?Dt(e,m):e;if(u=n.d,h=e.d,i=e.e,l=n.e,u=u.slice(),a=l-i,a){for(f=a<0,f?(t=u,a=-a,o=h.length):(t=h,i=l,o=u.length),r=Math.max(Math.ceil(m/Ot),o)+2,a>r&&(a=r,t.length=1),t.reverse(),r=a;r--;)t.push(0);t.reverse()}else{for(r=u.length,o=h.length,f=r<o,f&&(o=r),r=0;r<o;r++)if(u[r]!=h[r]){f=u[r]<h[r];break}a=0}for(f&&(t=u,u=h,h=t,e.s=-e.s),o=u.length,r=h.length-o;r>0;--r)u[o++]=0;for(r=h.length;r>a;){if(u[--r]<h[r]){for(s=r;s&&u[--s]===0;)u[s]=sn-1;--u[s],u[r]+=sn}u[r]-=h[r]}for(;u[--o]===0;)u.pop();for(;u[0]===0;u.shift())--i;return u[0]?(e.d=u,e.e=i,kt?Dt(e,m):e):new p(0)}function Rr(n,e,t){var i,r=jt(n),s=di(n.d),a=s.length;return e?(t&&(i=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+ji(i):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(r<0?"e":"e+")+r):r<0?(s="0."+ji(-r-1)+s,t&&(i=t-a)>0&&(s+=ji(i))):r>=a?(s+=ji(r+1-a),t&&(i=t-r-1)>0&&(s=s+"."+ji(i))):((i=r+1)<a&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-a)>0&&(r+1===a&&(s+="."),s+=ji(i))),n.s<0?"-"+s:s}function Tu(n,e){if(n.length>e)return n.length=e,!0}function Ed(n){var e,t,i;function r(s){var a=this;if(!(a instanceof r))return new r(s);if(a.constructor=r,s instanceof r){a.s=s.s,a.e=s.e,a.d=(s=s.d)?s.slice():s;return}if(typeof s=="number"){if(s*0!==0)throw Error(br+s);if(s>0)a.s=1;else if(s<0)s=-s,a.s=-1;else{a.s=0,a.e=0,a.d=[0];return}if(s===~~s&&s<1e7){a.e=0,a.d=[s];return}return yu(a,s.toString())}else if(typeof s!="string")throw Error(br+s);if(s.charCodeAt(0)===45?(s=s.slice(1),a.s=-1):a.s=1,L_.test(s))yu(a,s);else throw Error(br+s)}if(r.prototype=De,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.clone=Ed,r.config=r.set=C_,n===void 0&&(n={}),n)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],e=0;e<i.length;)n.hasOwnProperty(t=i[e++])||(n[t]=this[t]);return r.config(n),r}function C_(n){if(!n||typeof n!="object")throw Error(Zn+"Object expected");var e,t,i,r=["precision",1,Es,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<r.length;e+=3)if((i=n[t=r[e]])!==void 0)if(Ss(i)===i&&i>=r[e+1]&&i<=r[e+2])this[t]=i;else throw Error(br+t+": "+i);if((i=n[t="LN10"])!==void 0)if(i==Math.LN10)this[t]=new this(i);else throw Error(br+t+": "+i);return this}var Sd=Ed(D_);Ln=new Sd(1);var q;(function(n){n.AED="aed",n.AFN="afn",n.ALL="all",n.AMD="amd",n.ANG="ang",n.AOA="aoa",n.ARS="ars",n.AUD="aud",n.AWG="awg",n.AZN="azn",n.BAM="bam",n.BBD="bbd",n.BDT="bdt",n.BGN="bgn",n.BHD="bhd",n.BIF="bif",n.BMD="bmd",n.BND="bnd",n.BOB="bob",n.BOV="bov",n.BRL="brl",n.BSD="bsd",n.BTN="btn",n.BWP="bwp",n.BYN="byn",n.BYR="byr",n.BZD="bzd",n.CAD="cad",n.CDF="cdf",n.CHE="che",n.CHF="chf",n.CHW="chw",n.CLF="clf",n.CLP="clp",n.CNY="cny",n.COP="cop",n.COU="cou",n.CRC="crc",n.CUC="cuc",n.CUP="cup",n.CVE="cve",n.CZK="czk",n.DJF="djf",n.DKK="dkk",n.DOP="dop",n.DZD="dzd",n.EGP="egp",n.ERN="ern",n.ETB="etb",n.EUR="eur",n.FJD="fjd",n.FKP="fkp",n.GBP="gbp",n.GEL="gel",n.GHS="ghs",n.GIP="gip",n.GMD="gmd",n.GNF="gnf",n.GTQ="gtq",n.GYD="gyd",n.HKD="hkd",n.HNL="hnl",n.HRK="hrk",n.HTG="htg",n.HUF="huf",n.IDR="idr",n.ILS="ils",n.INR="inr",n.IQD="iqd",n.IRR="irr",n.ISK="isk",n.JMD="jmd",n.JOD="jod",n.JPY="jpy",n.KES="kes",n.KGS="kgs",n.KHR="khr",n.KMF="kmf",n.KPW="kpw",n.KRW="krw",n.KWD="kwd",n.KYD="kyd",n.KZT="kzt",n.LAK="lak",n.LBP="lbp",n.LKR="lkr",n.LRD="lrd",n.LSL="lsl",n.LTL="ltl",n.LVL="lvl",n.LYD="lyd",n.MAD="mad",n.MDL="mdl",n.MGA="mga",n.MKD="mkd",n.MMK="mmk",n.MNT="mnt",n.MOP="mop",n.MRO="mro",n.MUR="mur",n.MVR="mvr",n.MWK="mwk",n.MXN="mxn",n.MXV="mxv",n.MYR="myr",n.MZN="mzn",n.NAD="nad",n.NGN="ngn",n.NIO="nio",n.NOK="nok",n.NPR="npr",n.NZD="nzd",n.OMR="omr",n.PAB="pab",n.PEN="pen",n.PGK="pgk",n.PHP="php",n.PKR="pkr",n.PLN="pln",n.PYG="pyg",n.QAR="qar",n.RON="ron",n.RSD="rsd",n.RUB="rub",n.RWF="rwf",n.SAR="sar",n.SBD="sbd",n.SCR="scr",n.SDG="sdg",n.SEK="sek",n.SGD="sgd",n.SHP="shp",n.SLL="sll",n.SOS="sos",n.SRD="srd",n.SSP="ssp",n.STD="std",n.SVC="svc",n.SYP="syp",n.SZL="szl",n.THB="thb",n.TJS="tjs",n.TMT="tmt",n.TND="tnd",n.TOP="top",n.TRY="try",n.TTD="ttd",n.TWD="twd",n.TZS="tzs",n.UAH="uah",n.UGX="ugx",n.USD="usd",n.USN="usn",n.USS="uss",n.UYI="uyi",n.UYU="uyu",n.UZS="uzs",n.VEF="vef",n.VND="vnd",n.VUV="vuv",n.WST="wst",n.XAF="xaf",n.XAG="xag",n.XAU="xau",n.XBA="xba",n.XBB="xbb",n.XBC="xbc",n.XBD="xbd",n.XCD="xcd",n.XDR="xdr",n.XFU="xfu",n.XOF="xof",n.XPD="xpd",n.XPF="xpf",n.XPT="xpt",n.XSU="xsu",n.XTS="xts",n.XUA="xua",n.YER="yer",n.ZAR="zar",n.ZMW="zmw",n.ZWL="zwl"})(q||(q={}));q.AED+"",q.AFN+"",q.ALL+"",q.AMD+"",q.ANG+"",q.AOA+"",q.ARS+"",q.AUD+"",q.AWG+"",q.AZN+"",q.BAM+"",q.BBD+"",q.BDT+"",q.BGN+"",q.BHD+"",q.BIF+"",q.BMD+"",q.BND+"",q.BOB+"",q.BOV+"",q.BRL+"",q.BSD+"",q.BTN+"",q.BWP+"",q.BYR+"",q.BYN+"",q.BZD+"",q.CAD+"",q.CDF+"",q.CHE+"",q.CHF+"",q.CHW+"",q.CLF+"",q.CLP+"",q.CNY+"",q.COP+"",q.COU+"",q.CRC+"",q.CUC+"",q.CUP+"",q.CVE+"",q.CZK+"",q.DJF+"",q.DKK+"",q.DOP+"",q.DZD+"",q.EGP+"",q.ERN+"",q.ETB+"",q.EUR+"",q.FJD+"",q.FKP+"",q.GBP+"",q.GEL+"",q.GHS+"",q.GIP+"",q.GMD+"",q.GNF+"",q.GTQ+"",q.GYD+"",q.HKD+"",q.HNL+"",q.HRK+"",q.HTG+"",q.HUF+"",q.IDR+"",q.ILS+"",q.INR+"",q.IQD+"",q.IRR+"",q.ISK+"",q.JMD+"",q.JOD+"",q.JPY+"",q.KES+"",q.KGS+"",q.KHR+"",q.KMF+"",q.KPW+"",q.KRW+"",q.KWD+"",q.KYD+"",q.KZT+"",q.LAK+"",q.LBP+"",q.LKR+"",q.LRD+"",q.LSL+"",q.LTL+"",q.LVL+"",q.LYD+"",q.MAD+"",q.MDL+"",q.MGA+"",q.MKD+"",q.MMK+"",q.MNT+"",q.MOP+"",q.MRO+"",q.MUR+"",q.MVR+"",q.MWK+"",q.MXN+"",q.MXV+"",q.MYR+"",q.MZN+"",q.NAD+"",q.NGN+"",q.NIO+"",q.NOK+"",q.NPR+"",q.NZD+"",q.OMR+"",q.PAB+"",q.PEN+"",q.PGK+"",q.PHP+"",q.PKR+"",q.PLN+"",q.PYG+"",q.QAR+"",q.RON+"",q.RSD+"",q.RUB+"",q.RWF+"",q.SAR+"",q.SBD+"",q.SCR+"",q.SDG+"",q.SEK+"",q.SGD+"",q.SHP+"",q.SLL+"",q.SOS+"",q.SRD+"",q.SSP+"",q.STD+"",q.SVC+"",q.SYP+"",q.SZL+"",q.THB+"",q.TJS+"",q.TMT+"",q.TND+"",q.TOP+"",q.TRY+"",q.TTD+"",q.TWD+"",q.TZS+"",q.UAH+"",q.UGX+"",q.USD+"",q.USN+"",q.USS+"",q.UYI+"",q.UYU+"",q.UZS+"",q.VEF+"",q.VND+"",q.VUV+"",q.WST+"",q.XAF+"",q.XAG+"",q.XAU+"",q.XBA+"",q.XBB+"",q.XBC+"",q.XBD+"",q.XCD+"",q.XDR+"",q.XFU+"",q.XOF+"",q.XPD+"",q.XPF+"",q.XPT+"",q.XSU+"",q.XTS+"",q.XUA+"",q.YER+"",q.ZAR+"",q.ZMW+"",q.ZWL+"";var ks={exports:{}};ks.exports;var bu;function U_(){return bu||(bu=1,(function(n,e){var t=200,i="Expected a function",r="__lodash_hash_undefined__",s=1,a=2,o=9007199254740991,u="[object Arguments]",l="[object Array]",f="[object Boolean]",h="[object Date]",p="[object Error]",m="[object Function]",x="[object GeneratorFunction]",b="[object Map]",_="[object Number]",g="[object Object]",I="[object Promise]",D="[object RegExp]",y="[object Set]",P="[object String]",A="[object Symbol]",R="[object WeakMap]",v="[object ArrayBuffer]",w="[object DataView]",G="[object Float32Array]",F="[object Float64Array]",k="[object Int8Array]",j="[object Int16Array]",re="[object Int32Array]",Z="[object Uint8Array]",te="[object Uint8ClampedArray]",J="[object Uint16Array]",oe="[object Uint32Array]",fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_e=/^\w*$/,Ee=/^\./,Re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/[\\^$.*+?()[\]{}|]/g,Mt=/\\(\\)?/g,st=/^\[object .+?Constructor\]$/,ae=/^(?:0|[1-9]\d*)$/,ue={};ue[G]=ue[F]=ue[k]=ue[j]=ue[re]=ue[Z]=ue[te]=ue[J]=ue[oe]=!0,ue[u]=ue[l]=ue[v]=ue[f]=ue[w]=ue[h]=ue[p]=ue[m]=ue[b]=ue[_]=ue[g]=ue[D]=ue[y]=ue[P]=ue[R]=!1;var de=typeof Ra=="object"&&Ra&&Ra.Object===Object&&Ra,Xe=typeof self=="object"&&self&&self.Object===Object&&self,ze=de||Xe||Function("return this")(),We=e&&!e.nodeType&&e,Pt=We&&!0&&n&&!n.nodeType&&n,it=Pt&&Pt.exports===We,St=it&&de.process,dt=(function(){try{return St&&St.binding("util")}catch{}})(),ct=dt&&dt.isTypedArray;function Ft(S,O){for(var ee=-1,me=S?S.length:0;++ee<me&&O(S[ee],ee,S)!==!1;);return S}function Bt(S,O){for(var ee=-1,me=S?S.length:0;++ee<me;)if(O(S[ee],ee,S))return!0;return!1}function Yt(S){return function(O){return O?.[S]}}function Lt(S,O){for(var ee=-1,me=Array(S);++ee<S;)me[ee]=O(ee);return me}function Nt(S){return function(O){return S(O)}}function Ct(S,O){return S?.[O]}function W(S){var O=!1;if(S!=null&&typeof S.toString!="function")try{O=!!(S+"")}catch{}return O}function Ue(S){var O=-1,ee=Array(S.size);return S.forEach(function(me,et){ee[++O]=[et,me]}),ee}function at(S,O){return function(ee){return S(O(ee))}}function d(S){var O=-1,ee=Array(S.size);return S.forEach(function(me){ee[++O]=me}),ee}var c=Array.prototype,E=Function.prototype,T=Object.prototype,N=ze["__core-js_shared__"],C=(function(){var S=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return S?"Symbol(src)_1."+S:""})(),z=E.toString,L=T.hasOwnProperty,B=T.toString,ne=RegExp("^"+z.call(L).replace(nt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),he=ze.Symbol,se=ze.Uint8Array,le=at(Object.getPrototypeOf,Object),we=Object.create,Ne=T.propertyIsEnumerable,Ze=c.splice,V=at(Object.keys,Object),ve=Fr(ze,"DataView"),ie=Fr(ze,"Map"),xe=Fr(ze,"Promise"),Se=Fr(ze,"Set"),ce=Fr(ze,"WeakMap"),Le=Fr(Object,"create"),Oe=hr(ve),Gt=hr(ie),wt=hr(xe),Bn=hr(Se),Gn=hr(ce),Cr=he?he.prototype:void 0,As=Cr?Cr.valueOf:void 0,ws=Cr?Cr.toString:void 0;function Kn(S){var O=-1,ee=S?S.length:0;for(this.clear();++O<ee;){var me=S[O];this.set(me[0],me[1])}}function Po(){this.__data__=Le?Le(null):{}}function _a(S){return this.has(S)&&delete this.__data__[S]}function ga(S){var O=this.__data__;if(Le){var ee=O[S];return ee===r?void 0:ee}return L.call(O,S)?O[S]:void 0}function Ti(S){var O=this.__data__;return Le?O[S]!==void 0:L.call(O,S)}function Rs(S,O){var ee=this.__data__;return ee[S]=Le&&O===void 0?r:O,this}Kn.prototype.clear=Po,Kn.prototype.delete=_a,Kn.prototype.get=ga,Kn.prototype.has=Ti,Kn.prototype.set=Rs;function kn(S){var O=-1,ee=S?S.length:0;for(this.clear();++O<ee;){var me=S[O];this.set(me[0],me[1])}}function va(){this.__data__=[]}function Ur(S){var O=this.__data__,ee=je(O,S);if(ee<0)return!1;var me=O.length-1;return ee==me?O.pop():Ze.call(O,ee,1),!0}function xa(S){var O=this.__data__,ee=je(O,S);return ee<0?void 0:O[ee][1]}function Or(S){return je(this.__data__,S)>-1}function Ea(S,O){var ee=this.__data__,me=je(ee,S);return me<0?ee.push([S,O]):ee[me][1]=O,this}kn.prototype.clear=va,kn.prototype.delete=Ur,kn.prototype.get=xa,kn.prototype.has=Or,kn.prototype.set=Ea;function Vn(S){var O=-1,ee=S?S.length:0;for(this.clear();++O<ee;){var me=S[O];this.set(me[0],me[1])}}function No(){this.__data__={hash:new Kn,map:new(ie||kn),string:new Kn}}function Do(S){return Sa(this,S).delete(S)}function Lo(S){return Sa(this,S).get(S)}function Co(S){return Sa(this,S).has(S)}function M(S,O){return Sa(this,S).set(S,O),this}Vn.prototype.clear=No,Vn.prototype.delete=Do,Vn.prototype.get=Lo,Vn.prototype.has=Co,Vn.prototype.set=M;function X(S){var O=-1,ee=S?S.length:0;for(this.__data__=new Vn;++O<ee;)this.add(S[O])}function Q(S){return this.__data__.set(S,r),this}function $(S){return this.__data__.has(S)}X.prototype.add=X.prototype.push=Q,X.prototype.has=$;function K(S){this.__data__=new kn(S)}function ye(){this.__data__=new kn}function Pe(S){return this.__data__.delete(S)}function Me(S){return this.__data__.get(S)}function Fe(S){return this.__data__.has(S)}function Be(S,O){var ee=this.__data__;if(ee instanceof kn){var me=ee.__data__;if(!ie||me.length<t-1)return me.push([S,O]),this;ee=this.__data__=new Vn(me)}return ee.set(S,O),this}K.prototype.clear=ye,K.prototype.delete=Pe,K.prototype.get=Me,K.prototype.has=Fe,K.prototype.set=Be;function Qe(S,O){var ee=bi(S)||lu(S)?Lt(S.length,String):[],me=ee.length,et=!!me;for(var ke in S)L.call(S,ke)&&!(et&&(ke=="length"||ru(ke,me)))&&ee.push(ke);return ee}function je(S,O){for(var ee=S.length;ee--;)if(ou(S[ee][0],O))return ee;return-1}function Ge(S){return Br(S)?we(S):{}}var yt=Wi();function Vt(S,O){return S&&yt(S,O,ba)}function Ut(S,O){O=Ma(O,S)?[O]:$n(O);for(var ee=0,me=O.length;S!=null&&ee<me;)S=S[ya(O[ee++])];return ee&&ee==me?S:void 0}function Tt(S){return B.call(S)}function nn(S,O){return S!=null&&O in Object(S)}function Ae(S,O,ee,me,et){return S===O?!0:S==null||O==null||!Br(S)&&!Ta(O)?S!==S&&O!==O:gn(S,O,Ae,ee,me,et)}function gn(S,O,ee,me,et,ke){var ut=bi(S),$t=bi(O),Zt=l,un=l;ut||(Zt=Xi(S),Zt=Zt==u?g:Zt),$t||(un=Xi(O),un=un==u?g:un);var bn=Zt==g&&!W(S),An=un==g&&!W(O),vn=Zt==un;if(vn&&!bn)return ke||(ke=new K),ut||uu(S)?Is(S,O,ee,me,et,ke):sh(S,O,Zt,ee,me,et,ke);if(!(et&a)){var zn=bn&&L.call(S,"__wrapped__"),Wn=An&&L.call(O,"__wrapped__");if(zn||Wn){var qi=zn?S.value():S,Ai=Wn?O.value():O;return ke||(ke=new K),ee(qi,Ai,me,et,ke)}}return vn?(ke||(ke=new K),ah(S,O,ee,me,et,ke)):!1}function _t(S,O,ee,me){var et=ee.length,ke=et;if(S==null)return!ke;for(S=Object(S);et--;){var ut=ee[et];if(ut[2]?ut[1]!==S[ut[0]]:!(ut[0]in S))return!1}for(;++et<ke;){ut=ee[et];var $t=ut[0],Zt=S[$t],un=ut[1];if(ut[2]){if(Zt===void 0&&!($t in S))return!1}else{var bn=new K,An;if(!(An===void 0?Ae(un,Zt,me,s|a,bn):An))return!1}}return!0}function Tn(S){if(!Br(S)||uh(S))return!1;var O=Oo(S)||W(S)?ne:st;return O.test(hr(S))}function Hn(S){return Ta(S)&&Fo(S.length)&&!!ue[B.call(S)]}function si(S){return typeof S=="function"?S:S==null?vh:typeof S=="object"?bi(S)?Ht(S[0],S[1]):bt(S):xh(S)}function zi(S){if(!fh(S))return V(S);var O=[];for(var ee in Object(S))L.call(S,ee)&&ee!="constructor"&&O.push(ee);return O}function bt(S){var O=oh(S);return O.length==1&&O[0][2]?au(O[0][0],O[0][1]):function(ee){return ee===S||_t(ee,S,O)}}function Ht(S,O){return Ma(S)&&su(O)?au(ya(S),O):function(ee){var me=mh(ee,S);return me===void 0&&me===O?_h(ee,S):Ae(O,me,void 0,s|a)}}function ai(S){return function(O){return Ut(O,S)}}function Rt(S){if(typeof S=="string")return S;if(Bo(S))return ws?ws.call(S):"";var O=S+"";return O=="0"&&1/S==-1/0?"-0":O}function $n(S){return bi(S)?S:dh(S)}function Wi(S){return function(O,ee,me){for(var et=-1,ke=Object(O),ut=me(O),$t=ut.length;$t--;){var Zt=ut[++et];if(ee(ke[Zt],Zt,ke)===!1)break}return O}}function Is(S,O,ee,me,et,ke){var ut=et&a,$t=S.length,Zt=O.length;if($t!=Zt&&!(ut&&Zt>$t))return!1;var un=ke.get(S);if(un&&ke.get(O))return un==O;var bn=-1,An=!0,vn=et&s?new X:void 0;for(ke.set(S,O),ke.set(O,S);++bn<$t;){var zn=S[bn],Wn=O[bn];if(me)var qi=ut?me(Wn,zn,bn,O,S,ke):me(zn,Wn,bn,S,O,ke);if(qi!==void 0){if(qi)continue;An=!1;break}if(vn){if(!Bt(O,function(Ai,pr){if(!vn.has(pr)&&(zn===Ai||ee(zn,Ai,me,et,ke)))return vn.add(pr)})){An=!1;break}}else if(!(zn===Wn||ee(zn,Wn,me,et,ke))){An=!1;break}}return ke.delete(S),ke.delete(O),An}function sh(S,O,ee,me,et,ke,ut){switch(ee){case w:if(S.byteLength!=O.byteLength||S.byteOffset!=O.byteOffset)return!1;S=S.buffer,O=O.buffer;case v:return!(S.byteLength!=O.byteLength||!me(new se(S),new se(O)));case f:case h:case _:return ou(+S,+O);case p:return S.name==O.name&&S.message==O.message;case D:case P:return S==O+"";case b:var $t=Ue;case y:var Zt=ke&a;if($t||($t=d),S.size!=O.size&&!Zt)return!1;var un=ut.get(S);if(un)return un==O;ke|=s,ut.set(S,O);var bn=Is($t(S),$t(O),me,et,ke,ut);return ut.delete(S),bn;case A:if(As)return As.call(S)==As.call(O)}return!1}function ah(S,O,ee,me,et,ke){var ut=et&a,$t=ba(S),Zt=$t.length,un=ba(O),bn=un.length;if(Zt!=bn&&!ut)return!1;for(var An=Zt;An--;){var vn=$t[An];if(!(ut?vn in O:L.call(O,vn)))return!1}var zn=ke.get(S);if(zn&&ke.get(O))return zn==O;var Wn=!0;ke.set(S,O),ke.set(O,S);for(var qi=ut;++An<Zt;){vn=$t[An];var Ai=S[vn],pr=O[vn];if(me)var fu=ut?me(pr,Ai,vn,O,S,ke):me(Ai,pr,vn,S,O,ke);if(!(fu===void 0?Ai===pr||ee(Ai,pr,me,et,ke):fu)){Wn=!1;break}qi||(qi=vn=="constructor")}if(Wn&&!qi){var Aa=S.constructor,wa=O.constructor;Aa!=wa&&"constructor"in S&&"constructor"in O&&!(typeof Aa=="function"&&Aa instanceof Aa&&typeof wa=="function"&&wa instanceof wa)&&(Wn=!1)}return ke.delete(S),ke.delete(O),Wn}function Sa(S,O){var ee=S.__data__;return ch(O)?ee[typeof O=="string"?"string":"hash"]:ee.map}function oh(S){for(var O=ba(S),ee=O.length;ee--;){var me=O[ee],et=S[me];O[ee]=[me,et,su(et)]}return O}function Fr(S,O){var ee=Ct(S,O);return Tn(ee)?ee:void 0}var Xi=Tt;(ve&&Xi(new ve(new ArrayBuffer(1)))!=w||ie&&Xi(new ie)!=b||xe&&Xi(xe.resolve())!=I||Se&&Xi(new Se)!=y||ce&&Xi(new ce)!=R)&&(Xi=function(S){var O=B.call(S),ee=O==g?S.constructor:void 0,me=ee?hr(ee):void 0;if(me)switch(me){case Oe:return w;case Gt:return b;case wt:return I;case Bn:return y;case Gn:return R}return O});function lh(S,O,ee){O=Ma(O,S)?[O]:$n(O);for(var me,et=-1,ut=O.length;++et<ut;){var ke=ya(O[et]);if(!(me=S!=null&&ee(S,ke)))break;S=S[ke]}if(me)return me;var ut=S?S.length:0;return!!ut&&Fo(ut)&&ru(ke,ut)&&(bi(S)||lu(S))}function ru(S,O){return O=O??o,!!O&&(typeof S=="number"||ae.test(S))&&S>-1&&S%1==0&&S<O}function Ma(S,O){if(bi(S))return!1;var ee=typeof S;return ee=="number"||ee=="symbol"||ee=="boolean"||S==null||Bo(S)?!0:_e.test(S)||!fe.test(S)||O!=null&&S in Object(O)}function ch(S){var O=typeof S;return O=="string"||O=="number"||O=="symbol"||O=="boolean"?S!=="__proto__":S===null}function uh(S){return!!C&&C in S}function fh(S){var O=S&&S.constructor,ee=typeof O=="function"&&O.prototype||T;return S===ee}function su(S){return S===S&&!Br(S)}function au(S,O){return function(ee){return ee==null?!1:ee[S]===O&&(O!==void 0||S in Object(ee))}}var dh=Uo(function(S){S=ph(S);var O=[];return Ee.test(S)&&O.push(""),S.replace(Re,function(ee,me,et,ke){O.push(et?ke.replace(Mt,"$1"):me||ee)}),O});function ya(S){if(typeof S=="string"||Bo(S))return S;var O=S+"";return O=="0"&&1/S==-1/0?"-0":O}function hr(S){if(S!=null){try{return z.call(S)}catch{}try{return S+""}catch{}}return""}function Uo(S,O){if(typeof S!="function"||O&&typeof O!="function")throw new TypeError(i);var ee=function(){var me=arguments,et=O?O.apply(this,me):me[0],ke=ee.cache;if(ke.has(et))return ke.get(et);var ut=S.apply(this,me);return ee.cache=ke.set(et,ut),ut};return ee.cache=new(Uo.Cache||Vn),ee}Uo.Cache=Vn;function ou(S,O){return S===O||S!==S&&O!==O}function lu(S){return hh(S)&&L.call(S,"callee")&&(!Ne.call(S,"callee")||B.call(S)==u)}var bi=Array.isArray;function cu(S){return S!=null&&Fo(S.length)&&!Oo(S)}function hh(S){return Ta(S)&&cu(S)}function Oo(S){var O=Br(S)?B.call(S):"";return O==m||O==x}function Fo(S){return typeof S=="number"&&S>-1&&S%1==0&&S<=o}function Br(S){var O=typeof S;return!!S&&(O=="object"||O=="function")}function Ta(S){return!!S&&typeof S=="object"}function Bo(S){return typeof S=="symbol"||Ta(S)&&B.call(S)==A}var uu=ct?Nt(ct):Hn;function ph(S){return S==null?"":Rt(S)}function mh(S,O,ee){var me=S==null?void 0:Ut(S,O);return me===void 0?ee:me}function _h(S,O){return S!=null&&lh(S,O,nn)}function ba(S){return cu(S)?Qe(S):zi(S)}function gh(S,O,ee){var me=bi(S)||uu(S);if(O=si(O),ee==null)if(me||Br(S)){var et=S.constructor;me?ee=bi(S)?new et:[]:ee=Oo(et)?Ge(le(S)):{}}else ee={};return(me?Ft:Vt)(S,function(ke,ut,$t){return O(ee,ke,ut,$t)}),ee}function vh(S){return S}function xh(S){return Ma(S)?Yt(ya(S)):ai(S)}n.exports=gh})(ks,ks.exports)),ks.exports}U_();const Nc="185",O_=0,Au=1,F_=2,eo=1,B_=2,Vs=3,ur=0,In=1,Ui=2,Bi=0,ss=1,wu=2,Ru=3,Iu=4,G_=5,Er=100,k_=101,V_=102,H_=103,z_=104,W_=200,X_=201,q_=202,Y_=203,Nl=204,Dl=205,Z_=206,K_=207,$_=208,J_=209,Q_=210,j_=211,eg=212,tg=213,ng=214,Ll=0,Cl=1,Ul=2,hs=3,Ol=4,Fl=5,Bl=6,Gl=7,Md=0,ig=1,rg=2,_i=0,yd=1,Td=2,bd=3,Ad=4,wd=5,Rd=6,Id=7,Pd=300,Ir=301,ps=302,Wo=303,Xo=304,Ao=306,kl=1e3,Oi=1001,Vl=1002,ln=1003,sg=1004,Na=1005,pn=1006,qo=1007,Mr=1008,Cn=1009,Nd=1010,Dd=1011,ca=1012,Dc=1013,Mi=1014,hi=1015,Vi=1016,Lc=1017,Cc=1018,ua=1020,Ld=35902,Cd=35899,Ud=1021,Od=1022,ni=1023,Hi=1026,yr=1027,Fd=1028,Uc=1029,Pr=1030,Oc=1031,Fc=1033,to=33776,no=33777,io=33778,ro=33779,Hl=35840,zl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,Zl=37496,Kl=37488,$l=37489,mo=37490,Jl=37491,Ql=37808,jl=37809,ec=37810,tc=37811,nc=37812,ic=37813,rc=37814,sc=37815,ac=37816,oc=37817,lc=37818,cc=37819,uc=37820,fc=37821,dc=36492,hc=36494,pc=36495,mc=36283,_c=36284,_o=36285,gc=36286,ag=3200,vc=0,og=1,ir="",qn="srgb",go="srgb-linear",vo="linear",At="srgb",Gr=7680,Pu=519,lg=512,cg=513,ug=514,Bc=515,fg=516,dg=517,Gc=518,hg=519,Nu=35044,Du="300 es",pi=2e3,fa=2001;function pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mg(){const n=xo("canvas");return n.style.display="block",n}const Lu={};function Cu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=Bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function vt(...n){n=Bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function as(...n){const e=n.join(" ");e in Lu||(Lu[e]=!0,Ke(...n))}function _g(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const gg={[Ll]:Cl,[Ul]:Bl,[Ol]:Gl,[hs]:Fl,[Cl]:Ll,[Bl]:Ul,[Gl]:Ol,[Fl]:hs};class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const Xs=Math.PI/180,da=180/Math.PI;function Ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function kc(n,e){return(n%e+e)%e}function vg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xg(n,e,t){return n!==e?(t-n)/(e-n):0}function qs(n,e,t){return(1-t)*n+t*e}function Eg(n,e,t,i){return qs(n,e,1-Math.exp(-t*i))}function Sg(n,e=1){return e-Math.abs(kc(n,e*2)-e)}function Mg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bg(n,e){return n+Math.random()*(e-n)}function Ag(n){return n*(.5-Math.random())}function wg(n){n!==void 0&&(Uu=n);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(n){return n*Xs}function Ig(n){return n*da}function Pg(n){return(n&n-1)===0&&n!==0}function Ng(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lg(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),u=a(t/2),l=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*f,u*h,u*p,o*l);break;case"YZY":n.set(u*p,o*f,u*h,o*l);break;case"ZXZ":n.set(u*h,u*p,o*f,o*l);break;case"XZX":n.set(o*f,u*x,u*m,o*l);break;case"YXY":n.set(u*m,o*f,u*x,o*l);break;case"ZYZ":n.set(u*x,u*m,o*f,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Da={DEG2RAD:Xs,RAD2DEG:da,generateUUID:Ms,clamp:ht,euclideanModulo:kc,mapLinear:vg,inverseLerp:xg,lerp:qs,damp:Eg,pingpong:Sg,smoothstep:Mg,smootherstep:yg,randInt:Tg,randFloat:bg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Ig,isPowerOfTwo:Pg,ceilPowerOfTwo:Ng,floorPowerOfTwo:Dg,setQuaternionFromProperEuler:Lg,normalize:xn,denormalize:ts},jc=class jc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;let mt=jc;class ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let u=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3],p=s[a+0],m=s[a+1],x=s[a+2],b=s[a+3];if(h!==b||u!==p||l!==m||f!==x){let _=u*p+l*m+f*x+h*b;_<0&&(p=-p,m=-m,x=-x,b=-b,_=-_);let g=1-o;if(_<.9995){const I=Math.acos(_),D=Math.sin(I);g=Math.sin(g*I)/D,o=Math.sin(o*I)/D,u=u*g+p*o,l=l*g+m*o,f=f*g+x*o,h=h*g+b*o}else{u=u*g+p*o,l=l*g+m*o,f=f*g+x*o,h=h*g+b*o;const I=1/Math.sqrt(u*u+l*l+f*f+h*h);u*=I,l*=I,f*=I,h*=I}}e[t]=u,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],u=i[r+1],l=i[r+2],f=i[r+3],h=s[a],p=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+f*h+u*m-l*p,e[t+1]=u*x+f*p+l*h-o*m,e[t+2]=l*x+f*m+o*p-u*h,e[t+3]=f*x-o*h-u*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(i/2),f=o(r/2),h=o(s/2),p=u(i/2),m=u(r/2),x=u(s/2);switch(a){case"XYZ":this._x=p*f*h+l*m*x,this._y=l*m*h-p*f*x,this._z=l*f*x+p*m*h,this._w=l*f*h-p*m*x;break;case"YXZ":this._x=p*f*h+l*m*x,this._y=l*m*h-p*f*x,this._z=l*f*x-p*m*h,this._w=l*f*h+p*m*x;break;case"ZXY":this._x=p*f*h-l*m*x,this._y=l*m*h+p*f*x,this._z=l*f*x+p*m*h,this._w=l*f*h-p*m*x;break;case"ZYX":this._x=p*f*h-l*m*x,this._y=l*m*h+p*f*x,this._z=l*f*x-p*m*h,this._w=l*f*h+p*m*x;break;case"YZX":this._x=p*f*h+l*m*x,this._y=l*m*h+p*f*x,this._z=l*f*x-p*m*h,this._w=l*f*h-p*m*x;break;case"XZY":this._x=p*f*h-l*m*x,this._y=l*m*h-p*f*x,this._z=l*f*x+p*m*h,this._w=l*f*h+p*m*x;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],l=t[2],f=t[6],h=t[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-u)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-u)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(u+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(u+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*u,this._y=r*f+a*u+s*o-i*l,this._z=s*f+a*l+i*u-r*o,this._w=a*f-i*o-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let u=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);u=Math.sin(u*l)/f,t=Math.sin(t*l)/f,this._x=this._x*u+i*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+i*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eu=class eu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+u*l+a*h-o*f,this.y=i+u*f+o*l-s*h,this.z=r+u*h+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-i*u,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;let Y=eu;const Yo=new Y,Ou=new ys,tu=class tu{constructor(e,t,i,r,s,a,o,u,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,l)}set(e,t,i,r,s,a,o,u,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=u,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],u=i[6],l=i[1],f=i[4],h=i[7],p=i[2],m=i[5],x=i[8],b=r[0],_=r[3],g=r[6],I=r[1],D=r[4],y=r[7],P=r[2],A=r[5],R=r[8];return s[0]=a*b+o*I+u*P,s[3]=a*_+o*D+u*A,s[6]=a*g+o*y+u*R,s[1]=l*b+f*I+h*P,s[4]=l*_+f*D+h*A,s[7]=l*g+f*y+h*R,s[2]=p*b+m*I+x*P,s[5]=p*_+m*D+x*A,s[8]=p*g+m*y+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*u+r*s*l-r*a*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],h=f*a-o*l,p=o*u-f*s,m=l*s-a*u,x=t*h+i*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(r*l-f*i)*b,e[2]=(o*i-r*a)*b,e[3]=p*b,e[4]=(f*t-r*u)*b,e[5]=(r*s-o*t)*b,e[6]=m*b,e[7]=(i*u-l*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const u=Math.cos(s),l=Math.sin(s);return this.set(i*u,i*l,-i*(u*a+l*o)+a+e,-r*l,r*u,-r*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tu.prototype.isMatrix3=!0;let tt=tu;const Zo=new tt,Fu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cg(){const n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===At&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:vo,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:At,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const gt=Cg();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let kr;class Ug{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=xo("canvas")),kr.width=e.width,kr.height=e.height;const r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Og=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ug.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Fg=0;const $o=new Y;class Mn extends Lr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=Oi,r=Oi,s=pn,a=Mr,o=ni,u=Cn,l=Mn.DEFAULT_ANISOTROPY,f=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ms(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Pd;Mn.DEFAULT_ANISOTROPY=1;const nu=class nu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const u=e.elements,l=u[0],f=u[4],h=u[8],p=u[1],m=u[5],x=u[9],b=u[2],_=u[6],g=u[10];if(Math.abs(f-p)<.01&&Math.abs(h-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+b)<.1&&Math.abs(x+_)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(l+1)/2,y=(m+1)/2,P=(g+1)/2,A=(f+p)/4,R=(h+b)/4,v=(x+_)/4;return D>y&&D>P?D<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(D),r=A/i,s=R/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=v/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=v/s),this.set(i,r,s,t),this}let I=Math.sqrt((_-x)*(_-x)+(h-b)*(h-b)+(p-f)*(p-f));return Math.abs(I)<.001&&(I=1),this.x=(_-x)/I,this.y=(h-b)/I,this.z=(p-f)/I,this.w=Math.acos((l+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nu.prototype.isVector4=!0;let Xt=nu;class Bg extends Lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Mn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gd extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gg extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const So=class So{constructor(e,t,i,r,s,a,o,u,l,f,h,p,m,x,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,l,f,h,p,m,x,b,_)}set(e,t,i,r,s,a,o,u,l,f,h,p,m,x,b,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=u,g[2]=l,g[6]=f,g[10]=h,g[14]=p,g[3]=m,g[7]=x,g[11]=b,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),u=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,m=a*h,x=o*f,b=o*h;t[0]=u*f,t[4]=-u*h,t[8]=l,t[1]=m+x*l,t[5]=p-b*l,t[9]=-o*u,t[2]=b-p*l,t[6]=x+m*l,t[10]=a*u}else if(e.order==="YXZ"){const p=u*f,m=u*h,x=l*f,b=l*h;t[0]=p+b*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=m*o-x,t[6]=b+p*o,t[10]=a*u}else if(e.order==="ZXY"){const p=u*f,m=u*h,x=l*f,b=l*h;t[0]=p-b*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*f,t[9]=b-p*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const p=a*f,m=a*h,x=o*f,b=o*h;t[0]=u*f,t[4]=x*l-m,t[8]=p*l+b,t[1]=u*h,t[5]=b*l+p,t[9]=m*l-x,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const p=a*u,m=a*l,x=o*u,b=o*l;t[0]=u*f,t[4]=b-p*h,t[8]=x*h+m,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=m*h+x,t[10]=p-b*h}else if(e.order==="XZY"){const p=a*u,m=a*l,x=o*u,b=o*l;t[0]=u*f,t[4]=-h,t[8]=l*f,t[1]=p*h+b,t[5]=a*f,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*f,t[10]=b*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,Vg)}lookAt(e,t,i){const r=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(i,Nn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(i,Nn)),Yi.normalize(),La.crossVectors(Nn,Yi),r[0]=Yi.x,r[4]=La.x,r[8]=Nn.x,r[1]=Yi.y,r[5]=La.y,r[9]=Nn.y,r[2]=Yi.z,r[6]=La.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],u=i[8],l=i[12],f=i[1],h=i[5],p=i[9],m=i[13],x=i[2],b=i[6],_=i[10],g=i[14],I=i[3],D=i[7],y=i[11],P=i[15],A=r[0],R=r[4],v=r[8],w=r[12],G=r[1],F=r[5],k=r[9],j=r[13],re=r[2],Z=r[6],te=r[10],J=r[14],oe=r[3],fe=r[7],_e=r[11],Ee=r[15];return s[0]=a*A+o*G+u*re+l*oe,s[4]=a*R+o*F+u*Z+l*fe,s[8]=a*v+o*k+u*te+l*_e,s[12]=a*w+o*j+u*J+l*Ee,s[1]=f*A+h*G+p*re+m*oe,s[5]=f*R+h*F+p*Z+m*fe,s[9]=f*v+h*k+p*te+m*_e,s[13]=f*w+h*j+p*J+m*Ee,s[2]=x*A+b*G+_*re+g*oe,s[6]=x*R+b*F+_*Z+g*fe,s[10]=x*v+b*k+_*te+g*_e,s[14]=x*w+b*j+_*J+g*Ee,s[3]=I*A+D*G+y*re+P*oe,s[7]=I*R+D*F+y*Z+P*fe,s[11]=I*v+D*k+y*te+P*_e,s[15]=I*w+D*j+y*J+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],l=e[13],f=e[2],h=e[6],p=e[10],m=e[14],x=e[3],b=e[7],_=e[11],g=e[15],I=u*m-l*p,D=o*m-l*h,y=o*p-u*h,P=a*m-l*f,A=a*p-u*f,R=a*h-o*f;return t*(b*I-_*D+g*y)-i*(x*I-_*P+g*A)+r*(x*D-b*P+g*R)-s*(x*y-b*A+_*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],u=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-i*(s*f-o*u)+r*(s*l-a*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],l=e[7],f=e[8],h=e[9],p=e[10],m=e[11],x=e[12],b=e[13],_=e[14],g=e[15],I=t*o-i*a,D=t*u-r*a,y=t*l-s*a,P=i*u-r*o,A=i*l-s*o,R=r*l-s*u,v=f*b-h*x,w=f*_-p*x,G=f*g-m*x,F=h*_-p*b,k=h*g-m*b,j=p*g-m*_,re=I*j-D*k+y*F+P*G-A*w+R*v;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/re;return e[0]=(o*j-u*k+l*F)*Z,e[1]=(r*k-i*j-s*F)*Z,e[2]=(b*R-_*A+g*P)*Z,e[3]=(p*A-h*R-m*P)*Z,e[4]=(u*G-a*j-l*w)*Z,e[5]=(t*j-r*G+s*w)*Z,e[6]=(_*y-x*R-g*D)*Z,e[7]=(f*R-p*y+m*D)*Z,e[8]=(a*k-o*G+l*v)*Z,e[9]=(i*G-t*k-s*v)*Z,e[10]=(x*A-b*y+g*I)*Z,e[11]=(h*y-f*A-m*I)*Z,e[12]=(o*w-a*F-u*v)*Z,e[13]=(t*F-i*w+r*v)*Z,e[14]=(b*D-x*P-_*I)*Z,e[15]=(f*P-h*D+p*I)*Z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,u=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*u,l*u+r*o,0,l*o+r*u,f*o+i,f*u-r*a,0,l*u-r*o,f*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,l=s+s,f=a+a,h=o+o,p=s*l,m=s*f,x=s*h,b=a*f,_=a*h,g=o*h,I=u*l,D=u*f,y=u*h,P=i.x,A=i.y,R=i.z;return r[0]=(1-(b+g))*P,r[1]=(m+y)*P,r[2]=(x-D)*P,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(p+g))*A,r[6]=(_+I)*A,r[7]=0,r[8]=(x+D)*R,r[9]=(_-I)*R,r[10]=(1-(p+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),u=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jn.copy(this);const l=1/a,f=1/o,h=1/u;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=u,this}makePerspective(e,t,i,r,s,a,o=pi,u=!1){const l=this.elements,f=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let x,b;if(u)x=s/(a-s),b=a*s/(a-s);else if(o===pi)x=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===fa)x=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=pi,u=!1){const l=this.elements,f=2/(t-e),h=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,b;if(u)x=1/(a-s),b=a/(a-s);else if(o===pi)x=-2/(a-s),b=-(a+s)/(a-s);else if(o===fa)x=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};So.prototype.isMatrix4=!0;let qt=So;const Vr=new Y,Jn=new qt,kg=new Y(0,0,0),Vg=new Y(1,1,1),Yi=new Y,La=new Y,Nn=new Y,Gu=new qt,ku=new ys;class fr{constructor(e=0,t=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],l=r[5],f=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Vu=new Y,Hr=new ys,wi=new qt,Ca=new Y,Ns=new Y,zg=new Y,Wg=new ys,Hu=new Y(1,0,0),zu=new Y(0,1,0),Wu=new Y(0,0,1),Xu={type:"added"},Xg={type:"removed"},zr={type:"childadded",child:null},Jo={type:"childremoved",child:null};class cn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Y,t=new fr,i=new ys,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new tt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ns,Ca,this.up):wi.lookAt(Ca,Ns,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(wi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),zr.child=e,this.dispatchEvent(zr),zr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){const h=u[l];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),u.length>0&&(i.materials=u),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const u=[];for(const l in o){const f=o[l];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hs extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qg={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,i),g=this._getHandJoint(l,b);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=f.position.distanceTo(h.position),m=.02,x=.005;l.inputState.pinching&&p>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=kc(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=jo(a,s,e+1/3),this.g=jo(a,s,e),this.b=jo(a,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=qn){function i(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return gt.workingToColorSpace(dn.copy(this),e),Math.round(ht(dn.r*255,0,255))*65536+Math.round(ht(dn.g*255,0,255))*256+Math.round(ht(dn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let u,l;const f=(o+a)/2;if(o===a)u=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case i:u=(r-s)/h+(r<s?6:0);break;case r:u=(s-i)/h+2;break;case s:u=(i-r)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=f,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=qn){gt.workingToColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Ua);const i=qs(Zi.h,Ua.h,t),r=qs(Zi.s,Ua.s,t),s=qs(Zi.l,Ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new pt;pt.NAMES=kd;class zc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=i}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yg extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qn=new Y,Ri=new Y,el=new Y,Ii=new Y,Wr=new Y,Xr=new Y,qu=new Y,tl=new Y,nl=new Y,il=new Y,rl=new Xt,sl=new Xt,al=new Xt;class ei{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Ri.subVectors(i,t),el.subVectors(e,t);const a=Qn.dot(Qn),o=Qn.dot(Ri),u=Qn.dot(el),l=Ri.dot(Ri),f=Ri.dot(el),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(l*u-o*f)*p,x=(a*f-o*u)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,a,o,u){return this.getBarycoord(e,t,i,r,Ii)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ii.x),u.addScaledVector(a,Ii.y),u.addScaledVector(o,Ii.z),u)}static getInterpolatedAttribute(e,t,i,r,s,a){return rl.setScalar(0),sl.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,i),al.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(sl,s.y),a.addScaledVector(al,s.z),a}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Ri.subVectors(e,t),Qn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),tl.subVectors(e,i);const u=Wr.dot(tl),l=Xr.dot(tl);if(u<=0&&l<=0)return t.copy(i);nl.subVectors(e,r);const f=Wr.dot(nl),h=Xr.dot(nl);if(f>=0&&h<=f)return t.copy(r);const p=u*h-f*l;if(p<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(i).addScaledVector(Wr,a);il.subVectors(e,s);const m=Wr.dot(il),x=Xr.dot(il);if(x>=0&&m<=x)return t.copy(s);const b=m*l-u*x;if(b<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(Xr,o);const _=f*x-m*h;if(_<=0&&h-f>=0&&m-x>=0)return qu.subVectors(s,r),o=(h-f)/(h-f+(m-x)),t.copy(r).addScaledVector(qu,o);const g=1/(_+b+p);return a=b*g,o=p*g,t.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Fa.subVectors(this.max,Ds),qr.subVectors(e.a,Ds),Yr.subVectors(e.b,Ds),Zr.subVectors(e.c,Ds),Ki.subVectors(Yr,qr),$i.subVectors(Zr,Yr),mr.subVectors(qr,Zr);let t=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-mr.z,mr.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,mr.z,0,-mr.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-mr.y,mr.x,0];return!ol(t,qr,Yr,Zr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,qr,Yr,Zr,Fa))?!1:(Ba.crossVectors(Ki,$i),t=[Ba.x,Ba.y,Ba.z],ol(t,qr,Yr,Zr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],jn=new Y,Oa=new pa,qr=new Y,Yr=new Y,Zr=new Y,Ki=new Y,$i=new Y,mr=new Y,Ds=new Y,Fa=new Y,Ba=new Y,_r=new Y;function ol(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_r.fromArray(n,s);const o=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),u=e.dot(_r),l=t.dot(_r),f=i.dot(_r);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>o)return!1}return!0}const Qt=new Y,Ga=new mt;let Zg=0;class vi extends Lr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vd extends vi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hd extends vi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends vi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Kg=new pa,Ls=new Y,ll=new Y;class Wc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ll)),this.expandByPoint(Ls.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $g=0;const Xn=new qt,cl=new cn,Kr=new Y,Dn=new pa,Cs=new pa,rn=new Y;class Fn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Hd:Vd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Dn.min,Cs.min),Dn.expandByPoint(rn),rn.addVectors(Dn.max,Cs.max),Dn.expandByPoint(rn)):(Dn.expandByPoint(Cs.min),Dn.expandByPoint(Cs.max))}Dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)rn.fromBufferAttribute(o,l),u&&(Kr.fromBufferAttribute(e,l),rn.add(Kr)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],u=[];for(let v=0;v<i.count;v++)o[v]=new Y,u[v]=new Y;const l=new Y,f=new Y,h=new Y,p=new mt,m=new mt,x=new mt,b=new Y,_=new Y;function g(v,w,G){l.fromBufferAttribute(i,v),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,G),p.fromBufferAttribute(s,v),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,G),f.sub(l),h.sub(l),m.sub(p),x.sub(p);const F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(F),_.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(F),o[v].add(b),o[w].add(b),o[G].add(b),u[v].add(_),u[w].add(_),u[G].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let v=0,w=I.length;v<w;++v){const G=I[v],F=G.start,k=G.count;for(let j=F,re=F+k;j<re;j+=3)g(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const D=new Y,y=new Y,P=new Y,A=new Y;function R(v){P.fromBufferAttribute(r,v),A.copy(P);const w=o[v];D.copy(w),D.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(A,w);const F=y.dot(u[v])<0?-1:1;a.setXYZW(v,D.x,D.y,D.z,F)}for(let v=0,w=I.length;v<w;++v){const G=I[v],F=G.start,k=G.count;for(let j=F,re=F+k;j<re;j+=3)R(e.getX(j+0)),R(e.getX(j+1)),R(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,u=new Y,l=new Y,f=new Y,h=new Y;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),b=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,_),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),l.fromBufferAttribute(i,_),o.add(f),u.add(f),l.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,u){const l=o.array,f=o.itemSize,h=o.normalized,p=new l.constructor(u.length*f);let m=0,x=0;for(let b=0,_=u.length;b<_;b++){o.isInterleavedBufferAttribute?m=u[b]*o.data.stride+o.offset:m=u[b]*f;for(let g=0;g<f;g++)p[x++]=l[m++]}return new vi(p,f,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const u=r[o],l=e(u,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const u=[],l=s[o];for(let f=0,h=l.length;f<h;f++){const p=l[f],m=e(p,i);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const l=i[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],f=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];f.push(m.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],h=s[l];for(let p=0,m=h.length;p<m;p++)f.push(h[p].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Jg=0;class ma extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=ss,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Dl,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new Y,ul=new Y,ka=new Y,Ji=new Y,fl=new Y,Va=new Y,dl=new Y;class zd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ul.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(ul);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=Ji.dot(this.direction),u=-Ji.dot(ka),l=Ji.lengthSq(),f=Math.abs(1-a*a);let h,p,m,x;if(f>0)if(h=a*u-o,p=a*o-u,x=s*f,h>=0)if(p>=-x)if(p<=x){const b=1/f;h*=b,p*=b,m=h*(h+a*p+2*o)+p*(a*h+p+2*u)+l}else p=s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*u)+l;else p=-s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*u)+l;else p<=-x?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-u),s),m=-h*h+p*(p+2*u)+l):p<=x?(h=0,p=Math.min(Math.max(-s,-u),s),m=p*(p+2*u)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-u),s),m=-h*h+p*(p+2*u)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*u)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ul).addScaledVector(ka,p),m}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,u=i+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,u;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,u=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,u=(e.min.z-p.z)*h),i>u||o>r)||((o>i||i!==i)&&(i=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){fl.subVectors(t,e),Va.subVectors(i,e),dl.crossVectors(fl,Va);let a=this.direction.dot(dl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const u=o*this.direction.dot(Va.crossVectors(Ji,Va));if(u<0)return null;const l=o*this.direction.dot(fl.cross(Ji));if(l<0||u+l>a)return null;const f=-o*Ji.dot(dl);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wd extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yu=new qt,gr=new zd,Ha=new Wc,Zu=new Y,za=new Y,Wa=new Y,Xa=new Y,hl=new Y,qa=new Y,Ku=new Y,Ya=new Y;class Sn extends cn{constructor(e=new Fn,t=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qa.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const f=o[u],h=s[u];f!==0&&(hl.fromBufferAttribute(h,e),a?qa.addScaledVector(hl,f):qa.addScaledVector(hl.sub(t),f))}t.add(qa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ha.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ha,Zu)===null||gr.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Yu.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){const _=p[x],g=a[_.materialIndex],I=Math.max(_.start,m.start),D=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let y=I,P=D;y<P;y+=3){const A=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);r=Za(this,g,e,i,l,f,h,A,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let _=x,g=b;_<g;_+=3){const I=o.getX(_),D=o.getX(_+1),y=o.getX(_+2);r=Za(this,a,e,i,l,f,h,I,D,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){const _=p[x],g=a[_.materialIndex],I=Math.max(_.start,m.start),D=Math.min(u.count,Math.min(_.start+_.count,m.start+m.count));for(let y=I,P=D;y<P;y+=3){const A=y,R=y+1,v=y+2;r=Za(this,g,e,i,l,f,h,A,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),b=Math.min(u.count,m.start+m.count);for(let _=x,g=b;_<g;_+=3){const I=_,D=_+1,y=_+2;r=Za(this,a,e,i,l,f,h,I,D,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Qg(n,e,t,i,r,s,a,o){let u;if(e.side===In?u=i.intersectTriangle(a,s,r,!0,o):u=i.intersectTriangle(r,s,a,e.side===ur,o),u===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ya);return l<t.near||l>t.far?null:{distance:l,point:Ya.clone(),object:n}}function Za(n,e,t,i,r,s,a,o,u,l){n.getVertexPosition(o,za),n.getVertexPosition(u,Wa),n.getVertexPosition(l,Xa);const f=Qg(n,e,t,i,za,Wa,Xa,Ku);if(f){const h=new Y;ei.getBarycoord(Ku,za,Wa,Xa,h),r&&(f.uv=ei.getInterpolatedAttribute(r,o,u,l,h,new mt)),s&&(f.uv1=ei.getInterpolatedAttribute(s,o,u,l,h,new mt)),a&&(f.normal=ei.getInterpolatedAttribute(a,o,u,l,h,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:u,c:l,normal:new Y,materialIndex:0};ei.getNormal(za,Wa,Xa,p.normal),f.face=p,f.barycoord=h}return f}class jg extends Mn{constructor(e=null,t=1,i=1,r,s,a,o,u,l=ln,f=ln,h,p){super(null,a,o,u,l,f,r,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new Y,e0=new Y,t0=new tt;class er{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pl.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(pl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t0.getNormalMatrix(e),r=this.coplanarPoint(pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Wc,n0=new mt(.5,.5),Ka=new Y;class Xc{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,a=new er){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],u=s[2],l=s[3],f=s[4],h=s[5],p=s[6],m=s[7],x=s[8],b=s[9],_=s[10],g=s[11],I=s[12],D=s[13],y=s[14],P=s[15];if(r[0].setComponents(l-a,m-f,g-x,P-I).normalize(),r[1].setComponents(l+a,m+f,g+x,P+I).normalize(),r[2].setComponents(l+o,m+h,g+b,P+D).normalize(),r[3].setComponents(l-o,m-h,g-b,P-D).normalize(),i)r[4].setComponents(u,p,_,y).normalize(),r[5].setComponents(l-u,m-p,g-_,P-y).normalize();else if(r[4].setComponents(l-u,m-p,g-_,P-y).normalize(),t===pi)r[5].setComponents(l+u,m+p,g+_,P+y).normalize();else if(t===fa)r[5].setComponents(u,p,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const t=n0.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xd extends Mn{constructor(e=[],t=Ir,i,r,s,a,o,u,l,f){super(e,t,i,r,s,a,o,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ms extends Mn{constructor(e,t,i=Mi,r,s,a,o=ln,u=ln,l,f=Hi,h=1){if(f!==Hi&&f!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,a,o,u,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i0 extends ms{constructor(e,t=Mi,i=Ir,r,s,a=ln,o=ln,u,l=Hi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,u,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qd extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ts extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],l=[],f=[],h=[];let p=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(h,2));function x(b,_,g,I,D,y,P,A,R,v,w){const G=y/R,F=P/v,k=y/2,j=P/2,re=A/2,Z=R+1,te=v+1;let J=0,oe=0;const fe=new Y;for(let _e=0;_e<te;_e++){const Ee=_e*F-j;for(let Re=0;Re<Z;Re++){const nt=Re*G-k;fe[b]=nt*I,fe[_]=Ee*D,fe[g]=re,l.push(fe.x,fe.y,fe.z),fe[b]=0,fe[_]=0,fe[g]=A>0?1:-1,f.push(fe.x,fe.y,fe.z),h.push(Re/R),h.push(1-_e/v),J+=1}}for(let _e=0;_e<v;_e++)for(let Ee=0;Ee<R;Ee++){const Re=p+Ee+Z*_e,nt=p+Ee+Z*(_e+1),Mt=p+(Ee+1)+Z*(_e+1),st=p+(Ee+1)+Z*_e;u.push(Re,nt,st),u.push(nt,Mt,st),oe+=6}o.addGroup(m,oe,w),m+=oe,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eo extends Fn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],u=[],l=[],f=t/2,h=Math.PI/2*e,p=t,m=2*h+p,x=i*2+s,b=r+1,_=new Y,g=new Y;for(let I=0;I<=x;I++){let D=0,y=0,P=0,A=0;if(I<=i){const w=I/i,G=w*Math.PI/2;y=-f-e*Math.cos(G),P=e*Math.sin(G),A=-e*Math.cos(G),D=w*h}else if(I<=i+s){const w=(I-i)/s;y=-f+w*t,P=e,A=0,D=h+w*p}else{const w=(I-i-s)/i,G=w*Math.PI/2;y=f+e*Math.sin(G),P=e*Math.cos(G),A=e*Math.sin(G),D=h+p+w*h}const R=Math.max(0,Math.min(1,D/m));let v=0;I===0?v=.5/r:I===x&&(v=-.5/r);for(let w=0;w<=r;w++){const G=w/r,F=G*Math.PI*2,k=Math.sin(F),j=Math.cos(F);g.x=-P*j,g.y=y,g.z=P*k,o.push(g.x,g.y,g.z),_.set(-P*j,A,P*k),_.normalize(),u.push(_.x,_.y,_.z),l.push(G+v,R)}if(I>0){const w=(I-1)*b;for(let G=0;G<r;G++){const F=w+G,k=w+G+1,j=I*b+G,re=I*b+G+1;a.push(F,k,j),a.push(k,re,j)}}}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class qc extends Fn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:u};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],p=[],m=[];let x=0;const b=[],_=i/2;let g=0;I(),a===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(f),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(m,2));function I(){const y=new Y,P=new Y;let A=0;const R=(t-e)/i;for(let v=0;v<=s;v++){const w=[],G=v/s,F=G*(t-e)+e;for(let k=0;k<=r;k++){const j=k/r,re=j*u+o,Z=Math.sin(re),te=Math.cos(re);P.x=F*Z,P.y=-G*i+_,P.z=F*te,h.push(P.x,P.y,P.z),y.set(Z,R,te).normalize(),p.push(y.x,y.y,y.z),m.push(j,1-G),w.push(x++)}b.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){const G=b[w][v],F=b[w+1][v],k=b[w+1][v+1],j=b[w][v+1];(e>0||w!==0)&&(f.push(G,F,j),A+=3),(t>0||w!==s-1)&&(f.push(F,k,j),A+=3)}l.addGroup(g,A,0),g+=A}function D(y){const P=x,A=new mt,R=new Y;let v=0;const w=y===!0?e:t,G=y===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,_*G,0),p.push(0,G,0),m.push(.5,.5),x++;const F=x;for(let k=0;k<=r;k++){const re=k/r*u+o,Z=Math.cos(re),te=Math.sin(re);R.x=w*te,R.y=_*G,R.z=w*Z,h.push(R.x,R.y,R.z),p.push(0,G,0),A.x=Z*.5+.5,A.y=te*.5*G+.5,m.push(A.x,A.y),x++}for(let k=0;k<r;k++){const j=P+k,re=F+k;y===!0?f.push(re,re+1,j):f.push(re+1,re,j),v+=3}l.addGroup(g,v,y===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),u=Math.floor(r),l=o+1,f=u+1,h=e/o,p=t/u,m=[],x=[],b=[],_=[];for(let g=0;g<f;g++){const I=g*p-a;for(let D=0;D<l;D++){const y=D*h-s;x.push(y,-I,0),b.push(0,0,1),_.push(D/o),_.push(1-g/u)}}for(let g=0;g<u;g++)for(let I=0;I<o;I++){const D=I+l*g,y=I+l*(g+1),P=I+1+l*(g+1),A=I+1+l*g;m.push(D,y,A),m.push(y,P,A)}this.setIndex(m),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(b,3)),this.setAttribute("uv",new Jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yc extends Fn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(a+o,Math.PI);let l=0;const f=[],h=new Y,p=new Y,m=[],x=[],b=[],_=[];for(let g=0;g<=i;g++){const I=[],D=g/i,y=a+D*o,P=e*Math.cos(y),A=Math.sqrt(e*e-P*P);let R=0;g===0&&a===0?R=.5/t:g===i&&u===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const w=v/t,G=r+w*s;h.x=-A*Math.cos(G),h.y=P,h.z=A*Math.sin(G),x.push(h.x,h.y,h.z),p.copy(h).normalize(),b.push(p.x,p.y,p.z),_.push(w+R,1-D),I.push(l++)}f.push(I)}for(let g=0;g<i;g++)for(let I=0;I<t;I++){const D=f[g][I+1],y=f[g][I],P=f[g+1][I],A=f[g+1][I+1];(g!==0||a>0)&&m.push(D,y,A),(g!==i-1||u<Math.PI)&&m.push(y,P,A)}this.setIndex(m),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(b,3)),this.setAttribute("uv",new Jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zc extends Fn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const u=[],l=[],f=[],h=[],p=new Y,m=new Y,x=new Y;for(let b=0;b<=i;b++){const _=a+b/i*o;for(let g=0;g<=r;g++){const I=g/r*s;m.x=(e+t*Math.cos(_))*Math.cos(I),m.y=(e+t*Math.cos(_))*Math.sin(I),m.z=t*Math.sin(_),l.push(m.x,m.y,m.z),p.x=e*Math.cos(I),p.y=e*Math.sin(I),x.subVectors(m,p).normalize(),f.push(x.x,x.y,x.z),h.push(g/r),h.push(b/i)}}for(let b=1;b<=i;b++)for(let _=1;_<=r;_++){const g=(r+1)*b+_-1,I=(r+1)*(b-1)+_-1,D=(r+1)*(b-1)+_,y=(r+1)*b+_;u.push(g,I,y),u.push(I,D,y)}this.setIndex(u),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if($u(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($u(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function En(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}function $u(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function r0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const s0={clone:_s,merge:En};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(r.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l0 extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $r extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c0 extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u0 extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zd extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class f0 extends Zd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ml=new qt,Ju=new Y,Qu=new Y;class d0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new Y,Ja=new ys,oi=new Y;class Kd extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,Ja,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ja,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose($a,Ja,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ja,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new Y,ju=new mt,ef=new mt;class Yn extends Kd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,ju,ef),t.subVectors(ef,ju)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*i/l,r*=a.width/u,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kc extends Kd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,u=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class h0 extends d0{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p0 extends Zd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new h0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Jr=-90,Qr=1;class m0 extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const s=new Yn(Jr,Qr,e,t);s.layers=this.layers,this.add(s);const a=new Yn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const o=new Yn(Jr,Qr,e,t);o.layers=this.layers,this.add(o);const u=new Yn(Jr,Qr,e,t);u.layers=this.layers,this.add(u);const l=new Yn(Jr,Qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,u]=t;for(const l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,l,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class _0 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const tf=new qt;class g0{constructor(e,t,i=0,r=1/0){this.ray=new zd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tf),this}intersectObject(e,t=!0,i=[]){return xc(e,this,i,t),i.sort(nf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xc(e[r],this,i,t);return i.sort(nf),i}}function nf(n,e){return n.distance-e.distance}function xc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)xc(s[a],e,t,!0)}}const iu=class iu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};iu.prototype.isMatrix2=!0;let rf=iu;function sf(n,e,t,i){const r=v0(i);switch(t){case Ud:return n*e;case Fd:return n*e/r.components*r.byteLength;case Uc:return n*e/r.components*r.byteLength;case Pr:return n*e*2/r.components*r.byteLength;case Oc:return n*e*2/r.components*r.byteLength;case Od:return n*e*3/r.components*r.byteLength;case ni:return n*e*4/r.components*r.byteLength;case Fc:return n*e*4/r.components*r.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case ql:case Yl:case Kl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:case mo:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dc:case hc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _o:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(n){switch(n){case Cn:case Nd:return{byteLength:1,components:1};case ca:case Dd:case Vi:return{byteLength:2,components:1};case Lc:case Cc:return{byteLength:2,components:4};case Mi:case Dc:case hi:return{byteLength:4,components:1};case Ld:case Cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function $d(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function x0(n){const e=new WeakMap;function t(o,u){const l=o.array,f=o.usage,h=l.byteLength,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,l,f),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,u,l){const f=u.array,h=u.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,f);else{h.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<h.length;m++){const x=h[p],b=h[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++p,h[p]=b)}h.length=p+1;for(let m=0,x=h.length;m<x;m++){const b=h[m];n.bufferSubData(l,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(n.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,u),l.version=o.version}}return{get:r,remove:s,update:a}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:E0,alphahash_pars_fragment:S0,alphamap_fragment:M0,alphamap_pars_fragment:y0,alphatest_fragment:T0,alphatest_pars_fragment:b0,aomap_fragment:A0,aomap_pars_fragment:w0,batching_pars_vertex:R0,batching_vertex:I0,begin_vertex:P0,beginnormal_vertex:N0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:C0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:B0,color_fragment:G0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:H0,common:z0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:Z0,emissivemap_pars_fragment:K0,colorspace_fragment:$0,colorspace_pars_fragment:J0,envmap_fragment:Q0,envmap_common_pars_fragment:j0,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:dv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:rv,fog_fragment:sv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:uv,lights_pars_begin:fv,lights_toon_fragment:hv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:_v,lights_physical_fragment:gv,lights_physical_pars_fragment:vv,lights_fragment_begin:xv,lights_fragment_maps:Ev,lights_fragment_end:Sv,lightprobes_pars_fragment:Mv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Av,map_fragment:wv,map_pars_fragment:Rv,map_particle_fragment:Iv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Cv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Fv,normal_fragment_begin:Bv,normal_fragment_maps:Gv,normal_pars_fragment:kv,normal_pars_vertex:Vv,normal_vertex:Hv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:Zv,packing:Kv,premultiplied_alpha_fragment:$v,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:jv,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:rx,shadowmask_pars_fragment:sx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:ux,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:hx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:_x,uv_pars_vertex:gx,uv_vertex:vx,worldpos_vertex:xx,background_vert:Ex,background_frag:Sx,backgroundCube_vert:Mx,backgroundCube_frag:yx,cube_vert:Tx,cube_frag:bx,depth_vert:Ax,depth_frag:wx,distance_vert:Rx,distance_frag:Ix,equirect_vert:Px,equirect_frag:Nx,linedashed_vert:Dx,linedashed_frag:Lx,meshbasic_vert:Cx,meshbasic_frag:Ux,meshlambert_vert:Ox,meshlambert_frag:Fx,meshmatcap_vert:Bx,meshmatcap_frag:Gx,meshnormal_vert:kx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:zx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:Zx,points_frag:Kx,shadow_vert:$x,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:jx},Te={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ui={basic:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:En([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:En([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:En([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:En([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:En([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:En([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:En([Te.common,Te.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:En([Te.lights,Te.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ui.physical={uniforms:En([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Qa={r:0,b:0,g:0},eE=new qt,Jd=new tt;Jd.set(-1,0,0,0,1,0,0,0,1);function tE(n,e,t,i,r,s){const a=new pt(0);let o=r===!0?0:1,u,l,f=null,h=0,p=null;function m(I){let D=I.isScene===!0?I.background:null;if(D&&D.isTexture){const y=I.backgroundBlurriness>0;D=e.get(D,y)}return D}function x(I){let D=!1;const y=m(I);y===null?_(a,o):y&&y.isColor&&(_(y,1),D=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(I,D){const y=m(D);y&&(y.isCubeTexture||y.mapping===Ao)?(l===void 0&&(l=new Sn(new Ts(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:_s(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(eE.makeRotationFromEuler(D.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jd),l.material.toneMapped=gt.getTransfer(y.colorSpace)!==At,(f!==y||h!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Sn(new wo(2,2),new yi({name:"BackgroundMaterial",uniforms:_s(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,u.material.toneMapped=gt.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null))}function _(I,D){I.getRGB(Qa,Yd(n)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,D,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(I,D=1){a.set(I),o=D,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(I){o=I,_(a,o)},render:x,addToRenderList:b,dispose:g}}function nE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(F,k,j,re,Z){let te=!1;const J=h(F,re,j,k);s!==J&&(s=J,l(s.object)),te=m(F,re,j,Z),te&&x(F,re,j,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(F,k,j,re),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function f(F){return n.deleteVertexArray(F)}function h(F,k,j,re){const Z=re.wireframe===!0;let te=i[k.id];te===void 0&&(te={},i[k.id]=te);const J=F.isInstancedMesh===!0?F.id:0;let oe=te[J];oe===void 0&&(oe={},te[J]=oe);let fe=oe[j.id];fe===void 0&&(fe={},oe[j.id]=fe);let _e=fe[Z];return _e===void 0&&(_e=p(u()),fe[Z]=_e),_e}function p(F){const k=[],j=[],re=[];for(let Z=0;Z<t;Z++)k[Z]=0,j[Z]=0,re[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:re,object:F,attributes:{},index:null}}function m(F,k,j,re){const Z=s.attributes,te=k.attributes;let J=0;const oe=j.getAttributes();for(const fe in oe)if(oe[fe].location>=0){const Ee=Z[fe];let Re=te[fe];if(Re===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(Re=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(Re=F.instanceColor)),Ee===void 0||Ee.attribute!==Re||Re&&Ee.data!==Re.data)return!0;J++}return s.attributesNum!==J||s.index!==re}function x(F,k,j,re){const Z={},te=k.attributes;let J=0;const oe=j.getAttributes();for(const fe in oe)if(oe[fe].location>=0){let Ee=te[fe];Ee===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor));const Re={};Re.attribute=Ee,Ee&&Ee.data&&(Re.data=Ee.data),Z[fe]=Re,J++}s.attributes=Z,s.attributesNum=J,s.index=re}function b(){const F=s.newAttributes;for(let k=0,j=F.length;k<j;k++)F[k]=0}function _(F){g(F,0)}function g(F,k){const j=s.newAttributes,re=s.enabledAttributes,Z=s.attributeDivisors;j[F]=1,re[F]===0&&(n.enableVertexAttribArray(F),re[F]=1),Z[F]!==k&&(n.vertexAttribDivisor(F,k),Z[F]=k)}function I(){const F=s.newAttributes,k=s.enabledAttributes;for(let j=0,re=k.length;j<re;j++)k[j]!==F[j]&&(n.disableVertexAttribArray(j),k[j]=0)}function D(F,k,j,re,Z,te,J){J===!0?n.vertexAttribIPointer(F,k,j,Z,te):n.vertexAttribPointer(F,k,j,re,Z,te)}function y(F,k,j,re){b();const Z=re.attributes,te=j.getAttributes(),J=k.defaultAttributeValues;for(const oe in te){const fe=te[oe];if(fe.location>=0){let _e=Z[oe];if(_e===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor)),_e!==void 0){const Ee=_e.normalized,Re=_e.itemSize,nt=e.get(_e);if(nt===void 0)continue;const Mt=nt.buffer,st=nt.type,ae=nt.bytesPerElement,ue=st===n.INT||st===n.UNSIGNED_INT||_e.gpuType===Dc;if(_e.isInterleavedBufferAttribute){const de=_e.data,Xe=de.stride,ze=_e.offset;if(de.isInstancedInterleavedBuffer){for(let We=0;We<fe.locationSize;We++)g(fe.location+We,de.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let We=0;We<fe.locationSize;We++)_(fe.location+We);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let We=0;We<fe.locationSize;We++)D(fe.location+We,Re/fe.locationSize,st,Ee,Xe*ae,(ze+Re/fe.locationSize*We)*ae,ue)}else{if(_e.isInstancedBufferAttribute){for(let de=0;de<fe.locationSize;de++)g(fe.location+de,_e.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let de=0;de<fe.locationSize;de++)_(fe.location+de);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let de=0;de<fe.locationSize;de++)D(fe.location+de,Re/fe.locationSize,st,Ee,Re*ae,Re/fe.locationSize*de*ae,ue)}}else if(J!==void 0){const Ee=J[oe];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(fe.location,Ee);break;case 3:n.vertexAttrib3fv(fe.location,Ee);break;case 4:n.vertexAttrib4fv(fe.location,Ee);break;default:n.vertexAttrib1fv(fe.location,Ee)}}}}I()}function P(){w();for(const F in i){const k=i[F];for(const j in k){const re=k[j];for(const Z in re){const te=re[Z];for(const J in te)f(te[J].object),delete te[J];delete re[Z]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const k=i[F.id];for(const j in k){const re=k[j];for(const Z in re){const te=re[Z];for(const J in te)f(te[J].object),delete te[J];delete re[Z]}}delete i[F.id]}function R(F){for(const k in i){const j=i[k];for(const re in j){const Z=j[re];if(Z[F.id]===void 0)continue;const te=Z[F.id];for(const J in te)f(te[J].object),delete te[J];delete Z[F.id]}}}function v(F){for(const k in i){const j=i[k],re=F.isInstancedMesh===!0?F.id:0,Z=j[re];if(Z!==void 0){for(const te in Z){const J=Z[te];for(const oe in J)f(J[oe].object),delete J[oe];delete Z[te]}delete j[re],Object.keys(j).length===0&&delete i[k]}}}function w(){G(),a=!0,s!==r&&(s=r,l(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:_,disableUnusedAttributes:I}}function iE(n,e,t){let i;function r(u){i=u}function s(u,l){n.drawArrays(i,u,l),t.update(l,i,1)}function a(u,l,f){f!==0&&(n.drawArraysInstanced(i,u,l,f),t.update(l,i,f))}function o(u,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,l,0,f);let p=0;for(let m=0;m<f;m++)p+=l[m];t.update(p,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ni&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hi&&!v)}function u(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=u(l);f!==l&&(Ke("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:y,maxSamples:P,samples:A}}function sE(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new er,o=new tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||r;return r=p,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=f(h,p,0)},this.setState=function(h,p,m){const x=h.clippingPlanes,b=h.clipIntersection,_=h.clipShadows,g=n.get(h);if(!r||x===null||x.length===0||s&&!_)s?f(null):l();else{const I=s?0:i,D=I*4;let y=g.clippingState||null;u.value=y,y=f(x,p,D,m);for(let P=0;P!==D;++P)y[P]=t[P];g.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,m,x){const b=h!==null?h.length:0;let _=null;if(b!==0){if(_=u.value,x!==!0||_===null){const g=m+b*4,I=p.matrixWorldInverse;o.getNormalMatrix(I),(_===null||_.length<g)&&(_=new Float32Array(g));for(let D=0,y=m;D!==b;++D,y+=4)a.copy(h[D]).applyMatrix4(I,o),a.normal.toArray(_,y),_[y+3]=a.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const rr=4,af=[.125,.215,.35,.446,.526,.582],Sr=20,aE=256,Us=new Kc,of=new pt;let _l=null,gl=0,vl=0,xl=!1;const oE=new Y;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=oE}=s;_l=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,r,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,gl,vl),this._renderer.xr.enabled=xl,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Vi,format:ni,colorSpace:go,depthBuffer:!1},r=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lE(s)),this._blurMaterial=uE(s,e,t),this._ggxMaterial=cE(s,e,t)}return r}_compileMaterial(e){const t=new Sn(new Fn,e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r,s){const u=new Yn(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(of),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Ts,new Wd({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let g=!1;const I=e.background;I?I.isColor&&(_.color.copy(I),e.background=null,g=!0):(_.color.copy(of),g=!0);for(let D=0;D<6;D++){const y=D%3;y===0?(u.up.set(0,l[D],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[D],s.y,s.z)):y===1?(u.up.set(0,0,l[D]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[D],s.z)):(u.up.set(0,l[D],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[D]));const P=this._cubeSize;jr(r,y*P,D>2?P:0,P,P),h.setRenderTarget(r),g&&h.render(b,u),h.render(e,u)}h.toneMapping=m,h.autoClear=p,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;jr(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const u=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),p=0+l*1.25,m=h*p,{_lodMax:x}=this,b=this._sizeLods[i],_=3*b*(i>x-rr?i-x+rr:0),g=4*(this._cubeSize-b);u.envMap.value=e.texture,u.roughness.value=m,u.mipInt.value=x-t,jr(s,_,g,3*b,2*b),r.setRenderTarget(s),r.render(o,Us),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=x-i,jr(e,_,g,3*b,2*b),r.setRenderTarget(e),r.render(o,Us)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=l;const p=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sr-1),b=s/x,_=isFinite(s)?1+Math.floor(f*b):Sr;_>Sr&&Ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Sr}`);const g=[];let I=0;for(let R=0;R<Sr;++R){const v=R/b,w=Math.exp(-v*v/2);g.push(w),R===0?I+=w:R<_&&(I+=2*w)}for(let R=0;R<g.length;R++)g[R]=g[R]/I;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:D}=this;p.dTheta.value=x,p.mipInt.value=D-i;const y=this._sizeLods[r],P=3*y*(r>D-rr?r-D+rr:0),A=4*(this._cubeSize-y);jr(t,P,A,3*y,2*y),u.setRenderTarget(t),u.render(h,Us)}}function lE(n){const e=[],t=[],i=[];let r=n;const s=n-rr+1+af.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let u=1/o;a>n-rr?u=af[a-n+rr-1]:a===0&&(u=0),t.push(u);const l=1/(o-2),f=-l,h=1+l,p=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,b=3,_=2,g=1,I=new Float32Array(b*x*m),D=new Float32Array(_*x*m),y=new Float32Array(g*x*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,v=A>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];I.set(w,b*x*A),D.set(p,_*x*A);const G=[A,A,A,A,A,A];y.set(G,g*x*A)}const P=new Fn;P.setAttribute("position",new vi(I,b)),P.setAttribute("uv",new vi(D,_)),P.setAttribute("faceIndex",new vi(y,g)),i.push(new Sn(P,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function cf(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cE(n,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function uE(n,e,t){const i=new Float32Array(Sr),r=new Y(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function uf(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ff(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qd extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ts(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Bi});s.uniforms.tEquirect.value=t;const a=new Sn(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=pn),new m0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function fE(n){let e=new WeakMap,t=new WeakMap,i=null;function r(p,m=!1){return p==null?null:m?a(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===Wo||m===Xo)if(e.has(p)){const x=e.get(p).texture;return o(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const b=new Qd(x.height);return b.fromEquirectangularTexture(n,p),e.set(p,b),p.addEventListener("dispose",l),o(b.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const m=p.mapping,x=m===Wo||m===Xo,b=m===Ir||m===ps;if(x||b){let _=t.get(p);const g=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==g)return i===null&&(i=new lf(n)),_=x?i.fromEquirectangular(p,_):i.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),_.texture;if(_!==void 0)return _.texture;{const I=p.image;return x&&I&&I.height>0||b&&I&&u(I)?(i===null&&(i=new lf(n)),_=x?i.fromEquirectangular(p):i.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),p.addEventListener("dispose",f),_.texture):null}}}return p}function o(p,m){return m===Wo?p.mapping=Ir:m===Xo&&(p.mapping=ps),p}function u(p){let m=0;const x=6;for(let b=0;b<x;b++)p[b]!==void 0&&m++;return m===x}function l(p){const m=p.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(p){const m=p.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function dE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&as("WebGLRenderer: "+i+" extension not supported."),r}}}function hE(n,e,t,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function u(h){const p=h.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(h){const p=[],m=h.index,x=h.attributes.position;let b=0;if(x===void 0)return;if(m!==null){const I=m.array;b=m.version;for(let D=0,y=I.length;D<y;D+=3){const P=I[D+0],A=I[D+1],R=I[D+2];p.push(P,A,A,R,R,P)}}else{const I=x.array;b=x.version;for(let D=0,y=I.length/3-1;D<y;D+=3){const P=D+0,A=D+1,R=D+2;p.push(P,A,A,R,R,P)}}const _=new(x.count>=65535?Hd:Vd)(p,1);_.version=b;const g=s.get(h);g&&e.remove(g),s.set(h,_)}function f(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:u,getWireframeAttribute:f}}function pE(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function u(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function l(h,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,h*a,m),t.update(p,i,m))}function f(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let b=0;for(let _=0;_<m;_++)b+=p[_];t.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=f}function mE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _E(n,e,t){const i=new WeakMap,r=new Xt;function s(a,o,u){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let G=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],I=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),b===!0&&(y=2),_===!0&&(y=3);let P=o.attributes.position.count*y,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*A*4*h),v=new Gd(R,P,A,h);v.type=hi,v.needsUpdate=!0;const w=y*4;for(let F=0;F<h;F++){const k=g[F],j=I[F],re=D[F],Z=P*A*4*F;for(let te=0;te<k.count;te++){const J=te*w;x===!0&&(r.fromBufferAttribute(k,te),R[Z+J+0]=r.x,R[Z+J+1]=r.y,R[Z+J+2]=r.z,R[Z+J+3]=0),b===!0&&(r.fromBufferAttribute(j,te),R[Z+J+4]=r.x,R[Z+J+5]=r.y,R[Z+J+6]=r.z,R[Z+J+7]=0),_===!0&&(r.fromBufferAttribute(re,te),R[Z+J+8]=r.x,R[Z+J+9]=r.y,R[Z+J+10]=r.z,R[Z+J+11]=re.itemSize===4?r.w:1)}}p={count:h,texture:v,size:new mt(P,A)},i.set(o,p),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let _=0;_<l.length;_++)x+=l[_];const b=o.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",l)}u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function gE(n,e,t,i,r){let s=new WeakMap;function a(l){const f=r.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",u)===!1&&l.addEventListener("dispose",u),s.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return p}function o(){s=new WeakMap}function u(l){const f=l.target;f.removeEventListener("dispose",u),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const vE={[yd]:"LINEAR_TONE_MAPPING",[Td]:"REINHARD_TONE_MAPPING",[bd]:"CINEON_TONE_MAPPING",[Ad]:"ACES_FILMIC_TONE_MAPPING",[Rd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[wd]:"CUSTOM_TONE_MAPPING"};function xE(n,e,t,i,r,s){const a=new gi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ms(e,t):void 0}),o=new gi(e,t,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),u=new Fn;u.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const l=new l0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Sn(u,l),h=new Kc(-1,1,1,-1,0,1);let p=null,m=null,x=!1,b,_=null,g=[],I=!1;this.setSize=function(D,y){a.setSize(D,y),o.setSize(D,y);for(let P=0;P<g.length;P++){const A=g[P];A.setSize&&A.setSize(D,y)}},this.setEffects=function(D){g=D,I=g.length>0&&g[0].isRenderPass===!0;const y=a.width,P=a.height;for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(y,P)}},this.begin=function(D,y){if(x||D.toneMapping===_i&&g.length===0)return!1;if(_=y,y!==null){const P=y.width,A=y.height;(a.width!==P||a.height!==A)&&this.setSize(P,A)}return I===!1&&D.setRenderTarget(a),b=D.toneMapping,D.toneMapping=_i,!0},this.hasRenderPass=function(){return I},this.end=function(D,y){D.toneMapping=b,x=!0;let P=a,A=o;for(let R=0;R<g.length;R++){const v=g[R];if(v.enabled!==!1&&(v.render(D,A,P,y),v.needsSwap!==!1)){const w=P;P=A,A=w}}if(p!==D.outputColorSpace||m!==D.toneMapping){p=D.outputColorSpace,m=D.toneMapping,l.defines={},gt.getTransfer(p)===At&&(l.defines.SRGB_TRANSFER="");const R=vE[m];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=P.texture,D.setRenderTarget(_),D.render(f,h),_=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),u.dispose(),l.dispose()}}const jd=new Mn,Ec=new ms(1,1),eh=new Gd,th=new Gg,nh=new Xd,df=[],hf=[],pf=new Float32Array(16),mf=new Float32Array(9),_f=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Io(n,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function ME(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function yE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function TE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),tn(t,i)}}function bE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),tn(t,i)}}function AE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),tn(t,i)}}function wE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function IE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function PE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function NE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function LE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function CE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function UE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ec.compareFunction=t.isReversedDepthBuffer()?Gc:Bc,s=Ec):s=jd,t.setTexture2D(e||s,r)}function OE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||th,r)}function FE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nh,r)}function BE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||eh,r)}function GE(n){switch(n){case 5126:return EE;case 35664:return SE;case 35665:return ME;case 35666:return yE;case 35674:return TE;case 35675:return bE;case 35676:return AE;case 5124:case 35670:return wE;case 35667:case 35671:return RE;case 35668:case 35672:return IE;case 35669:case 35673:return PE;case 5125:return NE;case 36294:return DE;case 36295:return LE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return BE}}function kE(n,e){n.uniform1fv(this.addr,e)}function VE(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function HE(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function zE(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function WE(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XE(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qE(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YE(n,e){n.uniform1iv(this.addr,e)}function ZE(n,e){n.uniform2iv(this.addr,e)}function KE(n,e){n.uniform3iv(this.addr,e)}function $E(n,e){n.uniform4iv(this.addr,e)}function JE(n,e){n.uniform1uiv(this.addr,e)}function QE(n,e){n.uniform2uiv(this.addr,e)}function jE(n,e){n.uniform3uiv(this.addr,e)}function eS(n,e){n.uniform4uiv(this.addr,e)}function tS(n,e,t){const i=this.cache,r=e.length,s=Io(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ec:a=jd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=Io(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||th,s[a])}function iS(n,e,t){const i=this.cache,r=e.length,s=Io(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nh,s[a])}function rS(n,e,t){const i=this.cache,r=e.length,s=Io(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||eh,s[a])}function sS(n){switch(n){case 5126:return kE;case 35664:return VE;case 35665:return HE;case 35666:return zE;case 35674:return WE;case 35675:return XE;case 35676:return qE;case 5124:case 35670:return YE;case 35667:case 35671:return ZE;case 35668:case 35672:return KE;case 35669:case 35673:return $E;case 5125:return JE;case 36294:return QE;case 36295:return jE;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}class aS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GE(t.type)}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const El=/(\w+)(\])?(\[|\.)?/g;function gf(n,e){n.seq.push(e),n.map[e.id]=e}function cS(n,e,t){const i=n.name,r=i.length;for(El.lastIndex=0;;){const s=El.exec(i),a=El.lastIndex;let o=s[1];const u=s[2]==="]",l=s[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===r){gf(t,l===void 0?new aS(o,n,e):new oS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new lS(o),gf(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);cS(o,u,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=i[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uS=37297;let fS=0;function dS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xf=new tt;function hS(n){gt._getMatrix(xf,gt.workingColorSpace,n);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case vo:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ef(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+dS(n.getShaderSource(e),o)}else return s}function pS(n,e){const t=hS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mS={[yd]:"Linear",[Td]:"Reinhard",[bd]:"Cineon",[Ad]:"ACESFilmic",[Rd]:"AgX",[Id]:"Neutral",[wd]:"Custom"};function _S(n,e){const t=mS[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new Y;function gS(){gt.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function xS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ES(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function Sf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(SS,yS)}const MS=new Map;function yS(n,e){let t=ot[e];if(t===void 0){const i=MS.get(e);if(i!==void 0)t=ot[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sc(t)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(TS,bS)}function bS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AS={[eo]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function wS(n){return AS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RS={[Ir]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function IS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":RS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const PS={[ps]:"ENVMAP_MODE_REFRACTION"};function NS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":PS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DS={[Md]:"ENVMAP_BLENDING_MULTIPLY",[ig]:"ENVMAP_BLENDING_MIX",[rg]:"ENVMAP_BLENDING_ADD"};function LS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":DS[n.combine]||"ENVMAP_BLENDING_NONE"}function CS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function US(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=wS(t),l=IS(t),f=NS(t),h=LS(t),p=CS(t),m=vS(t),x=xS(s),b=r.createProgram();let _,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),g.length>0&&(g+=`
`)):(_=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),g=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?ot.tonemapping_pars_fragment:"",t.toneMapping!==_i?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Sc(a),a=Sf(a,t),a=Mf(a,t),o=Sc(o),o=Sf(o,t),o=Mf(o,t),a=yf(a),o=yf(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+_+a,y=I+g+o,P=vf(r,r.VERTEX_SHADER,D),A=vf(r,r.FRAGMENT_SHADER,y);r.attachShader(b,P),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(F){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(b)||"",j=r.getShaderInfoLog(P)||"",re=r.getShaderInfoLog(A)||"",Z=k.trim(),te=j.trim(),J=re.trim();let oe=!0,fe=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,P,A);else{const _e=Ef(r,P,"vertex"),Ee=Ef(r,A,"fragment");vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+_e+`
`+Ee)}else Z!==""?Ke("WebGLProgram: Program Info Log:",Z):(te===""||J==="")&&(fe=!1);fe&&(F.diagnostics={runnable:oe,programLog:Z,vertexShader:{log:te,prefix:_},fragmentShader:{log:J,prefix:g}})}r.deleteShader(P),r.deleteShader(A),v=new so(r,b),w=ES(r,b)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(b,uS)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=A,this}let OS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BS(e),t.set(e,i)),i}}class BS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function GS(n){return n===Pr||n===mo||n===_o}function kS(n,e,t,i,r,s){const a=new Hc,o=new FS,u=new Set,l=[],f=new Map,h=i.logarithmicDepthBuffer;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return u.add(v),v===0?"uv":`uv${v}`}function b(v,w,G,F,k,j){const re=F.fog,Z=k.geometry,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,oe=e.get(v.envMap||te,J),fe=oe&&oe.mapping===Ao?oe.image.height:null,_e=m[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const Ee=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=Ee!==void 0?Ee.length:0;let nt=0;Z.morphAttributes.position!==void 0&&(nt=1),Z.morphAttributes.normal!==void 0&&(nt=2),Z.morphAttributes.color!==void 0&&(nt=3);let Mt,st,ae,ue;if(_e){const Oe=ui[_e];Mt=Oe.vertexShader,st=Oe.fragmentShader}else{Mt=v.vertexShader,st=v.fragmentShader;const Oe=o.getVertexShaderStage(v),Gt=o.getFragmentShaderStage(v);o.update(v,Oe,Gt),ae=Oe.id,ue=Gt.id}const de=n.getRenderTarget(),Xe=n.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,We=k.isBatchedMesh===!0,Pt=!!v.map,it=!!v.matcap,St=!!oe,dt=!!v.aoMap,ct=!!v.lightMap,Ft=!!v.bumpMap&&v.wireframe===!1,Bt=!!v.normalMap,Yt=!!v.displacementMap,Lt=!!v.emissiveMap,Nt=!!v.metalnessMap,Ct=!!v.roughnessMap,W=v.anisotropy>0,Ue=v.clearcoat>0,at=v.dispersion>0,d=v.iridescence>0,c=v.sheen>0,E=v.transmission>0,T=W&&!!v.anisotropyMap,N=Ue&&!!v.clearcoatMap,C=Ue&&!!v.clearcoatNormalMap,z=Ue&&!!v.clearcoatRoughnessMap,L=d&&!!v.iridescenceMap,B=d&&!!v.iridescenceThicknessMap,ne=c&&!!v.sheenColorMap,he=c&&!!v.sheenRoughnessMap,se=!!v.specularMap,le=!!v.specularColorMap,we=!!v.specularIntensityMap,Ne=E&&!!v.transmissionMap,Ze=E&&!!v.thicknessMap,V=!!v.gradientMap,ve=!!v.alphaMap,ie=v.alphaTest>0,xe=!!v.alphaHash,Se=!!v.extensions;let ce=_i;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Le={shaderID:_e,shaderType:v.type,shaderName:v.name,vertexShader:Mt,fragmentShader:st,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:We,batchingColor:We&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:it,envMap:St,envMapMode:St&&oe.mapping,envMapCubeUVHeight:fe,aoMap:dt,lightMap:ct,bumpMap:Ft,normalMap:Bt,displacementMap:Yt,emissiveMap:Lt,normalMapObjectSpace:Bt&&v.normalMapType===og,normalMapTangentSpace:Bt&&v.normalMapType===vc,packedNormalMap:Bt&&v.normalMapType===vc&&GS(v.normalMap.format),metalnessMap:Nt,roughnessMap:Ct,anisotropy:W,anisotropyMap:T,clearcoat:Ue,clearcoatMap:N,clearcoatNormalMap:C,clearcoatRoughnessMap:z,dispersion:at,iridescence:d,iridescenceMap:L,iridescenceThicknessMap:B,sheen:c,sheenColorMap:ne,sheenRoughnessMap:he,specularMap:se,specularColorMap:le,specularIntensityMap:we,transmission:E,transmissionMap:Ne,thicknessMap:Ze,gradientMap:V,opaque:v.transparent===!1&&v.blending===ss&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:ie,alphaHash:xe,combine:v.combine,mapUv:Pt&&x(v.map.channel),aoMapUv:dt&&x(v.aoMap.channel),lightMapUv:ct&&x(v.lightMap.channel),bumpMapUv:Ft&&x(v.bumpMap.channel),normalMapUv:Bt&&x(v.normalMap.channel),displacementMapUv:Yt&&x(v.displacementMap.channel),emissiveMapUv:Lt&&x(v.emissiveMap.channel),metalnessMapUv:Nt&&x(v.metalnessMap.channel),roughnessMapUv:Ct&&x(v.roughnessMap.channel),anisotropyMapUv:T&&x(v.anisotropyMap.channel),clearcoatMapUv:N&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:C&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:B&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(v.sheenRoughnessMap.channel),specularMapUv:se&&x(v.specularMap.channel),specularColorMapUv:le&&x(v.specularColorMap.channel),specularIntensityMapUv:we&&x(v.specularIntensityMap.channel),transmissionMapUv:Ne&&x(v.transmissionMap.channel),thicknessMapUv:Ze&&x(v.thicknessMap.channel),alphaMapUv:ve&&x(v.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Bt||W),vertexNormals:!!Z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Pt||ve),fog:!!re,useFog:v.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Z.attributes.normal===void 0&&Bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Xe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===At,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&gt.getTransfer(v.emissiveMap.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=u.has(1),Le.vertexUv2s=u.has(2),Le.vertexUv3s=u.has(3),u.clear(),Le}function _(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)w.push(G),w.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(g(w,v),I(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function I(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function D(v){const w=m[v.type];let G;if(w){const F=ui[w];G=s0.clone(F.uniforms)}else G=v.uniforms;return G}function y(v,w){let G=f.get(w);return G!==void 0?++G.usedTimes:(G=new US(n,w,v,r),l.push(G),f.set(w,G)),G}function P(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:D,acquireProgram:y,releaseProgram:P,releaseShaderCache:A,programs:l,dispose:R}}function VS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,u){n.get(a)[o]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function HS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,x,b,_,g){let I=n[e];return I===void 0?(I={id:p.id,object:p,geometry:m,material:x,materialVariant:a(p),groupOrder:b,renderOrder:p.renderOrder,z:_,group:g},n[e]=I):(I.id=p.id,I.object=p,I.geometry=m,I.material=x,I.materialVariant=a(p),I.groupOrder=b,I.renderOrder=p.renderOrder,I.z=_,I.group=g),e++,I}function u(p,m,x,b,_,g){const I=o(p,m,x,b,_,g);x.transmission>0?i.push(I):x.transparent===!0?r.push(I):t.push(I)}function l(p,m,x,b,_,g){const I=o(p,m,x,b,_,g);x.transmission>0?i.unshift(I):x.transparent===!0?r.unshift(I):t.unshift(I)}function f(p,m,x){t.length>1&&t.sort(p||HS),i.length>1&&i.sort(m||bf),r.length>1&&r.sort(m||bf),x&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let p=e,m=n.length;p<m;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:u,unshift:l,finish:h,sort:f}}function zS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Af,n.set(i,[a])):r>=s.length?(a=new Af,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function WS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qS=0;function YS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZS(n){const e=new WS,t=XS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Y);const r=new Y,s=new qt,a=new qt;function o(l){let f=0,h=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,b=0,_=0,g=0,I=0,D=0,y=0,P=0,A=0,R=0;l.sort(YS);for(let w=0,G=l.length;w<G;w++){const F=l[w],k=F.color,j=F.intensity,re=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Pr?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)f+=k.r*j,h+=k.g*j,p+=k.b*j;else if(F.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(F.sh.coefficients[te],j);R++}else if(F.isDirectionalLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,oe=t.get(F);oe.shadowIntensity=J.intensity,oe.shadowBias=J.bias,oe.shadowNormalBias=J.normalBias,oe.shadowRadius=J.radius,oe.shadowMapSize=J.mapSize,i.directionalShadow[m]=oe,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=F.shadow.matrix,I++}i.directional[m]=te,m++}else if(F.isSpotLight){const te=e.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(k).multiplyScalar(j),te.distance=re,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,i.spot[b]=te;const J=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,J.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[b]=J.matrix,F.castShadow){const oe=t.get(F);oe.shadowIntensity=J.intensity,oe.shadowBias=J.bias,oe.shadowNormalBias=J.normalBias,oe.shadowRadius=J.radius,oe.shadowMapSize=J.mapSize,i.spotShadow[b]=oe,i.spotShadowMap[b]=Z,y++}b++}else if(F.isRectAreaLight){const te=e.get(F);te.color.copy(k).multiplyScalar(j),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=te,_++}else if(F.isPointLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),te.distance=F.distance,te.decay=F.decay,F.castShadow){const J=F.shadow,oe=t.get(F);oe.shadowIntensity=J.intensity,oe.shadowBias=J.bias,oe.shadowNormalBias=J.normalBias,oe.shadowRadius=J.radius,oe.shadowMapSize=J.mapSize,oe.shadowCameraNear=J.camera.near,oe.shadowCameraFar=J.camera.far,i.pointShadow[x]=oe,i.pointShadowMap[x]=Z,i.pointShadowMatrix[x]=F.shadow.matrix,D++}i.point[x]=te,x++}else if(F.isHemisphereLight){const te=e.get(F);te.skyColor.copy(F.color).multiplyScalar(j),te.groundColor.copy(F.groundColor).multiplyScalar(j),i.hemi[g]=te,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const v=i.hash;(v.directionalLength!==m||v.pointLength!==x||v.spotLength!==b||v.rectAreaLength!==_||v.hemiLength!==g||v.numDirectionalShadows!==I||v.numPointShadows!==D||v.numSpotShadows!==y||v.numSpotMaps!==P||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=_,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=y+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,v.directionalLength=m,v.pointLength=x,v.spotLength=b,v.rectAreaLength=_,v.hemiLength=g,v.numDirectionalShadows=I,v.numPointShadows=D,v.numSpotShadows=y,v.numSpotMaps=P,v.numLightProbes=R,i.version=qS++)}function u(l,f){let h=0,p=0,m=0,x=0,b=0;const _=f.matrixWorldInverse;for(let g=0,I=l.length;g<I;g++){const D=l[g];if(D.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(D.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(D.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),m++}else if(D.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(D.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(D.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(D.width*.5,0,0),y.halfHeight.set(0,D.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(D.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(D.matrixWorld),y.position.applyMatrix4(_),p++}else if(D.isHemisphereLight){const y=i.hemi[b];y.direction.setFromMatrixPosition(D.matrixWorld),y.direction.transformDirection(_),b++}}}return{setup:o,setupView:u,state:i}}function wf(n){const e=new ZS(n),t=[],i=[],r=[];function s(p){h.camera=p,t.length=0,i.length=0,r.length=0}function a(p){t.push(p)}function o(p){i.push(p)}function u(p){r.push(p)}function l(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:u}}function KS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wf(n),e.set(r,[o])):s>=a.length?(o=new wf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],jS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Rf=new qt,Os=new Y,Sl=new Y;function eM(n,e,t){let i=new Xc;const r=new mt,s=new mt,a=new Xt,o=new c0,u=new u0,l={},f=t.maxTextureSize,h={[ur]:In,[In]:ur,[Ui]:Ui},p=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:$S,fragmentShader:JS}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Fn;x.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Sn(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let g=this.type;this.render=function(A,R,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===B_&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);const w=n.getRenderTarget(),G=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Bi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=g!==this.type;j&&R.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(Z=>Z.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,Z=A.length;re<Z;re++){const te=A[re],J=te.shadow;if(J===void 0){Ke("WebGLShadowMap:",te,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const oe=J.getFrameExtents();r.multiply(oe),s.copy(J.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/oe.x),r.x=s.x*oe.x,J.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/oe.y),r.y=s.y*oe.y,J.mapSize.y=s.y));const fe=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=fe,J.map===null||j===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Vs){if(te.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new gi(r.x,r.y,{format:Pr,type:Vi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),J.map.texture.name=te.name+".shadowMap",J.map.depthTexture=new ms(r.x,r.y,hi),J.map.depthTexture.name=te.name+".shadowMapDepth",J.map.depthTexture.format=Hi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ln,J.map.depthTexture.magFilter=ln}else te.isPointLight?(J.map=new Qd(r.x),J.map.depthTexture=new i0(r.x,Mi)):(J.map=new gi(r.x,r.y),J.map.depthTexture=new ms(r.x,r.y,Mi)),J.map.depthTexture.name=te.name+".shadowMap",J.map.depthTexture.format=Hi,this.type===eo?(J.map.depthTexture.compareFunction=fe?Gc:Bc,J.map.depthTexture.minFilter=pn,J.map.depthTexture.magFilter=pn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ln,J.map.depthTexture.magFilter=ln);J.camera.updateProjectionMatrix()}const _e=J.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<_e;Ee++){if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(J.map),n.clear());const Re=J.getViewport(Ee);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),k.viewport(a)}if(te.isPointLight){const Re=J.camera,nt=J.matrix,Mt=te.distance||Re.far;Mt!==Re.far&&(Re.far=Mt,Re.updateProjectionMatrix()),Os.setFromMatrixPosition(te.matrixWorld),Re.position.copy(Os),Sl.copy(Re.position),Sl.add(QS[Ee]),Re.up.copy(jS[Ee]),Re.lookAt(Sl),Re.updateMatrixWorld(),nt.makeTranslation(-Os.x,-Os.y,-Os.z),Rf.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Rf,Re.coordinateSystem,Re.reversedDepth)}else J.updateMatrices(te);i=J.getFrustum(),y(R,v,J.camera,te,this.type)}J.isPointLightShadow!==!0&&this.type===Vs&&I(J,v),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(w,G,F)};function I(A,R){const v=e.update(b);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(r.x,r.y,{format:Pr,type:Vi})),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,v,p,b,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,v,m,b,null)}function D(A,R,v,w){let G=null;const F=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)G=F;else if(G=v.isPointLight===!0?u:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=G.uuid,j=R.uuid;let re=l[k];re===void 0&&(re={},l[k]=re);let Z=re[j];Z===void 0&&(Z=G.clone(),re[j]=Z,R.addEventListener("dispose",P)),G=Z}if(G.visible=R.visible,G.wireframe=R.wireframe,w===Vs?G.side=R.shadowSide!==null?R.shadowSide:R.side:G.side=R.shadowSide!==null?R.shadowSide:h[R.side],G.alphaMap=R.alphaMap,G.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,G.map=R.map,G.clipShadows=R.clipShadows,G.clippingPlanes=R.clippingPlanes,G.clipIntersection=R.clipIntersection,G.displacementMap=R.displacementMap,G.displacementScale=R.displacementScale,G.displacementBias=R.displacementBias,G.wireframeLinewidth=R.wireframeLinewidth,G.linewidth=R.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const k=n.properties.get(G);k.light=v}return G}function y(A,R,v,w,G){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&G===Vs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const j=e.update(A),re=A.material;if(Array.isArray(re)){const Z=j.groups;for(let te=0,J=Z.length;te<J;te++){const oe=Z[te],fe=re[oe.materialIndex];if(fe&&fe.visible){const _e=D(A,fe,w,G);A.onBeforeShadow(n,A,R,v,j,_e,oe),n.renderBufferDirect(v,null,j,_e,A,oe),A.onAfterShadow(n,A,R,v,j,_e,oe)}}}else if(re.visible){const Z=D(A,re,w,G);A.onBeforeShadow(n,A,R,v,j,Z,null),n.renderBufferDirect(v,null,j,Z,A,null),A.onAfterShadow(n,A,R,v,j,Z,null)}}const k=A.children;for(let j=0,re=k.length;j<re;j++)y(k[j],R,v,w,G)}function P(A){A.target.removeEventListener("dispose",P);for(const v in l){const w=l[v],G=A.target.uuid;G in w&&(w[G].dispose(),delete w[G])}}}function tM(n,e){function t(){let V=!1;const ve=new Xt;let ie=null;const xe=new Xt(0,0,0,0);return{setMask:function(Se){ie!==Se&&!V&&(n.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){V=Se},setClear:function(Se,ce,Le,Oe,Gt){Gt===!0&&(Se*=Oe,ce*=Oe,Le*=Oe),ve.set(Se,ce,Le,Oe),xe.equals(ve)===!1&&(n.clearColor(Se,ce,Le,Oe),xe.copy(ve))},reset:function(){V=!1,ie=null,xe.set(-1,0,0,0)}}}function i(){let V=!1,ve=!1,ie=null,xe=null,Se=null;return{setReversed:function(ce){if(ve!==ce){const Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ve=ce;const Oe=Se;Se=null,this.setClear(Oe)}},getReversed:function(){return ve},setTest:function(ce){ce?de(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(ce){ie!==ce&&!V&&(n.depthMask(ce),ie=ce)},setFunc:function(ce){if(ve&&(ce=gg[ce]),xe!==ce){switch(ce){case Ll:n.depthFunc(n.NEVER);break;case Cl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case Gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ce}},setLocked:function(ce){V=ce},setClear:function(ce){Se!==ce&&(Se=ce,ve&&(ce=1-ce),n.clearDepth(ce))},reset:function(){V=!1,ie=null,xe=null,Se=null,ve=!1}}}function r(){let V=!1,ve=null,ie=null,xe=null,Se=null,ce=null,Le=null,Oe=null,Gt=null;return{setTest:function(wt){V||(wt?de(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(wt){ve!==wt&&!V&&(n.stencilMask(wt),ve=wt)},setFunc:function(wt,Bn,Gn){(ie!==wt||xe!==Bn||Se!==Gn)&&(n.stencilFunc(wt,Bn,Gn),ie=wt,xe=Bn,Se=Gn)},setOp:function(wt,Bn,Gn){(ce!==wt||Le!==Bn||Oe!==Gn)&&(n.stencilOp(wt,Bn,Gn),ce=wt,Le=Bn,Oe=Gn)},setLocked:function(wt){V=wt},setClear:function(wt){Gt!==wt&&(n.clearStencil(wt),Gt=wt)},reset:function(){V=!1,ve=null,ie=null,xe=null,Se=null,ce=null,Le=null,Oe=null,Gt=null}}}const s=new t,a=new i,o=new r,u=new WeakMap,l=new WeakMap;let f={},h={},p={},m=new WeakMap,x=[],b=null,_=!1,g=null,I=null,D=null,y=null,P=null,A=null,R=null,v=new pt(0,0,0),w=0,G=!1,F=null,k=null,j=null,re=null,Z=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,oe=0;const fe=n.getParameter(n.VERSION);fe.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(fe)[1]),J=oe>=1):fe.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),J=oe>=2);let _e=null,Ee={};const Re=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),Mt=new Xt().fromArray(Re),st=new Xt().fromArray(nt);function ae(V,ve,ie,xe){const Se=new Uint8Array(4),ce=n.createTexture();n.bindTexture(V,ce),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<ie;Le++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ve+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ce}const ue={};ue[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(n.DEPTH_TEST),a.setFunc(hs),Ft(!1),Bt(Au),de(n.CULL_FACE),dt(Bi);function de(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function Xe(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function ze(V,ve){return p[V]!==ve?(n.bindFramebuffer(V,ve),p[V]=ve,V===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ve),V===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function We(V,ve){let ie=x,xe=!1;if(V){ie=m.get(ve),ie===void 0&&(ie=[],m.set(ve,ie));const Se=V.textures;if(ie.length!==Se.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Le=Se.length;ce<Le;ce++)ie[ce]=n.COLOR_ATTACHMENT0+ce;ie.length=Se.length,xe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ie)}function Pt(V){return b!==V?(n.useProgram(V),b=V,!0):!1}const it={[Er]:n.FUNC_ADD,[k_]:n.FUNC_SUBTRACT,[V_]:n.FUNC_REVERSE_SUBTRACT};it[H_]=n.MIN,it[z_]=n.MAX;const St={[W_]:n.ZERO,[X_]:n.ONE,[q_]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Q_]:n.SRC_ALPHA_SATURATE,[$_]:n.DST_COLOR,[Z_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[Dl]:n.ONE_MINUS_SRC_ALPHA,[J_]:n.ONE_MINUS_DST_COLOR,[K_]:n.ONE_MINUS_DST_ALPHA,[j_]:n.CONSTANT_COLOR,[eg]:n.ONE_MINUS_CONSTANT_COLOR,[tg]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(V,ve,ie,xe,Se,ce,Le,Oe,Gt,wt){if(V===Bi){_===!0&&(Xe(n.BLEND),_=!1);return}if(_===!1&&(de(n.BLEND),_=!0),V!==G_){if(V!==g||wt!==G){if((I!==Er||P!==Er)&&(n.blendEquation(n.FUNC_ADD),I=Er,P=Er),wt)switch(V){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Iu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:vt("WebGLState: Invalid blending: ",V);break}else switch(V){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",V);break}D=null,y=null,A=null,R=null,v.set(0,0,0),w=0,g=V,G=wt}return}Se=Se||ve,ce=ce||ie,Le=Le||xe,(ve!==I||Se!==P)&&(n.blendEquationSeparate(it[ve],it[Se]),I=ve,P=Se),(ie!==D||xe!==y||ce!==A||Le!==R)&&(n.blendFuncSeparate(St[ie],St[xe],St[ce],St[Le]),D=ie,y=xe,A=ce,R=Le),(Oe.equals(v)===!1||Gt!==w)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Gt),v.copy(Oe),w=Gt),g=V,G=!1}function ct(V,ve){V.side===Ui?Xe(n.CULL_FACE):de(n.CULL_FACE);let ie=V.side===In;ve&&(ie=!ie),Ft(ie),V.blending===ss&&V.transparent===!1?dt(Bi):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const xe=V.stencilWrite;o.setTest(xe),xe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Lt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(V){F!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),F=V)}function Bt(V){V!==O_?(de(n.CULL_FACE),V!==k&&(V===Au?n.cullFace(n.BACK):V===F_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),k=V}function Yt(V){V!==j&&(J&&n.lineWidth(V),j=V)}function Lt(V,ve,ie){V?(de(n.POLYGON_OFFSET_FILL),(re!==ve||Z!==ie)&&(re=ve,Z=ie,a.getReversed()&&(ve=-ve),n.polygonOffset(ve,ie))):Xe(n.POLYGON_OFFSET_FILL)}function Nt(V){V?de(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function Ct(V){V===void 0&&(V=n.TEXTURE0+te-1),_e!==V&&(n.activeTexture(V),_e=V)}function W(V,ve,ie){ie===void 0&&(_e===null?ie=n.TEXTURE0+te-1:ie=_e);let xe=Ee[ie];xe===void 0&&(xe={type:void 0,texture:void 0},Ee[ie]=xe),(xe.type!==V||xe.texture!==ve)&&(_e!==ie&&(n.activeTexture(ie),_e=ie),n.bindTexture(V,ve||ue[V]),xe.type=V,xe.texture=ve)}function Ue(){const V=Ee[_e];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function d(){try{n.compressedTexImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function c(){try{n.texSubImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function E(){try{n.texSubImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function T(){try{n.compressedTexSubImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function N(){try{n.compressedTexSubImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function C(){try{n.texStorage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function z(){try{n.texStorage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function L(){try{n.texImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function B(){try{n.texImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function ne(V){return h[V]!==void 0?h[V]:n.getParameter(V)}function he(V,ve){h[V]!==ve&&(n.pixelStorei(V,ve),h[V]=ve)}function se(V){Mt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Mt.copy(V))}function le(V){st.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),st.copy(V))}function we(V,ve){let ie=l.get(ve);ie===void 0&&(ie=new WeakMap,l.set(ve,ie));let xe=ie.get(V);xe===void 0&&(xe=n.getUniformBlockIndex(ve,V.name),ie.set(V,xe))}function Ne(V,ve){const xe=l.get(ve).get(V);u.get(ve)!==xe&&(n.uniformBlockBinding(ve,xe,V.__bindingPointIndex),u.set(ve,xe))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},_e=null,Ee={},p={},m=new WeakMap,x=[],b=null,_=!1,g=null,I=null,D=null,y=null,P=null,A=null,R=null,v=new pt(0,0,0),w=0,G=!1,F=null,k=null,j=null,re=null,Z=null,Mt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:Xe,bindFramebuffer:ze,drawBuffers:We,useProgram:Pt,setBlending:dt,setMaterial:ct,setFlipSided:Ft,setCullFace:Bt,setLineWidth:Yt,setPolygonOffset:Lt,setScissorTest:Nt,activeTexture:Ct,bindTexture:W,unbindTexture:Ue,compressedTexImage2D:at,compressedTexImage3D:d,texImage2D:L,texImage3D:B,pixelStorei:he,getParameter:ne,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:C,texStorage3D:z,texSubImage2D:c,texSubImage3D:E,compressedTexSubImage2D:T,compressedTexSubImage3D:N,scissor:se,viewport:le,reset:Ze}}function nM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,f=new WeakMap,h=new Set;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(d,c){return x?new OffscreenCanvas(d,c):xo("canvas")}function _(d,c,E){let T=1;const N=at(d);if((N.width>E||N.height>E)&&(T=E/Math.max(N.width,N.height)),T<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const C=Math.floor(T*N.width),z=Math.floor(T*N.height);p===void 0&&(p=b(C,z));const L=c?b(C,z):p;return L.width=C,L.height=z,L.getContext("2d").drawImage(d,0,0,C,z),Ke("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+C+"x"+z+")."),L}else return"data"in d&&Ke("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),d;return d}function g(d){return d.generateMipmaps}function I(d){n.generateMipmap(d)}function D(d){return d.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?n.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(d,c,E,T,N,C=!1){if(d!==null){if(n[d]!==void 0)return n[d];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let z;T&&(z=e.get("EXT_texture_norm16"),z||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=c;if(c===n.RED&&(E===n.FLOAT&&(L=n.R32F),E===n.HALF_FLOAT&&(L=n.R16F),E===n.UNSIGNED_BYTE&&(L=n.R8),E===n.UNSIGNED_SHORT&&z&&(L=z.R16_EXT),E===n.SHORT&&z&&(L=z.R16_SNORM_EXT)),c===n.RED_INTEGER&&(E===n.UNSIGNED_BYTE&&(L=n.R8UI),E===n.UNSIGNED_SHORT&&(L=n.R16UI),E===n.UNSIGNED_INT&&(L=n.R32UI),E===n.BYTE&&(L=n.R8I),E===n.SHORT&&(L=n.R16I),E===n.INT&&(L=n.R32I)),c===n.RG&&(E===n.FLOAT&&(L=n.RG32F),E===n.HALF_FLOAT&&(L=n.RG16F),E===n.UNSIGNED_BYTE&&(L=n.RG8),E===n.UNSIGNED_SHORT&&z&&(L=z.RG16_EXT),E===n.SHORT&&z&&(L=z.RG16_SNORM_EXT)),c===n.RG_INTEGER&&(E===n.UNSIGNED_BYTE&&(L=n.RG8UI),E===n.UNSIGNED_SHORT&&(L=n.RG16UI),E===n.UNSIGNED_INT&&(L=n.RG32UI),E===n.BYTE&&(L=n.RG8I),E===n.SHORT&&(L=n.RG16I),E===n.INT&&(L=n.RG32I)),c===n.RGB_INTEGER&&(E===n.UNSIGNED_BYTE&&(L=n.RGB8UI),E===n.UNSIGNED_SHORT&&(L=n.RGB16UI),E===n.UNSIGNED_INT&&(L=n.RGB32UI),E===n.BYTE&&(L=n.RGB8I),E===n.SHORT&&(L=n.RGB16I),E===n.INT&&(L=n.RGB32I)),c===n.RGBA_INTEGER&&(E===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),E===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),E===n.UNSIGNED_INT&&(L=n.RGBA32UI),E===n.BYTE&&(L=n.RGBA8I),E===n.SHORT&&(L=n.RGBA16I),E===n.INT&&(L=n.RGBA32I)),c===n.RGB&&(E===n.UNSIGNED_SHORT&&z&&(L=z.RGB16_EXT),E===n.SHORT&&z&&(L=z.RGB16_SNORM_EXT),E===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),E===n.UNSIGNED_INT_10F_11F_11F_REV&&(L=n.R11F_G11F_B10F)),c===n.RGBA){const B=C?vo:gt.getTransfer(N);E===n.FLOAT&&(L=n.RGBA32F),E===n.HALF_FLOAT&&(L=n.RGBA16F),E===n.UNSIGNED_BYTE&&(L=B===At?n.SRGB8_ALPHA8:n.RGBA8),E===n.UNSIGNED_SHORT&&z&&(L=z.RGBA16_EXT),E===n.SHORT&&z&&(L=z.RGBA16_SNORM_EXT),E===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),E===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function P(d,c){let E;return d?c===null||c===Mi||c===ua?E=n.DEPTH24_STENCIL8:c===hi?E=n.DEPTH32F_STENCIL8:c===ca&&(E=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===Mi||c===ua?E=n.DEPTH_COMPONENT24:c===hi?E=n.DEPTH_COMPONENT32F:c===ca&&(E=n.DEPTH_COMPONENT16),E}function A(d,c){return g(d)===!0||d.isFramebufferTexture&&d.minFilter!==ln&&d.minFilter!==pn?Math.log2(Math.max(c.width,c.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?c.mipmaps.length:1}function R(d){const c=d.target;c.removeEventListener("dispose",R),w(c),c.isVideoTexture&&f.delete(c),c.isHTMLTexture&&h.delete(c)}function v(d){const c=d.target;c.removeEventListener("dispose",v),F(c)}function w(d){const c=i.get(d);if(c.__webglInit===void 0)return;const E=d.source,T=m.get(E);if(T){const N=T[c.__cacheKey];N.usedTimes--,N.usedTimes===0&&G(d),Object.keys(T).length===0&&m.delete(E)}i.remove(d)}function G(d){const c=i.get(d);n.deleteTexture(c.__webglTexture);const E=d.source,T=m.get(E);delete T[c.__cacheKey],a.memory.textures--}function F(d){const c=i.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),i.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let T=0;T<6;T++){if(Array.isArray(c.__webglFramebuffer[T]))for(let N=0;N<c.__webglFramebuffer[T].length;N++)n.deleteFramebuffer(c.__webglFramebuffer[T][N]);else n.deleteFramebuffer(c.__webglFramebuffer[T]);c.__webglDepthbuffer&&n.deleteRenderbuffer(c.__webglDepthbuffer[T])}else{if(Array.isArray(c.__webglFramebuffer))for(let T=0;T<c.__webglFramebuffer.length;T++)n.deleteFramebuffer(c.__webglFramebuffer[T]);else n.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&n.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&n.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let T=0;T<c.__webglColorRenderbuffer.length;T++)c.__webglColorRenderbuffer[T]&&n.deleteRenderbuffer(c.__webglColorRenderbuffer[T]);c.__webglDepthRenderbuffer&&n.deleteRenderbuffer(c.__webglDepthRenderbuffer)}const E=d.textures;for(let T=0,N=E.length;T<N;T++){const C=i.get(E[T]);C.__webglTexture&&(n.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(E[T])}i.remove(d)}let k=0;function j(){k=0}function re(){return k}function Z(d){k=d}function te(){const d=k;return d>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+r.maxTextures),k+=1,d}function J(d){const c=[];return c.push(d.wrapS),c.push(d.wrapT),c.push(d.wrapR||0),c.push(d.magFilter),c.push(d.minFilter),c.push(d.anisotropy),c.push(d.internalFormat),c.push(d.format),c.push(d.type),c.push(d.generateMipmaps),c.push(d.premultiplyAlpha),c.push(d.flipY),c.push(d.unpackAlignment),c.push(d.colorSpace),c.join()}function oe(d,c){const E=i.get(d);if(d.isVideoTexture&&W(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&E.__version!==d.version){const T=d.image;if(T===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(T.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(E,d,c);return}}else d.isExternalTexture&&(E.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,E.__webglTexture,n.TEXTURE0+c)}function fe(d,c){const E=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&E.__version!==d.version){Xe(E,d,c);return}else d.isExternalTexture&&(E.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,E.__webglTexture,n.TEXTURE0+c)}function _e(d,c){const E=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&E.__version!==d.version){Xe(E,d,c);return}t.bindTexture(n.TEXTURE_3D,E.__webglTexture,n.TEXTURE0+c)}function Ee(d,c){const E=i.get(d);if(d.isCubeDepthTexture!==!0&&d.version>0&&E.__version!==d.version){ze(E,d,c);return}t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+c)}const Re={[kl]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},nt={[ln]:n.NEAREST,[sg]:n.NEAREST_MIPMAP_NEAREST,[Na]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},Mt={[lg]:n.NEVER,[hg]:n.ALWAYS,[cg]:n.LESS,[Bc]:n.LEQUAL,[ug]:n.EQUAL,[Gc]:n.GEQUAL,[fg]:n.GREATER,[dg]:n.NOTEQUAL};function st(d,c){if(c.type===hi&&e.has("OES_texture_float_linear")===!1&&(c.magFilter===pn||c.magFilter===qo||c.magFilter===Na||c.magFilter===Mr||c.minFilter===pn||c.minFilter===qo||c.minFilter===Na||c.minFilter===Mr)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(d,n.TEXTURE_WRAP_S,Re[c.wrapS]),n.texParameteri(d,n.TEXTURE_WRAP_T,Re[c.wrapT]),(d===n.TEXTURE_3D||d===n.TEXTURE_2D_ARRAY)&&n.texParameteri(d,n.TEXTURE_WRAP_R,Re[c.wrapR]),n.texParameteri(d,n.TEXTURE_MAG_FILTER,nt[c.magFilter]),n.texParameteri(d,n.TEXTURE_MIN_FILTER,nt[c.minFilter]),c.compareFunction&&(n.texParameteri(d,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(d,n.TEXTURE_COMPARE_FUNC,Mt[c.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===ln||c.minFilter!==Na&&c.minFilter!==Mr||c.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||i.get(c).__currentAnisotropy){const E=e.get("EXT_texture_filter_anisotropic");n.texParameterf(d,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,r.getMaxAnisotropy())),i.get(c).__currentAnisotropy=c.anisotropy}}}function ae(d,c){let E=!1;d.__webglInit===void 0&&(d.__webglInit=!0,c.addEventListener("dispose",R));const T=c.source;let N=m.get(T);N===void 0&&(N={},m.set(T,N));const C=J(c);if(C!==d.__cacheKey){N[C]===void 0&&(N[C]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,E=!0),N[C].usedTimes++;const z=N[d.__cacheKey];z!==void 0&&(N[d.__cacheKey].usedTimes--,z.usedTimes===0&&G(c)),d.__cacheKey=C,d.__webglTexture=N[C].texture}return E}function ue(d,c,E){return Math.floor(Math.floor(d/E)/c)}function de(d,c,E,T){const C=d.updateRanges;if(C.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,c.width,c.height,E,T,c.data);else{C.sort((he,se)=>he.start-se.start);let z=0;for(let he=1;he<C.length;he++){const se=C[z],le=C[he],we=se.start+se.count,Ne=ue(le.start,c.width,4),Ze=ue(se.start,c.width,4);le.start<=we+1&&Ne===Ze&&ue(le.start+le.count-1,c.width,4)===Ne?se.count=Math.max(se.count,le.start+le.count-se.start):(++z,C[z]=le)}C.length=z+1;const L=t.getParameter(n.UNPACK_ROW_LENGTH),B=t.getParameter(n.UNPACK_SKIP_PIXELS),ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,c.width);for(let he=0,se=C.length;he<se;he++){const le=C[he],we=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Ze=we%c.width,V=Math.floor(we/c.width),ve=Ne,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ze,V,ve,ie,E,T,c.data)}d.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,L),t.pixelStorei(n.UNPACK_SKIP_PIXELS,B),t.pixelStorei(n.UNPACK_SKIP_ROWS,ne)}}function Xe(d,c,E){let T=n.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(T=n.TEXTURE_2D_ARRAY),c.isData3DTexture&&(T=n.TEXTURE_3D);const N=ae(d,c),C=c.source;t.bindTexture(T,d.__webglTexture,n.TEXTURE0+E);const z=i.get(C);if(C.version!==z.__version||N===!0){if(t.activeTexture(n.TEXTURE0+E),(typeof ImageBitmap<"u"&&c.image instanceof ImageBitmap)===!1){const ie=gt.getPrimaries(gt.workingColorSpace),xe=c.colorSpace===ir?null:gt.getPrimaries(c.colorSpace),Se=c.colorSpace===ir||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,c.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,c.unpackAlignment);let B=_(c.image,!1,r.maxTextureSize);B=Ue(c,B);const ne=s.convert(c.format,c.colorSpace),he=s.convert(c.type);let se=y(c.internalFormat,ne,he,c.normalized,c.colorSpace,c.isVideoTexture);st(T,c);let le;const we=c.mipmaps,Ne=c.isVideoTexture!==!0,Ze=z.__version===void 0||N===!0,V=C.dataReady,ve=A(c,B);if(c.isDepthTexture)se=P(c.format===yr,c.type),Ze&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,se,B.width,B.height):t.texImage2D(n.TEXTURE_2D,0,se,B.width,B.height,0,ne,he,null));else if(c.isDataTexture)if(we.length>0){Ne&&Ze&&t.texStorage2D(n.TEXTURE_2D,ve,se,we[0].width,we[0].height);for(let ie=0,xe=we.length;ie<xe;ie++)le=we[ie],Ne?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,ne,he,le.data):t.texImage2D(n.TEXTURE_2D,ie,se,le.width,le.height,0,ne,he,le.data);c.generateMipmaps=!1}else Ne?(Ze&&t.texStorage2D(n.TEXTURE_2D,ve,se,B.width,B.height),V&&de(c,B,ne,he)):t.texImage2D(n.TEXTURE_2D,0,se,B.width,B.height,0,ne,he,B.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){Ne&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,se,we[0].width,we[0].height,B.depth);for(let ie=0,xe=we.length;ie<xe;ie++)if(le=we[ie],c.format!==ni)if(ne!==null)if(Ne){if(V)if(c.layerUpdates.size>0){const Se=sf(le.width,le.height,c.format,c.type);for(const ce of c.layerUpdates){const Le=le.data.subarray(ce*Se/le.data.BYTES_PER_ELEMENT,(ce+1)*Se/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ce,le.width,le.height,1,ne,Le)}c.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,B.depth,ne,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,se,le.width,le.height,B.depth,0,le.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,le.width,le.height,B.depth,ne,he,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,se,le.width,le.height,B.depth,0,ne,he,le.data)}else{Ne&&Ze&&t.texStorage2D(n.TEXTURE_2D,ve,se,we[0].width,we[0].height);for(let ie=0,xe=we.length;ie<xe;ie++)le=we[ie],c.format!==ni?ne!==null?Ne?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,ne,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,se,le.width,le.height,0,le.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le.width,le.height,ne,he,le.data):t.texImage2D(n.TEXTURE_2D,ie,se,le.width,le.height,0,ne,he,le.data)}else if(c.isDataArrayTexture)if(Ne){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,se,B.width,B.height,B.depth),V)if(c.layerUpdates.size>0){const ie=sf(B.width,B.height,c.format,c.type);for(const xe of c.layerUpdates){const Se=B.data.subarray(xe*ie/B.data.BYTES_PER_ELEMENT,(xe+1)*ie/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,B.width,B.height,1,ne,he,Se)}c.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ne,he,B.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,B.width,B.height,B.depth,0,ne,he,B.data);else if(c.isData3DTexture)Ne?(Ze&&t.texStorage3D(n.TEXTURE_3D,ve,se,B.width,B.height,B.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ne,he,B.data)):t.texImage3D(n.TEXTURE_3D,0,se,B.width,B.height,B.depth,0,ne,he,B.data);else if(c.isFramebufferTexture){if(Ze)if(Ne)t.texStorage2D(n.TEXTURE_2D,ve,se,B.width,B.height);else{let ie=B.width,xe=B.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,se,ie,xe,0,ne,he,null),ie>>=1,xe>>=1}}else if(c.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),B.parentNode!==ie){ie.appendChild(B),h.add(c),ie.onpaint=xe=>{const Se=xe.changedElements;for(const ce of h)Se.includes(ce.image)&&(ce.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,B);else{const Se=n.RGBA,ce=n.RGBA,Le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,ce,Le,B)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ne&&Ze){const ie=at(we[0]);t.texStorage2D(n.TEXTURE_2D,ve,se,ie.width,ie.height)}for(let ie=0,xe=we.length;ie<xe;ie++)le=we[ie],Ne?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ne,he,le):t.texImage2D(n.TEXTURE_2D,ie,se,ne,he,le);c.generateMipmaps=!1}else if(Ne){if(Ze){const ie=at(B);t.texStorage2D(n.TEXTURE_2D,ve,se,ie.width,ie.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,he,B)}else t.texImage2D(n.TEXTURE_2D,0,se,ne,he,B);g(c)&&I(T),z.__version=C.version,c.onUpdate&&c.onUpdate(c)}d.__version=c.version}function ze(d,c,E){if(c.image.length!==6)return;const T=ae(d,c),N=c.source;t.bindTexture(n.TEXTURE_CUBE_MAP,d.__webglTexture,n.TEXTURE0+E);const C=i.get(N);if(N.version!==C.__version||T===!0){t.activeTexture(n.TEXTURE0+E);const z=gt.getPrimaries(gt.workingColorSpace),L=c.colorSpace===ir?null:gt.getPrimaries(c.colorSpace),B=c.colorSpace===ir||z===L?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,c.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,c.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const ne=c.isCompressedTexture||c.image[0].isCompressedTexture,he=c.image[0]&&c.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!ne&&!he?se[ce]=_(c.image[ce],!0,r.maxCubemapSize):se[ce]=he?c.image[ce].image:c.image[ce],se[ce]=Ue(c,se[ce]);const le=se[0],we=s.convert(c.format,c.colorSpace),Ne=s.convert(c.type),Ze=y(c.internalFormat,we,Ne,c.normalized,c.colorSpace),V=c.isVideoTexture!==!0,ve=C.__version===void 0||T===!0,ie=N.dataReady;let xe=A(c,le);st(n.TEXTURE_CUBE_MAP,c);let Se;if(ne){V&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ze,le.width,le.height);for(let ce=0;ce<6;ce++){Se=se[ce].mipmaps;for(let Le=0;Le<Se.length;Le++){const Oe=Se[Le];c.format!==ni?we!==null?V?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ze,Oe.width,Oe.height,0,Oe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,0,0,Oe.width,Oe.height,we,Ne,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le,Ze,Oe.width,Oe.height,0,we,Ne,Oe.data)}}}else{if(Se=c.mipmaps,V&&ve){Se.length>0&&xe++;const ce=at(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(he){V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,we,Ne,se[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,se[ce].width,se[ce].height,0,we,Ne,se[ce].data);for(let Le=0;Le<Se.length;Le++){const Gt=Se[Le].image[ce].image;V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,Gt.width,Gt.height,we,Ne,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ze,Gt.width,Gt.height,0,we,Ne,Gt.data)}}else{V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we,Ne,se[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,we,Ne,se[ce]);for(let Le=0;Le<Se.length;Le++){const Oe=Se[Le];V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,0,0,we,Ne,Oe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Le+1,Ze,we,Ne,Oe.image[ce])}}}g(c)&&I(n.TEXTURE_CUBE_MAP),C.__version=N.version,c.onUpdate&&c.onUpdate(c)}d.__version=c.version}function We(d,c,E,T,N,C){const z=s.convert(E.format,E.colorSpace),L=s.convert(E.type),B=y(E.internalFormat,z,L,E.normalized,E.colorSpace),ne=i.get(c),he=i.get(E);if(he.__renderTarget=c,!ne.__hasExternalTextures){const se=Math.max(1,c.width>>C),le=Math.max(1,c.height>>C);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,C,B,se,le,c.depth,0,z,L,null):t.texImage2D(N,C,B,se,le,0,z,L,null)}t.bindFramebuffer(n.FRAMEBUFFER,d),Ct(c)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,T,N,he.__webglTexture,0,Nt(c)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,T,N,he.__webglTexture,C),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(d,c,E){if(n.bindRenderbuffer(n.RENDERBUFFER,d),c.depthBuffer){const T=c.depthTexture,N=T&&T.isDepthTexture?T.type:null,C=P(c.stencilBuffer,N),z=c.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(c)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(c),C,c.width,c.height):E?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(c),C,c.width,c.height):n.renderbufferStorage(n.RENDERBUFFER,C,c.width,c.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,d)}else{const T=c.textures;for(let N=0;N<T.length;N++){const C=T[N],z=s.convert(C.format,C.colorSpace),L=s.convert(C.type),B=y(C.internalFormat,z,L,C.normalized,C.colorSpace);Ct(c)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(c),B,c.width,c.height):E?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(c),B,c.width,c.height):n.renderbufferStorage(n.RENDERBUFFER,B,c.width,c.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(d,c,E){const T=c.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,d),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=i.get(c.depthTexture);if(N.__renderTarget=c,(!N.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),T){if(N.__webglInit===void 0&&(N.__webglInit=!0,c.depthTexture.addEventListener("dispose",R)),N.__webglTexture===void 0){N.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),st(n.TEXTURE_CUBE_MAP,c.depthTexture);const ne=s.convert(c.depthTexture.format),he=s.convert(c.depthTexture.type);let se;c.depthTexture.format===Hi?se=n.DEPTH_COMPONENT24:c.depthTexture.format===yr&&(se=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,se,c.width,c.height,0,ne,he,null)}}else oe(c.depthTexture,0);const C=N.__webglTexture,z=Nt(c),L=T?n.TEXTURE_CUBE_MAP_POSITIVE_X+E:n.TEXTURE_2D,B=c.depthTexture.format===yr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(c.depthTexture.format===Hi)Ct(c)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,L,C,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,B,L,C,0);else if(c.depthTexture.format===yr)Ct(c)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,L,C,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,B,L,C,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(d){const c=i.get(d),E=d.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==d.depthTexture){const T=d.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),T){const N=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,T.removeEventListener("dispose",N)};T.addEventListener("dispose",N),c.__depthDisposeCallback=N}c.__boundDepthTexture=T}if(d.depthTexture&&!c.__autoAllocateDepthBuffer)if(E)for(let T=0;T<6;T++)it(c.__webglFramebuffer[T],d,T);else{const T=d.texture.mipmaps;T&&T.length>0?it(c.__webglFramebuffer[0],d,0):it(c.__webglFramebuffer,d,0)}else if(E){c.__webglDepthbuffer=[];for(let T=0;T<6;T++)if(t.bindFramebuffer(n.FRAMEBUFFER,c.__webglFramebuffer[T]),c.__webglDepthbuffer[T]===void 0)c.__webglDepthbuffer[T]=n.createRenderbuffer(),Pt(c.__webglDepthbuffer[T],d,!1);else{const N=d.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,C=c.__webglDepthbuffer[T];n.bindRenderbuffer(n.RENDERBUFFER,C),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,C)}}else{const T=d.texture.mipmaps;if(T&&T.length>0?t.bindFramebuffer(n.FRAMEBUFFER,c.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=n.createRenderbuffer(),Pt(c.__webglDepthbuffer,d,!1);else{const N=d.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,C=c.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,C),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,C)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(d,c,E){const T=i.get(d);c!==void 0&&We(T.__webglFramebuffer,d,d.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),E!==void 0&&St(d)}function ct(d){const c=d.texture,E=i.get(d),T=i.get(c);d.addEventListener("dispose",v);const N=d.textures,C=d.isWebGLCubeRenderTarget===!0,z=N.length>1;if(z||(T.__webglTexture===void 0&&(T.__webglTexture=n.createTexture()),T.__version=c.version,a.memory.textures++),C){E.__webglFramebuffer=[];for(let L=0;L<6;L++)if(c.mipmaps&&c.mipmaps.length>0){E.__webglFramebuffer[L]=[];for(let B=0;B<c.mipmaps.length;B++)E.__webglFramebuffer[L][B]=n.createFramebuffer()}else E.__webglFramebuffer[L]=n.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){E.__webglFramebuffer=[];for(let L=0;L<c.mipmaps.length;L++)E.__webglFramebuffer[L]=n.createFramebuffer()}else E.__webglFramebuffer=n.createFramebuffer();if(z)for(let L=0,B=N.length;L<B;L++){const ne=i.get(N[L]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(d.samples>0&&Ct(d)===!1){E.__webglMultisampledFramebuffer=n.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let L=0;L<N.length;L++){const B=N[L];E.__webglColorRenderbuffer[L]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,E.__webglColorRenderbuffer[L]);const ne=s.convert(B.format,B.colorSpace),he=s.convert(B.type),se=y(B.internalFormat,ne,he,B.normalized,B.colorSpace,d.isXRRenderTarget===!0),le=Nt(d);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,se,d.width,d.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,E.__webglColorRenderbuffer[L])}n.bindRenderbuffer(n.RENDERBUFFER,null),d.depthBuffer&&(E.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(E.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(C){t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture),st(n.TEXTURE_CUBE_MAP,c);for(let L=0;L<6;L++)if(c.mipmaps&&c.mipmaps.length>0)for(let B=0;B<c.mipmaps.length;B++)We(E.__webglFramebuffer[L][B],d,c,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B);else We(E.__webglFramebuffer[L],d,c,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(c)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){for(let L=0,B=N.length;L<B;L++){const ne=N[L],he=i.get(ne);let se=n.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(se=d.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,he.__webglTexture),st(se,ne),We(E.__webglFramebuffer,d,ne,n.COLOR_ATTACHMENT0+L,se,0),g(ne)&&I(se)}t.unbindTexture()}else{let L=n.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(L=d.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(L,T.__webglTexture),st(L,c),c.mipmaps&&c.mipmaps.length>0)for(let B=0;B<c.mipmaps.length;B++)We(E.__webglFramebuffer[B],d,c,n.COLOR_ATTACHMENT0,L,B);else We(E.__webglFramebuffer,d,c,n.COLOR_ATTACHMENT0,L,0);g(c)&&I(L),t.unbindTexture()}d.depthBuffer&&St(d)}function Ft(d){const c=d.textures;for(let E=0,T=c.length;E<T;E++){const N=c[E];if(g(N)){const C=D(d),z=i.get(N).__webglTexture;t.bindTexture(C,z),I(C),t.unbindTexture()}}}const Bt=[],Yt=[];function Lt(d){if(d.samples>0){if(Ct(d)===!1){const c=d.textures,E=d.width,T=d.height;let N=n.COLOR_BUFFER_BIT;const C=d.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=i.get(d),L=c.length>1;if(L)for(let ne=0;ne<c.length;ne++)t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer);const B=d.texture.mipmaps;B&&B.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let ne=0;ne<c.length;ne++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),L){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const he=i.get(c[ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,E,T,0,0,E,T,N,n.NEAREST),u===!0&&(Bt.length=0,Yt.length=0,Bt.push(n.COLOR_ATTACHMENT0+ne),d.depthBuffer&&d.resolveDepthBuffer===!1&&(Bt.push(C),Yt.push(C),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),L)for(let ne=0;ne<c.length;ne++){t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const he=i.get(c[ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&u){const c=d.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[c])}}}function Nt(d){return Math.min(r.maxSamples,d.samples)}function Ct(d){const c=i.get(d);return d.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function W(d){const c=a.render.frame;f.get(d)!==c&&(f.set(d,c),d.update())}function Ue(d,c){const E=d.colorSpace,T=d.format,N=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||E!==go&&E!==ir&&(gt.getTransfer(E)===At?(T!==ni||N!==Cn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",E)),c}function at(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(l.width=d.naturalWidth||d.width,l.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(l.width=d.displayWidth,l.height=d.displayHeight):(l.width=d.width,l.height=d.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=j,this.getTextureUnits=re,this.setTextureUnits=Z,this.setTexture2D=oe,this.setTexture2DArray=fe,this.setTexture3D=_e,this.setTextureCube=Ee,this.rebindTextures=dt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iM(n,e){function t(i,r=ir){let s;const a=gt.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nd)return n.BYTE;if(i===Dd)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===Dc)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Vi)return n.HALF_FLOAT;if(i===Ud)return n.ALPHA;if(i===Od)return n.RGB;if(i===ni)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===Fd)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===Pr)return n.RG;if(i===Oc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===ro)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===zl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Yl||i===Zl||i===Kl||i===$l||i===mo||i===Jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ql||i===Yl)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kl)return s.COMPRESSED_R11_EAC;if(i===$l)return s.COMPRESSED_SIGNED_R11_EAC;if(i===mo)return s.COMPRESSED_RG11_EAC;if(i===Jl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ql||i===jl||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===uc||i===fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ql)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ec)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===hc||i===pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mc||i===_c||i===_o||i===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Lr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",u=1,l=null,f=null,h=null,p=null,m=null,x=null;const b=typeof XRWebGLBinding<"u",_=new aM,g={},I=t.getContextAttributes();let D=null,y=null;const P=[],A=[],R=new mt;let v=null;const w=new Yn;w.viewport=new Xt;const G=new Yn;G.viewport=new Xt;const F=[w,G],k=new _0;let j=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Qo,P[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Qo,P[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Qo,P[ae]=ue),ue.getHandSpace()};function Z(ae){const ue=A.indexOf(ae.inputSource);if(ue===-1)return;const de=P[ue];de!==void 0&&(de.update(ae.inputSource,ae.frame,l||a),de.dispatchEvent({type:ae.type,data:ae.inputSource}))}function te(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",J);for(let ae=0;ae<P.length;ae++){const ue=A[ae];ue!==null&&(A[ae]=null,P[ae].disconnect(ue))}j=null,re=null,_.reset();for(const ae in g)delete g[ae];e.setRenderTarget(D),m=null,p=null,h=null,r=null,y=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",te),r.addEventListener("inputsourceschange",J),I.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Xe=null,ze=null;I.depth&&(ze=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=I.stencil?yr:Hi,Xe=I.stencil?ua:Mi);const We={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(We),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new gi(p.textureWidth,p.textureHeight,{format:ni,type:Cn,depthTexture:new ms(p.textureWidth,p.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new gi(m.framebufferWidth,m.framebufferHeight,{format:ni,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(ae){for(let ue=0;ue<ae.removed.length;ue++){const de=ae.removed[ue],Xe=A.indexOf(de);Xe>=0&&(A[Xe]=null,P[Xe].disconnect(de))}for(let ue=0;ue<ae.added.length;ue++){const de=ae.added[ue];let Xe=A.indexOf(de);if(Xe===-1){for(let We=0;We<P.length;We++)if(We>=A.length){A.push(de),Xe=We;break}else if(A[We]===null){A[We]=de,Xe=We;break}if(Xe===-1)break}const ze=P[Xe];ze&&ze.connect(de)}}const oe=new Y,fe=new Y;function _e(ae,ue,de){oe.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(de.matrixWorld);const Xe=oe.distanceTo(fe),ze=ue.projectionMatrix.elements,We=de.projectionMatrix.elements,Pt=ze[14]/(ze[10]-1),it=ze[14]/(ze[10]+1),St=(ze[9]+1)/ze[5],dt=(ze[9]-1)/ze[5],ct=(ze[8]-1)/ze[0],Ft=(We[8]+1)/We[0],Bt=Pt*ct,Yt=Pt*Ft,Lt=Xe/(-ct+Ft),Nt=Lt*-ct;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Nt),ae.translateZ(Lt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ze[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ct=Pt+Lt,W=it+Lt,Ue=Bt-Nt,at=Yt+(Xe-Nt),d=St*it/W*Ct,c=dt*it/W*Ct;ae.projectionMatrix.makePerspective(Ue,at,d,c,Ct,W),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Ee(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let ue=ae.near,de=ae.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(de=_.depthFar)),k.near=G.near=w.near=ue,k.far=G.far=w.far=de,(j!==k.near||re!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,re=k.far),k.layers.mask=ae.layers.mask|6,w.layers.mask=k.layers.mask&-5,G.layers.mask=k.layers.mask&-3;const Xe=ae.parent,ze=k.cameras;Ee(k,Xe);for(let We=0;We<ze.length;We++)Ee(ze[We],Xe);ze.length===2?_e(k,w,G):k.projectionMatrix.copy(w.projectionMatrix),Re(ae,k,Xe)};function Re(ae,ue,de){de===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(de.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=da*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return u},this.setFoveation=function(ae){u=ae,p!==null&&(p.fixedFoveation=ae),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(ae){return g[ae]};let nt=null;function Mt(ae,ue){if(f=ue.getViewerPose(l||a),x=ue,f!==null){const de=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Xe=!1;de.length!==k.cameras.length&&(k.cameras.length=0,Xe=!0);for(let it=0;it<de.length;it++){const St=de[it];let dt=null;if(m!==null)dt=m.getViewport(St);else{const Ft=h.getViewSubImage(p,St);dt=Ft.viewport,it===0&&(e.setRenderTargetTextures(y,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(y))}let ct=F[it];ct===void 0&&(ct=new Yn,ct.layers.enable(it),ct.viewport=new Xt,F[it]=ct),ct.matrix.fromArray(St.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(St.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(dt.x,dt.y,dt.width,dt.height),it===0&&(k.matrix.copy(ct.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xe===!0&&k.cameras.push(ct)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const it=h.getDepthInformation(de[0]);it&&it.isValid&&it.texture&&_.init(it,r.renderState)}if(ze&&ze.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let it=0;it<de.length;it++){const St=de[it].camera;if(St){let dt=g[St];dt||(dt=new qd,g[St]=dt);const ct=h.getCameraImage(St);dt.sourceTexture=ct}}}}for(let de=0;de<P.length;de++){const Xe=A[de],ze=P[de];Xe!==null&&ze!==void 0&&ze.update(Xe,ue,l||a)}nt&&nt(ae,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const st=new $d;st.setAnimationLoop(Mt),this.setAnimationLoop=function(ae){nt=ae},this.dispose=function(){}}}const lM=new qt,ih=new tt;ih.set(-1,0,0,0,1,0,0,0,1);function cM(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Yd(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,I,D,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(_,g):g.isMeshLambertMaterial?(s(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(_,g),h(_,g)):g.isMeshPhongMaterial?(s(_,g),f(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(_,g),p(_,g),g.isMeshPhysicalMaterial&&m(_,g,y)):g.isMeshMatcapMaterial?(s(_,g),x(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),b(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?u(_,g,I,D):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===In&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===In&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,y=I.envMapRotation;D&&(_.envMap.value=D,_.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(y)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ih),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function u(_,g,I,D){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*I,_.scale.value=D*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function p(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,I){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function b(_,g){const I=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(y,P){const A=P.program;i.uniformBlockBinding(y,A)}function l(y,P){let A=r[y.id];A===void 0&&(_(y),A=f(y),r[y.id]=A,y.addEventListener("dispose",I));const R=P.program;i.updateUBOMapping(y,R);const v=e.render.frame;s[y.id]!==v&&(p(y),s[y.id]=v)}function f(y){const P=h();y.__bindingPointIndex=P;const A=n.createBuffer(),R=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,A),A}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const P=r[y.id],A=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let v=0,w=A.length;v<w;v++){const G=A[v];if(Array.isArray(G))for(let F=0,k=G.length;F<k;F++)m(G[F],v,F,R);else m(G,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,P,A,R){if(b(y,P,A,R)===!0){const v=y.__offset,w=y.value;if(Array.isArray(w)){let G=0;for(let F=0;F<w.length;F++){const k=w[F],j=g(k);x(k,y.__data,G),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function x(y,P,A){typeof y=="number"||typeof y=="boolean"?P[0]=y:y.isMatrix3?(P[0]=y.elements[0],P[1]=y.elements[1],P[2]=y.elements[2],P[3]=0,P[4]=y.elements[3],P[5]=y.elements[4],P[6]=y.elements[5],P[7]=0,P[8]=y.elements[6],P[9]=y.elements[7],P[10]=y.elements[8],P[11]=0):ArrayBuffer.isView(y)?P.set(new y.constructor(y.buffer,y.byteOffset,P.length)):y.toArray(P,A)}function b(y,P,A,R){const v=y.value,w=P+"_"+A;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const G=R[w];if(typeof v=="number"||typeof v=="boolean"){if(G!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(G.equals(v)===!1)return G.copy(v),!0}}return!1}function _(y){const P=y.uniforms;let A=0;const R=16;for(let w=0,G=P.length;w<G;w++){const F=Array.isArray(P[w])?P[w]:[P[w]];for(let k=0,j=F.length;k<j;k++){const re=F[k],Z=Array.isArray(re.value)?re.value:[re.value];for(let te=0,J=Z.length;te<J;te++){const oe=Z[te],fe=g(oe),_e=A%R,Ee=_e%fe.boundary,Re=_e+Ee;A+=Ee,Re!==0&&R-Re<fe.storage&&(A+=R-Re),re.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=A,A+=fe.storage}}}const v=A%R;return v>0&&(A+=R-v),y.__size=A,y.__cache={},this}function g(y){const P={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(P.boundary=4,P.storage=4):y.isVector2?(P.boundary=8,P.storage=8):y.isVector3||y.isColor?(P.boundary=16,P.storage=12):y.isVector4?(P.boundary=16,P.storage=16):y.isMatrix3?(P.boundary=48,P.storage=48):y.isMatrix4?(P.boundary=64,P.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(P.boundary=16,P.storage=y.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",y),P}function I(y){const P=y.target;P.removeEventListener("dispose",I);const A=a.indexOf(P.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function D(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:u,update:l,dispose:D}}const fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function dM(){return li===null&&(li=new jg(fM,16,16,Pr,Vi),li.name="DFG_LUT",li.minFilter=pn,li.magFilter=pn,li.wrapS=Oi,li.wrapT=Oi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class hM{constructor(e={}){const{canvas:t=mg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const b=m,_=new Set([Fc,Oc,Uc]),g=new Set([Cn,Mi,ca,ua,Lc,Cc]),I=new Uint32Array(4),D=new Int32Array(4),y=new Y;let P=null,A=null;const R=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let F=!1,k=null,j=null,re=null,Z=null;this._outputColorSpace=qn;let te=0,J=0,oe=null,fe=-1,_e=null;const Ee=new Xt,Re=new Xt;let nt=null;const Mt=new pt(0);let st=0,ae=t.width,ue=t.height,de=1,Xe=null,ze=null;const We=new Xt(0,0,ae,ue),Pt=new Xt(0,0,ae,ue);let it=!1;const St=new Xc;let dt=!1,ct=!1;const Ft=new qt,Bt=new Y,Yt=new Xt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Ct(){return oe===null?de:1}let W=i;function Ue(M,X){return t.getContext(M,X)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),W===null){const X="webgl2";if(W=Ue(X,M),W===null)throw Ue(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw vt("WebGLRenderer: "+M.message),M}let at,d,c,E,T,N,C,z,L,B,ne,he,se,le,we,Ne,Ze,V,ve,ie,xe,Se,ce;function Le(){at=new dE(W),at.init(),xe=new iM(W,at),d=new rE(W,at,e,xe),c=new tM(W,at),d.reversedDepthBuffer&&p&&c.buffers.depth.setReversed(!0),j=W.createFramebuffer(),re=W.createFramebuffer(),Z=W.createFramebuffer(),E=new mE(W),T=new VS,N=new nM(W,at,c,T,d,xe,E),C=new fE(G),z=new x0(W),Se=new nE(W,z),L=new hE(W,z,E,Se),B=new gE(W,L,z,Se,E),V=new _E(W,d,N),we=new sE(T),ne=new kS(G,C,at,d,Se,we),he=new cM(G,T),se=new zS,le=new KS(at),Ze=new tE(G,C,c,B,x,u),Ne=new eM(G,B,d),ce=new uM(W,E,d,c),ve=new iE(W,at,E),ie=new pE(W,at,E),E.programs=ne.programs,G.capabilities=d,G.extensions=at,G.properties=T,G.renderLists=se,G.shadowMap=Ne,G.state=c,G.info=E}Le(),b!==Cn&&(w=new xE(b,t.width,t.height,o,r,s));const Oe=new oM(G,W);this.xr=Oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(M){M!==void 0&&(de=M,this.setSize(ae,ue,!1))},this.getSize=function(M){return M.set(ae,ue)},this.setSize=function(M,X,Q=!0){if(Oe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,ue=X,t.width=Math.floor(M*de),t.height=Math.floor(X*de),Q===!0&&(t.style.width=M+"px",t.style.height=X+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,X)},this.getDrawingBufferSize=function(M){return M.set(ae*de,ue*de).floor()},this.setDrawingBufferSize=function(M,X,Q){ae=M,ue=X,de=Q,t.width=Math.floor(M*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,M,X)},this.setEffects=function(M){if(b===Cn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let X=0;X<M.length;X++)if(M[X].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Ee)},this.getViewport=function(M){return M.copy(We)},this.setViewport=function(M,X,Q,$){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,X,Q,$),c.viewport(Ee.copy(We).multiplyScalar(de).round())},this.getScissor=function(M){return M.copy(Pt)},this.setScissor=function(M,X,Q,$){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,X,Q,$),c.scissor(Re.copy(Pt).multiplyScalar(de).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){c.setScissorTest(it=M)},this.setOpaqueSort=function(M){Xe=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(M=!0,X=!0,Q=!0){let $=0;if(M){let K=!1;if(oe!==null){const ye=oe.texture.format;K=_.has(ye)}if(K){const ye=oe.texture.type,Pe=g.has(ye),Me=Ze.getClearColor(),Fe=Ze.getClearAlpha(),Be=Me.r,Qe=Me.g,je=Me.b;Pe?(I[0]=Be,I[1]=Qe,I[2]=je,I[3]=Fe,W.clearBufferuiv(W.COLOR,0,I)):(D[0]=Be,D[1]=Qe,D[2]=je,D[3]=Fe,W.clearBufferiv(W.COLOR,0,D))}else $|=W.COLOR_BUFFER_BIT}X&&($|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),Ze.dispose(),se.dispose(),le.dispose(),T.dispose(),C.dispose(),B.dispose(),Se.dispose(),ce.dispose(),ne.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",_a),Oe.removeEventListener("sessionend",ga),Ti.stop()};function Gt(M){M.preventDefault(),Cu("WebGLRenderer: Context Lost."),F=!0}function wt(){Cu("WebGLRenderer: Context Restored."),F=!1;const M=E.autoReset,X=Ne.enabled,Q=Ne.autoUpdate,$=Ne.needsUpdate,K=Ne.type;Le(),E.autoReset=M,Ne.enabled=X,Ne.autoUpdate=Q,Ne.needsUpdate=$,Ne.type=K}function Bn(M){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gn(M){const X=M.target;X.removeEventListener("dispose",Gn),Cr(X)}function Cr(M){As(M),T.remove(M)}function As(M){const X=T.get(M).programs;X!==void 0&&(X.forEach(function(Q){ne.releaseProgram(Q)}),M.isShaderMaterial&&ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,X,Q,$,K,ye){X===null&&(X=Lt);const Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Me=Do(M,X,Q,$,K);c.setMaterial($,Pe);let Fe=Q.index,Be=1;if($.wireframe===!0){if(Fe=L.getWireframeAttribute(Q),Fe===void 0)return;Be=2}const Qe=Q.drawRange,je=Q.attributes.position;let Ge=Qe.start*Be,yt=(Qe.start+Qe.count)*Be;ye!==null&&(Ge=Math.max(Ge,ye.start*Be),yt=Math.min(yt,(ye.start+ye.count)*Be)),Fe!==null?(Ge=Math.max(Ge,0),yt=Math.min(yt,Fe.count)):je!=null&&(Ge=Math.max(Ge,0),yt=Math.min(yt,je.count));const Vt=yt-Ge;if(Vt<0||Vt===1/0)return;Se.setup(K,$,Me,Q,Fe);let Ut,Tt=ve;if(Fe!==null&&(Ut=z.get(Fe),Tt=ie,Tt.setIndex(Ut)),K.isMesh)$.wireframe===!0?(c.setLineWidth($.wireframeLinewidth*Ct()),Tt.setMode(W.LINES)):Tt.setMode(W.TRIANGLES);else if(K.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),c.setLineWidth(nn*Ct()),K.isLineSegments?Tt.setMode(W.LINES):K.isLineLoop?Tt.setMode(W.LINE_LOOP):Tt.setMode(W.LINE_STRIP)}else K.isPoints?Tt.setMode(W.POINTS):K.isSprite&&Tt.setMode(W.TRIANGLES);if(K.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Tt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const nn=K._multiDrawStarts,Ae=K._multiDrawCounts,gn=K._multiDrawCount,_t=Fe?z.get(Fe).bytesPerElement:1,Tn=T.get($).currentProgram.getUniforms();for(let Hn=0;Hn<gn;Hn++)Tn.setValue(W,"_gl_DrawID",Hn),Tt.render(nn[Hn]/_t,Ae[Hn])}else if(K.isInstancedMesh)Tt.renderInstances(Ge,Vt,K.count);else if(Q.isInstancedBufferGeometry){const nn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ae=Math.min(Q.instanceCount,nn);Tt.renderInstances(Ge,Vt,Ae)}else Tt.render(Ge,Vt)};function ws(M,X,Q){M.transparent===!0&&M.side===Ui&&M.forceSinglePass===!1?(M.side=In,M.needsUpdate=!0,Or(M,X,Q),M.side=ur,M.needsUpdate=!0,Or(M,X,Q),M.side=Ui):Or(M,X,Q)}this.compile=function(M,X,Q=null){Q===null&&(Q=M),A=le.get(Q),A.init(X),v.push(A),Q.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),M!==Q&&M.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights();const $=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ye=K.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Me=ye[Pe];ws(Me,Q,K),$.add(Me)}else ws(ye,Q,K),$.add(ye)}),A=v.pop(),$},this.compileAsync=function(M,X,Q=null){const $=this.compile(M,X,Q);return new Promise(K=>{function ye(){if($.forEach(function(Pe){T.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){K(M);return}setTimeout(ye,10)}at.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Kn=null;function Po(M){Kn&&Kn(M)}function _a(){Ti.stop()}function ga(){Ti.start()}const Ti=new $d;Ti.setAnimationLoop(Po),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){Kn=M,Oe.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},Oe.addEventListener("sessionstart",_a),Oe.addEventListener("sessionend",ga),this.render=function(M,X){if(X!==void 0&&X.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(M,X);const Q=Oe.enabled===!0&&Oe.isPresenting===!0,$=w!==null&&(oe===null||Q)&&w.begin(G,oe);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(X),X=Oe.getCamera()),M.isScene===!0&&M.onBeforeRender(G,M,X,oe),A=le.get(M,v.length),A.init(X),A.state.textureUnits=N.getTextureUnits(),v.push(A),Ft.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),St.setFromProjectionMatrix(Ft,pi,X.reversedDepth),ct=this.localClippingEnabled,dt=we.init(this.clippingPlanes,ct),P=se.get(M,R.length),P.init(),R.push(P),Oe.enabled===!0&&Oe.isPresenting===!0){const Pe=G.xr.getDepthSensingMesh();Pe!==null&&Rs(Pe,X,-1/0,G.sortObjects)}Rs(M,X,0,G.sortObjects),P.finish(),G.sortObjects===!0&&P.sort(Xe,ze,X.reversedDepth),Nt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Nt&&Ze.addToRenderList(P,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&we.beginShadows();const K=A.state.shadowsArray;if(Ne.render(K,M,X),dt===!0&&we.endShadows(),($&&w.hasRenderPass())===!1){const Pe=P.opaque,Me=P.transmissive;if(A.setupLights(),X.isArrayCamera){const Fe=X.cameras;if(Me.length>0)for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const je=Fe[Be];va(Pe,Me,M,je)}Nt&&Ze.render(M);for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const je=Fe[Be];kn(P,M,je,je.viewport)}}else Me.length>0&&va(Pe,Me,M,X),Nt&&Ze.render(M),kn(P,M,X)}oe!==null&&J===0&&(N.updateMultisampleRenderTarget(oe),N.updateRenderTargetMipmap(oe)),$&&w.end(G),M.isScene===!0&&M.onAfterRender(G,M,X),Se.resetDefaultState(),fe=-1,_e=null,v.pop(),v.length>0?(A=v[v.length-1],N.setTextureUnits(A.state.textureUnits),dt===!0&&we.setGlobalState(G.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?P=R[R.length-1]:P=null,k!==null&&k.renderEnd()};function Rs(M,X,Q,$){if(M.visible===!1)return;if(M.layers.test(X.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(X);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||St.intersectsSprite(M)){$&&Yt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ft);const Pe=B.update(M),Me=M.material;Me.visible&&P.push(M,Pe,Me,Q,Yt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||St.intersectsObject(M))){const Pe=B.update(M),Me=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Yt.copy(M.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Yt.copy(Pe.boundingSphere.center)),Yt.applyMatrix4(M.matrixWorld).applyMatrix4(Ft)),Array.isArray(Me)){const Fe=Pe.groups;for(let Be=0,Qe=Fe.length;Be<Qe;Be++){const je=Fe[Be],Ge=Me[je.materialIndex];Ge&&Ge.visible&&P.push(M,Pe,Ge,Q,Yt.z,je)}}else Me.visible&&P.push(M,Pe,Me,Q,Yt.z,null)}}const ye=M.children;for(let Pe=0,Me=ye.length;Pe<Me;Pe++)Rs(ye[Pe],X,Q,$)}function kn(M,X,Q,$){const{opaque:K,transmissive:ye,transparent:Pe}=M;A.setupLightsView(Q),dt===!0&&we.setGlobalState(G.clippingPlanes,Q),$&&c.viewport(Ee.copy($)),K.length>0&&Ur(K,X,Q),ye.length>0&&Ur(ye,X,Q),Pe.length>0&&Ur(Pe,X,Q),c.buffers.depth.setTest(!0),c.buffers.depth.setMask(!0),c.buffers.color.setMask(!0),c.setPolygonOffset(!1)}function va(M,X,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Ge=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new gi(1,1,{generateMipmaps:!0,type:Ge?Vi:Cn,minFilter:Mr,samples:Math.max(4,d.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[$.id],Pe=$.viewport||Ee;ye.setSize(Pe.z*G.transmissionResolutionScale,Pe.w*G.transmissionResolutionScale);const Me=G.getRenderTarget(),Fe=G.getActiveCubeFace(),Be=G.getActiveMipmapLevel();G.setRenderTarget(ye),G.getClearColor(Mt),st=G.getClearAlpha(),st<1&&G.setClearColor(16777215,.5),G.clear(),Nt&&Ze.render(Q);const Qe=G.toneMapping;G.toneMapping=_i;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),dt===!0&&we.setGlobalState(G.clippingPlanes,$),Ur(M,Q,$),N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let yt=0,Vt=X.length;yt<Vt;yt++){const Ut=X[yt],{object:Tt,geometry:nn,material:Ae,group:gn}=Ut;if(Ae.side===Ui&&Tt.layers.test($.layers)){const _t=Ae.side;Ae.side=In,Ae.needsUpdate=!0,xa(Tt,Q,$,nn,Ae,gn),Ae.side=_t,Ae.needsUpdate=!0,Ge=!0}}Ge===!0&&(N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye))}G.setRenderTarget(Me,Fe,Be),G.setClearColor(Mt,st),je!==void 0&&($.viewport=je),G.toneMapping=Qe}function Ur(M,X,Q){const $=X.isScene===!0?X.overrideMaterial:null;for(let K=0,ye=M.length;K<ye;K++){const Pe=M[K],{object:Me,geometry:Fe,group:Be}=Pe;let Qe=Pe.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),Me.layers.test(Q.layers)&&xa(Me,X,Q,Fe,Qe,Be)}}function xa(M,X,Q,$,K,ye){M.onBeforeRender(G,X,Q,$,K,ye),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(G,X,Q,$,M,ye),K.transparent===!0&&K.side===Ui&&K.forceSinglePass===!1?(K.side=In,K.needsUpdate=!0,G.renderBufferDirect(Q,X,$,K,M,ye),K.side=ur,K.needsUpdate=!0,G.renderBufferDirect(Q,X,$,K,M,ye),K.side=Ui):G.renderBufferDirect(Q,X,$,K,M,ye),M.onAfterRender(G,X,Q,$,K,ye)}function Or(M,X,Q){X.isScene!==!0&&(X=Lt);const $=T.get(M),K=A.state.lights,ye=A.state.shadowsArray,Pe=K.state.version,Me=ne.getParameters(M,K.state,ye,X,Q,A.state.lightProbeGridArray),Fe=ne.getProgramCacheKey(Me);let Be=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?X.environment:null,$.fog=X.fog;const Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=C.get(M.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&M.envMap===null?X.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Gn),Be=new Map,$.programs=Be);let je=Be.get(Fe);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Pe)return Vn(M,Me),je}else Me.uniforms=ne.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,Q,Me),M.onBeforeCompile(Me,G),je=ne.acquireProgram(Me,Fe),Be.set(Fe,je),$.uniforms=Me.uniforms;const Ge=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=we.uniform),Vn(M,Me),$.needsLights=Co(M),$.lightsStateVersion=Pe,$.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=A.state.lightProbeGridArray.length>0,$.currentProgram=je,$.uniformsList=null,je}function Ea(M){if(M.uniformsList===null){const X=M.currentProgram.getUniforms();M.uniformsList=so.seqWithValue(X.seq,M.uniforms)}return M.uniformsList}function Vn(M,X){const Q=T.get(M);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function No(M,X){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let Q=0,$=M.length;Q<$;Q++){const K=M[Q];if(K.texture!==null&&K.boundingBox.containsPoint(y))return K}return null}function Do(M,X,Q,$,K){X.isScene!==!0&&(X=Lt),N.resetTextureUnits();const ye=X.fog,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?X.environment:null,Me=oe===null?G.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:gt.workingColorSpace,Fe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Be=C.get($.envMap||Pe,Fe),Qe=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!Q.morphAttributes.position,yt=!!Q.morphAttributes.normal,Vt=!!Q.morphAttributes.color;let Ut=_i;$.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ut=G.toneMapping);const Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nn=Tt!==void 0?Tt.length:0,Ae=T.get($),gn=A.state.lights;if(dt===!0&&(ct===!0||M!==_e)){const Rt=M===_e&&$.id===fe;we.setState($,M,Rt)}let _t=!1;$.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==gn.state.version||Ae.outputColorSpace!==Me||K.isBatchedMesh&&Ae.batching===!1||!K.isBatchedMesh&&Ae.batching===!0||K.isBatchedMesh&&Ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ae.instancing===!1||!K.isInstancedMesh&&Ae.instancing===!0||K.isSkinnedMesh&&Ae.skinning===!1||!K.isSkinnedMesh&&Ae.skinning===!0||K.isInstancedMesh&&Ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ae.instancingMorph===!1&&K.morphTexture!==null||Ae.envMap!==Be||$.fog===!0&&Ae.fog!==ye||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==we.numPlanes||Ae.numIntersection!==we.numIntersection)||Ae.vertexAlphas!==Qe||Ae.vertexTangents!==je||Ae.morphTargets!==Ge||Ae.morphNormals!==yt||Ae.morphColors!==Vt||Ae.toneMapping!==Ut||Ae.morphTargetsCount!==nn||!!Ae.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ae.__version=$.version);let Tn=Ae.currentProgram;_t===!0&&(Tn=Or($,X,K),k&&$.isNodeMaterial&&k.onUpdateProgram($,Tn,Ae));let Hn=!1,si=!1,zi=!1;const bt=Tn.getUniforms(),Ht=Ae.uniforms;if(c.useProgram(Tn.program)&&(Hn=!0,si=!0,zi=!0),$.id!==fe&&(fe=$.id,si=!0),Ae.needsLights){const Rt=No(A.state.lightProbeGridArray,K);Ae.lightProbeGrid!==Rt&&(Ae.lightProbeGrid=Rt,si=!0)}if(Hn||_e!==M){c.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),bt.setValue(W,"projectionMatrix",M.projectionMatrix),bt.setValue(W,"viewMatrix",M.matrixWorldInverse);const $n=bt.map.cameraPosition;$n!==void 0&&$n.setValue(W,Bt.setFromMatrixPosition(M.matrixWorld)),d.logarithmicDepthBuffer&&bt.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),_e!==M&&(_e=M,si=!0,zi=!0)}if(Ae.needsLights&&(gn.state.directionalShadowMap.length>0&&bt.setValue(W,"directionalShadowMap",gn.state.directionalShadowMap,N),gn.state.spotShadowMap.length>0&&bt.setValue(W,"spotShadowMap",gn.state.spotShadowMap,N),gn.state.pointShadowMap.length>0&&bt.setValue(W,"pointShadowMap",gn.state.pointShadowMap,N)),K.isSkinnedMesh){bt.setOptional(W,K,"bindMatrix"),bt.setOptional(W,K,"bindMatrixInverse");const Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue(W,"boneTexture",Rt.boneTexture,N))}K.isBatchedMesh&&(bt.setOptional(W,K,"batchingTexture"),bt.setValue(W,"batchingTexture",K._matricesTexture,N),bt.setOptional(W,K,"batchingIdTexture"),bt.setValue(W,"batchingIdTexture",K._indirectTexture,N),bt.setOptional(W,K,"batchingColorTexture"),K._colorsTexture!==null&&bt.setValue(W,"batchingColorTexture",K._colorsTexture,N));const ai=Q.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&V.update(K,Q,Tn),(si||Ae.receiveShadow!==K.receiveShadow)&&(Ae.receiveShadow=K.receiveShadow,bt.setValue(W,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&X.environment!==null&&(Ht.envMapIntensity.value=X.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=dM()),si){if(bt.setValue(W,"toneMappingExposure",G.toneMappingExposure),Ae.needsLights&&Lo(Ht,zi),ye&&$.fog===!0&&he.refreshFogUniforms(Ht,ye),he.refreshMaterialUniforms(Ht,$,de,ue,A.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.lightProbeGrid){const Rt=Ae.lightProbeGrid;Ht.probesSH.value=Rt.texture,Ht.probesMin.value.copy(Rt.boundingBox.min),Ht.probesMax.value.copy(Rt.boundingBox.max),Ht.probesResolution.value.copy(Rt.resolution)}so.upload(W,Ea(Ae),Ht,N)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(so.upload(W,Ea(Ae),Ht,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(W,"center",K.center),bt.setValue(W,"modelViewMatrix",K.modelViewMatrix),bt.setValue(W,"normalMatrix",K.normalMatrix),bt.setValue(W,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){const Rt=$.uniformsGroups;for(let $n=0,Wi=Rt.length;$n<Wi;$n++){const Is=Rt[$n];ce.update(Is,Tn),ce.bind(Is,Tn)}}return Tn}function Lo(M,X){M.ambientLightColor.needsUpdate=X,M.lightProbe.needsUpdate=X,M.directionalLights.needsUpdate=X,M.directionalLightShadows.needsUpdate=X,M.pointLights.needsUpdate=X,M.pointLightShadows.needsUpdate=X,M.spotLights.needsUpdate=X,M.spotLightShadows.needsUpdate=X,M.rectAreaLights.needsUpdate=X,M.hemisphereLights.needsUpdate=X}function Co(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(M,X,Q){const $=T.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=X,T.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,X){const Q=T.get(M);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(M,X=0,Q=0){oe=M,te=X,J=Q;let $=null,K=!1,ye=!1;if(M){const Me=T.get(M);if(Me.__useDefaultFramebuffer!==void 0){c.bindFramebuffer(W.FRAMEBUFFER,Me.__webglFramebuffer),Ee.copy(M.viewport),Re.copy(M.scissor),nt=M.scissorTest,c.viewport(Ee),c.scissor(Re),c.setScissorTest(nt),fe=-1;return}else if(Me.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(Me.__hasExternalTextures)N.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Qe=M.depthTexture;if(Me.__boundDepthTexture!==Qe){if(Qe!==null&&T.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Be=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[X])?$=Be[X][Q]:$=Be[X],K=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?$=T.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?$=Be[Q]:$=Be,Ee.copy(M.viewport),Re.copy(M.scissor),nt=M.scissorTest}else Ee.copy(We).multiplyScalar(de).floor(),Re.copy(Pt).multiplyScalar(de).floor(),nt=it;if(Q!==0&&($=j),c.bindFramebuffer(W.FRAMEBUFFER,$)&&c.drawBuffers(M,$),c.viewport(Ee),c.scissor(Re),c.setScissorTest(nt),K){const Me=T.get(M.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Me.__webglTexture,Q)}else if(ye){const Me=X;for(let Fe=0;Fe<M.textures.length;Fe++){const Be=T.get(M.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,Q,Me)}}else if(M!==null&&Q!==0){const Me=T.get(M.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Me.__webglTexture,Q)}fe=-1},this.readRenderTargetPixels=function(M,X,Q,$,K,ye,Pe,Me=0){if(!(M&&M.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){c.bindFramebuffer(W.FRAMEBUFFER,Fe);try{const Be=M.textures[Me],Qe=Be.format,je=Be.type;if(M.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Me),!d.textureFormatReadable(Qe)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!d.textureTypeReadable(je)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=M.width-$&&Q>=0&&Q<=M.height-K&&W.readPixels(X,Q,$,K,xe.convert(Qe),xe.convert(je),ye)}finally{const Be=oe!==null?T.get(oe).__webglFramebuffer:null;c.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,X,Q,$,K,ye,Pe,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(X>=0&&X<=M.width-$&&Q>=0&&Q<=M.height-K){c.bindFramebuffer(W.FRAMEBUFFER,Fe);const Be=M.textures[Me],Qe=Be.format,je=Be.type;if(M.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Me),!d.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!d.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.bufferData(W.PIXEL_PACK_BUFFER,ye.byteLength,W.STREAM_READ),W.readPixels(X,Q,$,K,xe.convert(Qe),xe.convert(je),0);const yt=oe!==null?T.get(oe).__webglFramebuffer:null;c.bindFramebuffer(W.FRAMEBUFFER,yt);const Vt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await _g(W,Vt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ge),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ye),W.deleteBuffer(Ge),W.deleteSync(Vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,X=null,Q=0){const $=Math.pow(2,-Q),K=Math.floor(M.image.width*$),ye=Math.floor(M.image.height*$),Pe=X!==null?X.x:0,Me=X!==null?X.y:0;N.setTexture2D(M,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,Pe,Me,K,ye),c.unbindTexture()},this.copyTextureToTexture=function(M,X,Q=null,$=null,K=0,ye=0){let Pe,Me,Fe,Be,Qe,je,Ge,yt,Vt;const Ut=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(Q!==null)Pe=Q.max.x-Q.min.x,Me=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Qe=Q.min.y,je=Q.isBox3?Q.min.z:0;else{const Ht=Math.pow(2,-K);Pe=Math.floor(Ut.width*Ht),Me=Math.floor(Ut.height*Ht),M.isDataArrayTexture?Fe=Ut.depth:M.isData3DTexture?Fe=Math.floor(Ut.depth*Ht):Fe=1,Be=0,Qe=0,je=0}$!==null?(Ge=$.x,yt=$.y,Vt=$.z):(Ge=0,yt=0,Vt=0);const Tt=xe.convert(X.format),nn=xe.convert(X.type);let Ae;X.isData3DTexture?(N.setTexture3D(X,0),Ae=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),Ae=W.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),Ae=W.TEXTURE_2D),c.activeTexture(W.TEXTURE0),c.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),c.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),c.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const gn=c.getParameter(W.UNPACK_ROW_LENGTH),_t=c.getParameter(W.UNPACK_IMAGE_HEIGHT),Tn=c.getParameter(W.UNPACK_SKIP_PIXELS),Hn=c.getParameter(W.UNPACK_SKIP_ROWS),si=c.getParameter(W.UNPACK_SKIP_IMAGES);c.pixelStorei(W.UNPACK_ROW_LENGTH,Ut.width),c.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ut.height),c.pixelStorei(W.UNPACK_SKIP_PIXELS,Be),c.pixelStorei(W.UNPACK_SKIP_ROWS,Qe),c.pixelStorei(W.UNPACK_SKIP_IMAGES,je);const zi=M.isDataArrayTexture||M.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(M.isDepthTexture){const Ht=T.get(M),ai=T.get(X),Rt=T.get(Ht.__renderTarget),$n=T.get(ai.__renderTarget);c.bindFramebuffer(W.READ_FRAMEBUFFER,Rt.__webglFramebuffer),c.bindFramebuffer(W.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Wi=0;Wi<Fe;Wi++)zi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(M).__webglTexture,K,je+Wi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(X).__webglTexture,ye,Vt+Wi)),W.blitFramebuffer(Be,Qe,Pe,Me,Ge,yt,Pe,Me,W.DEPTH_BUFFER_BIT,W.NEAREST);c.bindFramebuffer(W.READ_FRAMEBUFFER,null),c.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||T.has(M)){const Ht=T.get(M),ai=T.get(X);c.bindFramebuffer(W.READ_FRAMEBUFFER,re),c.bindFramebuffer(W.DRAW_FRAMEBUFFER,Z);for(let Rt=0;Rt<Fe;Rt++)zi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ht.__webglTexture,K,je+Rt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ht.__webglTexture,K),bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ai.__webglTexture,ye,Vt+Rt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ai.__webglTexture,ye),K!==0?W.blitFramebuffer(Be,Qe,Pe,Me,Ge,yt,Pe,Me,W.COLOR_BUFFER_BIT,W.NEAREST):bt?W.copyTexSubImage3D(Ae,ye,Ge,yt,Vt+Rt,Be,Qe,Pe,Me):W.copyTexSubImage2D(Ae,ye,Ge,yt,Be,Qe,Pe,Me);c.bindFramebuffer(W.READ_FRAMEBUFFER,null),c.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else bt?M.isDataTexture||M.isData3DTexture?W.texSubImage3D(Ae,ye,Ge,yt,Vt,Pe,Me,Fe,Tt,nn,Ut.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Ae,ye,Ge,yt,Vt,Pe,Me,Fe,Tt,Ut.data):W.texSubImage3D(Ae,ye,Ge,yt,Vt,Pe,Me,Fe,Tt,nn,Ut):M.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ye,Ge,yt,Pe,Me,Tt,nn,Ut.data):M.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ye,Ge,yt,Ut.width,Ut.height,Tt,Ut.data):W.texSubImage2D(W.TEXTURE_2D,ye,Ge,yt,Pe,Me,Tt,nn,Ut);c.pixelStorei(W.UNPACK_ROW_LENGTH,gn),c.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t),c.pixelStorei(W.UNPACK_SKIP_PIXELS,Tn),c.pixelStorei(W.UNPACK_SKIP_ROWS,Hn),c.pixelStorei(W.UNPACK_SKIP_IMAGES,si),ye===0&&X.generateMipmaps&&W.generateMipmap(Ae),c.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),c.unbindTexture()},this.resetState=function(){te=0,J=0,oe=null,c.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const gs=document.querySelector("#app");let Fs,If=null,$c=null,zt=null,wn=null,Jc=null,Ml=null,Nr="menu",fi=null;const Rn={up:!1,down:!1,left:!1,right:!1,fire:!1},Pf="1539549649017380904";function Dr(){if(!zt){gs.innerHTML='<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Connecting…</h1><p id="status">Preparing your Discord session.</p></section></main>';return}if(Nr==="menu"){pM();return}if(Nr==="shooter"){_M();return}mM()}function pM(){gs.innerHTML=`
    <main class="shell">
      <header class="topbar">
        <div>
          <div class="brand">VAULT<span>X</span></div>
          <div class="subtitle">ACTIVITY HUB</div>
        </div>
        <div class="round">2 MODES READY</div>
      </header>

      <section class="mode-grid">
        <article class="activity-card quiz-card">
          <div class="badge">MULTIPLAYER</div>
          <h1>Quiz Battle</h1>
          <p>Answer fast, stack points, and outscore your friends in the lobby.</p>
          <button class="primary" data-mode="quiz">Play Quiz</button>
        </article>

        <article class="activity-card shooter-card">
          <div class="badge">ARCADE</div>
          <h1>Gun Arena</h1>
          <p>Blast drones, dodge fire, and survive as long as you can.</p>
          <button class="primary" data-mode="shooter">Launch Game</button>
        </article>
      </section>
    </main>
  `,document.querySelectorAll("[data-mode]").forEach(n=>{n.addEventListener("click",()=>{Nr=n.dataset.mode,Nr==="shooter"&&rh(),Dr()})})}function mM(){const n=[...zt.players].sort((r,s)=>s.score-r.score),e=n.find(r=>r.id===wn?.id),t=zt.phase==="lobby"&&e?.host&&n.length>=2;if(zt.phase==="finished"){gs.innerHTML=`<main class="shell"><section class="panel result"><div class="brand">VAULT<span>X</span></div><div class="eyebrow">QUIZ BATTLE</div><h1>Game Over</h1><p class="muted">Final leaderboard</p>${n.map((r,s)=>`<div class="rank"><span>#${s+1}</span><strong>${ns(r.username)}</strong><b>${r.score}</b></div>`).join("")}<button id="restart" class="primary">Play Again</button><button class="secondary" data-mode="menu">Back to hub</button></section></main>`,document.querySelector("#restart").onclick=()=>ls("start"),document.querySelector('[data-mode="menu"]').onclick=()=>{Nr="menu",Dr()};return}const i=zt.deadline?Math.max(0,Math.ceil((zt.deadline-Date.now())/1e3)):0;gs.innerHTML=`
    <main class="shell">
      <header class="topbar"><div><div class="brand">VAULT<span>X</span></div><div class="subtitle">QUIZ BATTLE</div></div><div class="header-actions"><div class="round">${zt.phase==="playing"?`ROUND ${zt.round+1} / ${zt.totalRounds}`:`LOBBY • ${n.length}/12`}</div><button class="secondary" data-mode="menu">Hub</button></div></header>
      <section class="game-grid">
        <div class="panel main-panel">
          ${zt.phase==="lobby"?`
            <div class="hero"><div class="eyebrow">MULTIPLAYER</div><h1>Ready when you are.</h1><p>Invite your friends to the Activity and battle for the highest score.</p>
            <div class="lobby-note">${n.length<2?"Waiting for at least 2 players…":e?.host?"You are the host. Start when everyone is ready.":"Waiting for the host to start the battle."}</div>
            <button id="start" class="primary" ${t?"":"disabled"}>${e?.host?"Start Battle":"Waiting for Host"}</button></div>
          `:`
            <div class="question-head"><span class="eyebrow">QUESTION ${zt.round+1}</span><span class="timer">${i}s</span></div>
            <h1 class="question">${ns(zt.question.q)}</h1>
            <div class="answers">${zt.question.a.map((r,s)=>`<button class="answer ${e?.answered?"answered":""}" data-answer="${s}" ${e?.answered?"disabled":""}><span>${String.fromCharCode(65+s)}</span>${ns(r)}</button>`).join("")}</div>
          `}
        </div>
        <aside class="panel sidebar"><div class="side-title">LEADERBOARD</div>${n.map((r,s)=>`<div class="player ${r.id===wn?.id?"me":""}"><div class="avatar">${ns((r.username?.[0]||"?").toUpperCase())}</div><div class="player-name"><strong>${ns(r.username)} ${r.host?"<em>HOST</em>":""}</strong><small>${r.answered?"Answered":"Playing"}</small></div><b>${r.score}</b></div>`).join("")||'<p class="muted">No players yet.</p>'}</aside>
      </section>
    </main>`,document.querySelector('[data-mode="menu"]').onclick=()=>{Nr="menu",Dr()},document.querySelector("#start")?.addEventListener("click",()=>ls("start")),document.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>ls("answer",Number(r.dataset.answer)))})}function _M(){gs.innerHTML=`
    <main class="shell">
      <header class="topbar">
        <div>
          <div class="brand">VAULT<span>X</span></div>
          <div class="subtitle">3D BATTLE ARENA</div>
        </div>
        <div class="header-actions">
          <div class="round">MULTIPLAYER</div>
          <button class="secondary" data-mode="menu">Hub</button>
        </div>
      </header>
      <section class="shooter-panel">
        <canvas id="arenaCanvas"></canvas>
      </section>
    </main>
  `,document.querySelector('[data-mode="menu"]').onclick=()=>{Nr="menu",rh(),Dr()};const n=document.querySelector("#arenaCanvas");vM(n)}function ns(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qc(n){return`/.proxy${n}`}function gM(){window.addEventListener("keydown",n=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","Space"].includes(n.code)&&n.preventDefault(),(n.code==="ArrowUp"||n.code==="KeyW")&&(Rn.up=!0),(n.code==="ArrowDown"||n.code==="KeyS")&&(Rn.down=!0),(n.code==="ArrowLeft"||n.code==="KeyA")&&(Rn.left=!0),(n.code==="ArrowRight"||n.code==="KeyD")&&(Rn.right=!0),n.code==="Space"&&(Rn.fire=!0)}),window.addEventListener("keyup",n=>{(n.code==="ArrowUp"||n.code==="KeyW")&&(Rn.up=!1),(n.code==="ArrowDown"||n.code==="KeyS")&&(Rn.down=!1),(n.code==="ArrowLeft"||n.code==="KeyA")&&(Rn.left=!1),(n.code==="ArrowRight"||n.code==="KeyD")&&(Rn.right=!1),n.code==="Space"&&(Rn.fire=!1)})}function rh(){fi?.rafId&&cancelAnimationFrame(fi.rafId),fi?.renderer&&fi.renderer.dispose(),fi=null}function vM(n){if(!n)return;window.__vaultxShooterListenersAttached||(gM(),window.__vaultxShooterListenersAttached=!0);const e=new Yg;e.background=new pt("#070d18"),e.fog=new zc("#070d18",18,36);const t=new Yn(60,n.clientWidth/n.clientHeight||1.6,.1,1e3);t.position.set(0,10,16);const i=new hM({canvas:n,antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(n.clientWidth||860,n.clientHeight||520,!1);const r=new f0("#b7d8ff","#111827",1.2);e.add(r);const s=new p0("#d8e3ff",1.1);s.position.set(8,12,8),e.add(s);const a=new Sn(new qc(12,12,.8,48),new $r({color:"#111a2b",metalness:.35,roughness:.7}));a.position.y=-.8,e.add(a);const o=new Sn(new Zc(12.2,.15,16,80),new $r({color:"#7f8dff",emissive:"#2b2d4d"}));o.rotation.x=Math.PI/2,o.position.y=.1,e.add(o);const u=new er(new Y(0,1,0),0),l=new Y,f=new g0,h=new Map,p=new Map,m={x:0,z:0,health:100,score:0,facing:0,lastShotAt:0};function x(D){const y=new Hs,P=new Sn(new Eo(.8,1.5,6,12),new $r({color:D.id===wn?.id?"#79e4ff":"#ff7c7c",emissive:"#0d1b2a"}));P.castShadow=!0,y.add(P);const A=new Sn(new Ts(.3,.25,1),new $r({color:"#1a1d2a"}));A.position.set(.65,.1,.4),y.add(A);const R=document.createElement("div");return R.textContent=D.username||"Player",R.style.position="absolute",R.style.pointerEvents="none",R.style.color="#eaf3ff",R.style.font="12px sans-serif",R.style.background="rgba(9, 14, 24, 0.7)",R.style.padding="3px 6px",R.style.borderRadius="999px",R.style.transform="translate(-50%, -50%)",R.style.whiteSpace="nowrap",R.style.display="none",n.parentElement.appendChild(R),y.userData.label=R,e.add(y),y}function b(D){if(!D)return;const y=D.players||[],P=D.bullets||[];for(const A of y){let R=h.get(A.id);if(R||(R=x(A),h.set(A.id,R)),R.position.set(A.x,.9,A.z),R.rotation.y=A.facing||0,R.scale.setScalar(A.id===wn?.id?1.15:1),R.children[0].material.color.set(A.id===wn?.id?"#79e4ff":"#ff7c7c"),R.userData.label){R.userData.label.textContent=`${A.username||"Player"} • ${A.health}%`;const v=new Y(A.x,1.8,A.z).project(t),w=(v.x*.5+.5)*n.clientWidth,G=(-v.y*.5+.5)*n.clientHeight;R.userData.label.style.left=`${w}px`,R.userData.label.style.top=`${G}px`,R.userData.label.style.display="block"}}for(const[A,R]of h)y.some(v=>v.id===A)||(R.userData.label&&R.userData.label.remove(),e.remove(R),h.delete(A));for(const A of P){const R=`${A.from}-${Math.round(A.x*1e3)}-${Math.round(A.z*1e3)}`;let v=p.get(R);v||(v=new Sn(new Yc(.25,12,12),new $r({color:"#ffd166",emissive:"#533d00"})),e.add(v),p.set(R,v)),v.position.set(A.x,.7,A.z)}for(const[A,R]of p)P.some(w=>`${w.from}-${Math.round(w.x*1e3)}-${Math.round(w.z*1e3)}`===A)||(e.remove(R),p.delete(A))}function _(){if(!wn?.id||!zt?.arena)return;if(!zt.arena.players.find(R=>R.id===wn.id)){ls("arena_join");return}const y=Da.clamp(m.x,-11.5,11.5),P=Da.clamp(m.z,-11.5,11.5),A={x:y,z:P,facing:m.facing,health:m.health,score:m.score,kills:m.kills||0};ls("arena_update",A)}function g(D){const y=n.getBoundingClientRect(),P=new mt((D.clientX-y.left)/y.width*2-1,-((D.clientY-y.top)/y.height)*2+1);if(f.setFromCamera(P,t),f.ray.intersectPlane(u,l)){const R=l.x-(m.x||0),v=l.z-(m.z||0);m.facing=Math.atan2(v,R),l.x,l.z}}n.addEventListener("mousemove",g),n.addEventListener("mousedown",D=>{g(D);const y=Date.now();if(y-m.lastShotAt>180){m.lastShotAt=y;const P={x:m.x,z:m.z,facing:m.facing,origin:wn?.id||"local"};ls("arena_shoot",P)}});function I(){const D=(Rn.right?1:0)-(Rn.left?1:0),y=(Rn.down?1:0)-(Rn.up?1:0),P=Math.hypot(D,y)||1,A=.18;if(D||y){const w=D/P,G=y/P;m.x=Da.clamp((m.x||0)+w*A,-11.5,11.5),m.z=Da.clamp((m.z||0)+G*A,-11.5,11.5)}const R=zt?.arena?.players?.find(w=>w.id===wn?.id);R&&(m.x=R.x,m.z=R.z,m.health=R.health,m.score=R.score,m.kills=R.kills||0);const v=h.get(wn?.id);if(v)v.position.set(m.x,.9,m.z),v.rotation.y=m.facing||0;else{const w=new Sn(new Eo(.8,1.5,6,12),new $r({color:"#79e4ff"}));w.position.set(m.x,.9,m.z),e.add(w),h.set(wn?.id,w)}t.position.x=m.x*.7,t.position.z=16,t.position.y=10,t.lookAt(m.x,.8,m.z),zt?.arena&&b(zt.arena),wn?.id&&zt?.arena&&Date.now()-(fi?.lastSync||0)>120&&(_(),fi.lastSync=Date.now()),i.render(e,t),fi.rafId=requestAnimationFrame(I)}fi={rafId:0,lastSync:0,renderer:i,scene:e,camera:t},zt?.arena&&b(zt.arena),fi.rafId=requestAnimationFrame(I)}async function xM(){Fs=new N_(Pf),await Fs.ready(),Jc=Fs.instanceId;const{code:n}=await Fs.commands.authorize({client_id:Pf,response_type:"code",state:"",prompt:"none",scope:["identify"]}),e=await fetch(Qc("/api/activity/token"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n})}),t=await e.json();if(!e.ok)throw new Error(t.error||"Activity authorization failed.");if($c=t.sessionToken,wn=t.user,If=await Fs.commands.authenticate({access_token:t.accessToken}),!If)throw new Error("Discord authentication command failed. Relaunch the Activity from Discord.");await Nf(),Ml&&clearInterval(Ml),Ml=setInterval(Nf,700)}async function Nf(){const n=await fetch(`${Qc("/api/activity/state")}?instanceId=${encodeURIComponent(Jc)}`,{headers:{Authorization:`Bearer ${$c}`}});if(!n.ok)throw new Error((await n.json()).error||"Could not load game state.");const e=await n.json();zt=e.state,wn=e.self,Dr()}async function ls(n,e){const t=await fetch(Qc("/api/activity/action"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${$c}`},body:JSON.stringify({instanceId:Jc,action:n,answer:e})}),i=await t.json();if(!t.ok)return EM(i.error||"Action failed.");zt=i.state,Dr()}function EM(n){const e=document.querySelector("#status");e&&(e.textContent=n),console.error(n)}Dr();xM().catch(n=>{console.error(n),gs.innerHTML=`<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Activity unavailable</h1><p class="muted">${ns(n.message||"Unknown error")}</p><p class="hint">Make sure the Activity URL and OAuth configuration are set in the Discord Developer Portal.</p></section></main>`});
