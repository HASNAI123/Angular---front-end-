(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UvRE:function(e,t,n){"use strict";n.r(t),n.d(t,"userAccessModule",function(){return z});var o=n("SVse"),i=n("s7LF"),r=n("iInd"),s=n("alOh"),a=n("8Y7J"),c=n("c/fn"),l=n("hhfa"),d=n("gtx6"),b=n("ZRSf"),u=n("LqlI"),p=n("+yXi");const h=["successModal"],g=["dangerModal"];function m(e,t){1&e&&a.Rb(0,"img",39)}function f(e,t){1&e&&(a.Wb(0,"tr"),a.Wb(1,"th",40),a.Pc(2,"All Permissions"),a.Vb(),a.Wb(3,"th",41),a.Pc(4,"Check"),a.Vb(),a.Vb())}function P(e,t){if(1&e){const e=a.Xb();a.Wb(0,"tr"),a.Wb(1,"td",42),a.Pc(2),a.Vb(),a.Wb(3,"td",43),a.Wb(4,"p-checkbox",44),a.gc("ngModelChange",function(t){return a.Fc(e),a.kc().selectedRolePermission=t})("onChange",function(n){a.Fc(e);const o=t.$implicit;return a.kc().updatePermissionArray(n,o)}),a.Vb(),a.Vb(),a.Vb()}if(2&e){const e=t.$implicit,n=a.kc();a.Db(2),a.Qc(e.name),a.Db(2),a.rc("value",e)("ngModel",n.selectedRolePermission)("inputId",e.key)}}const V=function(){return["name"]},v=function(){return{showAll:"All"}},W=function(e){return[e,10,25,50]};let M=(()=>{class e{constructor(e,t,n){this.systemAdminSerive=e,this.route=t,this.router=n,this.permissionValue=[{name:"Read",key:"read",check:!0},{name:"Create",key:"create",check:!0},{name:"Bulk Import",key:"bulk_import",check:!0},{name:"Edit/ Update",key:"edit/update",check:!0},{name:"Delete",key:"delete",check:!1},{name:"Verify Qualified/ Disqualified",key:"verify_qualified/disqualified",check:!1},{name:"Assignment",key:"assignment",check:!1},{name:"Transfer",key:"transfer",check:!1}],this.selectedRolePermission=[],this.rolePermissionsList=[]}ngOnInit(){this.route.queryParams.subscribe(e=>{this.roleId=e.roleId,this.getRoleDetail(this.roleId)})}getRoleDetail(e){this.systemAdminSerive.getQuery("/role/"+e+"/edit").subscribe(e=>{console.log("Roles-detail:",e),this.roleDetail=e.data,this.rolePermissionsList=e.data.role_permissions,this.selectedRolePermission=this.rolePermissionsList.filter(e=>e.assigned),console.log("rolePermissionsList:",this.rolePermissionsList)})}updateRolePermission(){this.systemAdminSerive.putQuery("/role/"+this.roleId,{slugs:this.rolePermissionsList}).subscribe(e=>{console.log("update-res:",e),this.alertBody=e.message,this.successModal.show(),setTimeout(()=>{this.successModal.hide()},2e3)},e=>{console.log("error:",e),this.alertBody=e.error.message,this.dangerModal.show(),setTimeout(()=>{this.dangerModal.hide()},2e3)})}updatePermissionArray(e,t){t.assigned=e.checked,this.rolePermissionsList.forEach(e=>{console.log("value:",e),e.id==t.id&&(e.assigned=t.assigned)}),console.log("edit:--\x3e",this.rolePermissionsList)}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(s.a),a.Qb(r.a),a.Qb(r.c))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-edit-role"]],viewQuery:function(e,t){if(1&e&&(a.Uc(h,1),a.Uc(g,1)),2&e){let e;a.Cc(e=a.hc())&&(t.successModal=e.first),a.Cc(e=a.hc())&&(t.dangerModal=e.first)}},decls:58,vars:13,consts:[[1,"animated","fadeIn"],[1,"col-md-12"],[1,"row","header","pt-3","pb-3"],[1,"col-lg-10","mr-5"],[1,"header-icon"],[1,"title","text-dark"],[1,"top-btn"],["styleClass","p-button-outlined",1,"back-p-btn"],["pTemplate","content"],[1,"card-header","row",2,"background-color","#f6f6f6"],[1,"pi","pi-pencil"],[1,"ml-2"],[1,"row","mt-4"],[1,"col-md-2","mt-2"],[1,"col-md-10"],["type","text","disabled","","pInputText","",1,"read-only",2,"width","100%",3,"value"],[1,"row","mt-5"],[1,"col-lg-12","col-md-12","col-sm-12"],[1,"form-group","has-search"],[1,"fa","fa-search","form-control-feedback"],["type","text","id","search-input","placeholder","Search...",1,"form-control","ds-input",2,"position","relative","vertical-align","top",3,"input"],[1,"row"],["styleClass","p-datatable-gridlines","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","globalFilterFields","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"action-btn"],["type","button",1,"btn","btn-outline-primary","cancel-btn"],["type","button",1,"btn","btn-primary","save-btn",3,"click"],["id","success","bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["successModal","bs-modal"],["role","document",1,"modal-dialog","modal-success"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["dangerModal","bs-modal"],["role","document",1,"modal-dialog","modal-danger"],["src","../../../../assets/img/icons/back-arrow.svg","alt","",2,"width","17px"],["width","100%"],["width","15%",1,"text-center"],[1,"table-text"],[1,"text-center"],["name","group2",3,"value","ngModel","inputId","ngModelChange","onChange"]],template:function(e,t){if(1&e){const e=a.Xb();a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"span",4),a.Wb(5,"h3",5),a.Wb(6,"b"),a.Pc(7,"User Access Setup"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(8,"div",6),a.Wb(9,"p-button",7),a.Nc(10,m,1,0,"ng-template",8),a.Vb(),a.Vb(),a.Vb(),a.Wb(11,"div",9),a.Rb(12,"i",10),a.Wb(13,"span",11),a.Wb(14,"b"),a.Pc(15,"Add User Access"),a.Vb(),a.Vb(),a.Vb(),a.Wb(16,"div",12),a.Wb(17,"div",13),a.Wb(18,"label"),a.Pc(19,"User Access Name:"),a.Vb(),a.Vb(),a.Wb(20,"div",14),a.Rb(21,"input",15),a.Vb(),a.Vb(),a.Wb(22,"div",16),a.Wb(23,"div",17),a.Wb(24,"div",18),a.Rb(25,"span",19),a.Wb(26,"input",20),a.gc("input",function(t){return a.Fc(e),a.Dc(30).filterGlobal(t.target.value,"contains")}),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(27,"div",21),a.Wb(28,"div",1),a.Wb(29,"p-table",22,23),a.Nc(31,f,5,0,"ng-template",24),a.Nc(32,P,5,4,"ng-template",25),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(33,"div",26),a.Wb(34,"button",27),a.Pc(35," CANCEL "),a.Vb(),a.Wb(36,"button",28),a.gc("click",function(){return t.updateRolePermission()}),a.Pc(37," SAVE "),a.Vb(),a.Vb(),a.Vb(),a.Wb(38,"div",29,30),a.Wb(40,"div",31),a.Wb(41,"div",32),a.Wb(42,"div",33),a.Wb(43,"h4",34),a.Pc(44,"Success"),a.Vb(),a.Vb(),a.Wb(45,"div",35),a.Wb(46,"p"),a.Pc(47),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(48,"div",36,37),a.Wb(50,"div",38),a.Wb(51,"div",32),a.Wb(52,"div",33),a.Wb(53,"h4",34),a.Pc(54,"Error"),a.Vb(),a.Vb(),a.Wb(55,"div",35),a.Wb(56,"p"),a.Pc(57),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()}2&e&&(a.Db(21),a.rc("value",null==t.roleDetail?null:t.roleDetail.name),a.Db(8),a.rc("value",t.rolePermissionsList)("globalFilterFields",a.uc(9,V))("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",a.vc(11,W,a.uc(10,v))),a.Db(18),a.Qc(t.alertBody),a.Db(10),a.Qc(t.alertBody))},directives:[c.a,l.h,d.a,b.f,u.a,p.a,i.p,i.s],styles:[".card-header[_ngcontent-%COMP%]{border:none}.card-header[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:0}.top-btn[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-auto-rows:auto}.header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:left;color:#000;margin-right:15px;font-size:1.5rem}.header-icon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left}.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:2.375rem}.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{position:absolute;z-index:2;display:block;width:2.375rem;height:2.375rem;line-height:2.375rem;text-align:center;pointer-events:none;color:#aaa}.check-field[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;margin:10px}.check-field[_ngcontent-%COMP%]   p-checkbox[_ngcontent-%COMP%]{padding-right:10px;padding-left:30px}.check-field[_ngcontent-%COMP%]   p-checkbox[_ngcontent-%COMP%], .table-text[_ngcontent-%COMP%]{font-size:16px;font-family:Lato;font-weight:600}.action-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:50px;margin-bottom:50px}.action-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.action-btn[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{margin-right:10px}.read-only[_ngcontent-%COMP%]:disabled{color:rgba(0,0,0,.87);background:#e0e0e0}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-header{font-size:16px;font-weight:600;background:#fff}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-header span.pi{margin-top:-8px;position:absolute;right:.5em;top:50%}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-header .p-accordion-header-link{background:#fff}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-content{padding:0;overflow-x:hidden}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-header{background:#f8f9fa}[_nghost-%COMP%]     .customColor.p-accordion .p-accordion-header .p-accordion-header-link{background:#f8f9fa}"]}),e})();const y=["addRoleModel"],C=["successModal"],k=["dangerModal"];function w(e,t){1&e&&(a.Wb(0,"tr"),a.Wb(1,"th",43),a.Pc(2,"User Group Name"),a.Vb(),a.Wb(3,"th",44),a.Pc(4,"Status"),a.Vb(),a.Wb(5,"th",44),a.Pc(6,"Creaed Date"),a.Vb(),a.Wb(7,"th",45),a.Pc(8,"Action"),a.Vb(),a.Vb())}function O(e,t){if(1&e&&(a.Wb(0,"div"),a.Pc(1),a.Vb()),2&e){const e=a.kc().$implicit;a.Db(1),a.Rc(" ",e.status," ")}}function x(e,t){1&e&&(a.Wb(0,"div"),a.Pc(1,"_"),a.Vb())}function _(e,t){if(1&e&&(a.Wb(0,"div"),a.Pc(1),a.lc(2,"date"),a.Vb()),2&e){const e=a.kc().$implicit;a.Db(1),a.Rc(" ",a.nc(2,1,e.created_at,"dd-MMM-yyyy")," ")}}function R(e,t){1&e&&(a.Wb(0,"div"),a.Pc(1,"_"),a.Vb())}function D(e,t){if(1&e){const e=a.Xb();a.Wb(0,"tr"),a.Wb(1,"td"),a.Pc(2),a.Vb(),a.Wb(3,"td",46),a.Nc(4,O,2,1,"div",47),a.Nc(5,x,2,0,"div",47),a.Vb(),a.Wb(6,"td",46),a.Nc(7,_,3,4,"div",47),a.Nc(8,R,2,0,"div",47),a.Vb(),a.Wb(9,"td",46),a.Wb(10,"a",48),a.gc("click",function(){a.Fc(e);const n=t.$implicit;return a.kc().editRole(n.id)}),a.Rb(11,"i",49),a.Vb(),a.Vb(),a.Vb()}if(2&e){const e=t.$implicit;a.Db(2),a.Qc(e.name),a.Db(2),a.rc("ngIf",e.status),a.Db(1),a.rc("ngIf",!e.status),a.Db(2),a.rc("ngIf",e.created_at),a.Db(1),a.rc("ngIf",!e.created_at)}}function A(e,t){if(1&e&&(a.Wb(0,"small",50),a.Pc(1),a.Vb()),2&e){const e=a.kc();a.Db(1),a.Qc(e.errorMessage)}}const L=function(){return["name","status","created_at"]},S=function(){return{showAll:"All"}},F=function(e){return[e,10,25,50]},I=[{path:"useraccess",redirectTo:"useraccess/user-access-setup",pathMatch:"full"},{path:"user-access-setup",component:(()=>{class e{constructor(e,t){this.systemAdminSerive=e,this.router=t,this.userGroupList=[],this.userRoleList=[],this.first=0,this.rows=10,this.searchInput="",this.roleName="",this.alertBody="",this.selectedRole=[],this.selectAllRoleList=[],this.inputErrorClass=""}ngOnInit(){this.getListOfRolePermission()}getListOfRolePermission(){this.systemAdminSerive.getQuery("/role").subscribe(e=>{console.log("permission-role-data:",e),this.userRoleList=e.data})}addRole(){this.systemAdminSerive.postQuery("/role",{name:this.roleName}).subscribe(e=>{console.log("add-role-res:",e),this.addRoleModel.hide(),this.userRoleList.unshift(e.data);let t={queryParams:{roleId:e.data.id}};this.alertBody=e.message,this.successModal.show(),setTimeout(()=>{this.successModal.hide(),this.router.navigate(["/useraccess/edit"],t)},2e3)},e=>{this.inputErrorClass="ng-invalid ng-dirty",this.isNameFieldError=!0,this.errorMessage=e.error.message})}enterName(){this.roleName&&(this.inputErrorClass="",this.isNameFieldError=!1,this.errorMessage="")}editRole(e){this.router.navigate(["/useraccess/edit"],{queryParams:{roleId:e}})}selectData(e,t){this.dataIsSelected=!0,console.log("Event",e),console.log("user",t)}selectAllData(e,t){console.log("Event",e),console.log("user",t),this.selectedRole=t}fetchUserList(){this.userGroupList=[{userGroup:"FSS Malaysia",status:"Inactive",createdDate:"29-Oct-2021"},{userGroup:"FSS Singapore",status:"Active",createdDate:"17-Jul-2021"},{userGroup:"FSS Vietnam",status:"Active",createdDate:"17-Jul-2021"},{userGroup:"FSS Thailand",status:"Active",createdDate:"17-Jul-2021"},{userGroup:"FSS Malaysia",status:"Active",createdDate:"17-Jul-2021"},{userGroup:"FSS Indonesia",status:"Active",createdDate:"17-Jul-2021"}]}next(){this.first=this.first+this.rows}prev(){this.first=this.first-this.rows}reset(){this.first=0}isLastPage(){return!this.userGroupList||this.first===this.userGroupList.length-this.rows}isFirstPage(){return!this.userGroupList||0===this.first}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(s.a),a.Qb(r.c))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-user-access-setup"]],viewQuery:function(e,t){if(1&e&&(a.Uc(y,1),a.Uc(C,1),a.Uc(k,1)),2&e){let e;a.Cc(e=a.hc())&&(t.addRoleModel=e.first),a.Cc(e=a.hc())&&(t.successModal=e.first),a.Cc(e=a.hc())&&(t.dangerModal=e.first)}},decls:69,vars:16,consts:[[1,"animated","fadeIn"],[1,"col-md-12"],[1,"row","header","pt-3","pb-3"],[1,"col-lg-11","col-md-8","col-sm-8"],[1,"header-icon"],[1,"pi","pi-user-plus"],[1,"title","text-dark"],[1,"col-lg-1","col-md-2","col-sm-2"],["href","#"],["type","submit",1,"btn","btn-primary","btn-fill","pull-right","form-control",3,"click"],[1,"pi","pi-plus"],[1,"card-header","row",2,"background-color","#f6f6f6"],[1,"pi","pi-list"],[1,"ml-2"],[1,"pt-3","pb-3"],[1,"form-group","has-search"],[1,"fa","fa-search","form-control-feedback"],["type","text","id","search-input","placeholder","Search...",1,"form-control","ds-input",2,"position","relative","vertical-align","top",3,"input"],["styleClass","p-datatable-gridlines","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","globalFilterFields","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["addRoleModel","bs-modal"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"add-role-field"],[1,"name-field"],["id","username2","type","username","aria-describedby","username2-help","pInputText","",2,"width","100%","height","40px",3,"ngModel","ngModelChange","input"],["id","username2-help","class","p-error",4,"ngIf"],[1,"action-btn"],["type","button",1,"btn","btn-outline-primary","cancel-btn",3,"click"],["type","button",1,"btn","btn-primary","save-btn",3,"click"],["id","success","bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["successModal","bs-modal"],["role","document",1,"modal-dialog","modal-success"],["dangerModal","bs-modal"],["role","document",1,"modal-dialog","modal-danger"],["width","40%"],["width","20%",1,"text-center"],["width","15%",1,"text-center"],[1,"text-center"],[4,"ngIf"],["routerLinkActive","router-link-active","title","Edit Record",3,"routerLink","click"],[1,"fa","fa-edit"],["id","username2-help",1,"p-error"]],template:function(e,t){if(1&e){const e=a.Xb();a.Wb(0,"div",0),a.Wb(1,"form"),a.Wb(2,"div",1),a.Wb(3,"div",2),a.Wb(4,"div",3),a.Wb(5,"span",4),a.Rb(6,"i",5),a.Wb(7,"h3",6),a.Wb(8,"b"),a.Pc(9,"User Access"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(10,"div",7),a.Wb(11,"a",8),a.Wb(12,"button",9),a.gc("click",function(){return a.Fc(e),a.Dc(28).show()}),a.Rb(13,"i",10),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(14,"div",11),a.Rb(15,"i",12),a.Wb(16,"span",13),a.Wb(17,"b"),a.Pc(18,"User Group"),a.Vb(),a.Vb(),a.Vb(),a.Wb(19,"div",14),a.Wb(20,"div",15),a.Rb(21,"span",16),a.Wb(22,"input",17),a.gc("input",function(t){return a.Fc(e),a.Dc(24).filterGlobal(t.target.value,"contains")}),a.Vb(),a.Vb(),a.Wb(23,"p-table",18,19),a.Nc(25,w,9,0,"ng-template",20),a.Nc(26,D,12,5,"ng-template",21),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(27,"div",22,23),a.Wb(29,"div",24),a.Wb(30,"div",25),a.Wb(31,"div",26),a.Wb(32,"h4",27),a.Pc(33,"Add Role"),a.Vb(),a.Wb(34,"button",28),a.gc("click",function(){return a.Fc(e),a.Dc(28).hide()}),a.Wb(35,"span",29),a.Pc(36,"\xd7"),a.Vb(),a.Vb(),a.Vb(),a.Wb(37,"div",30),a.Wb(38,"div",31),a.Wb(39,"label"),a.Pc(40,"Add Role:"),a.Vb(),a.Wb(41,"div",32),a.Wb(42,"input",33),a.gc("ngModelChange",function(e){return t.roleName=e})("input",function(){return t.enterName()}),a.Vb(),a.Nc(43,A,2,1,"small",34),a.Vb(),a.Vb(),a.Vb(),a.Wb(44,"div",35),a.Wb(45,"button",36),a.gc("click",function(){return a.Fc(e),a.Dc(28).hide()}),a.Pc(46," CANCEL "),a.Vb(),a.Wb(47,"button",37),a.gc("click",function(){return t.addRole()}),a.Pc(48," SAVE "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(49,"div",38,39),a.Wb(51,"div",40),a.Wb(52,"div",25),a.Wb(53,"div",26),a.Wb(54,"h4",27),a.Pc(55,"Success"),a.Vb(),a.Vb(),a.Wb(56,"div",30),a.Wb(57,"p"),a.Pc(58),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(59,"div",22,41),a.Wb(61,"div",42),a.Wb(62,"div",25),a.Wb(63,"div",26),a.Wb(64,"h4",27),a.Pc(65,"Error"),a.Vb(),a.Vb(),a.Wb(66,"div",30),a.Wb(67,"p"),a.Pc(68),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()}2&e&&(a.Db(23),a.rc("value",t.userRoleList)("globalFilterFields",a.uc(12,L))("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",a.vc(14,F,a.uc(13,S))),a.Db(19),a.Fb(t.inputErrorClass),a.rc("ngModel",t.roleName),a.Db(1),a.rc("ngIf",t.isNameFieldError),a.Db(15),a.Qc(t.alertBody),a.Db(10),a.Qc(t.alertBody))},directives:[i.z,i.q,i.r,b.f,l.h,u.a,i.c,d.a,i.p,i.s,o.p,r.f,r.e],pipes:[o.f],styles:[".card-header[_ngcontent-%COMP%]{border:none}.header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:left;color:#000;margin-right:15px;font-size:1.5rem}.header-icon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left}.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:2.375rem}.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{position:absolute;z-index:2;display:block;width:2.375rem;height:2.375rem;line-height:2.375rem;text-align:center;pointer-events:none;color:#aaa}.user-access-table[_ngcontent-%COMP%]   .p-datatable-header[_ngcontent-%COMP%]{background:none;border:none}.add-role-field[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.add-role-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#000;width:82px;font-weight:600}.add-role-field[_ngcontent-%COMP%]   .name-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.add-role-field[_ngcontent-%COMP%]   .name-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px}.action-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:10px;margin-bottom:40px}.action-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px}.action-btn[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{margin-right:10px}"]}),e})(),data:{title:"User Access Setup"}},{path:"edit",component:M}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[r.g.forChild(I)],r.g]}),e})();var E=n("MEzG"),Q=n("KnEf"),G=n("QGev"),T=n("xCnN");n("GS7A");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[o.c,l.i,T.b],l.i]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[o.c,N,i.l,i.v,c.c,E.b,p.b,Q.b,d.b,U,u.b,G.b,b.g]]}),e})()}}]);