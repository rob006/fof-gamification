module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=46)}([function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n,o){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}o.d(n,"a",(function(){return a}))},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var e=o(2),a=o(0),r=o.n(a),s=o(14),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(r.a,{points:r.a.attribute("points"),name:r.a.attribute("name"),color:r.a.attribute("color")}))},function(t,n,o){"use strict";function e(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,n){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,n){t.exports=flarum.core.compat["common/models/Post"]},,function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={Rank:o(5).a}},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={rankLabel:o(6).a}},function(t,n){t.exports=flarum.core.compat["common/utils/mixin"]},function(t,n){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,n){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["common/helpers/username"]},function(t,n){t.exports=flarum.core.compat["common/components/Link"]},function(t,n){t.exports=flarum.core.compat["common/utils/classList"]},function(t,n){t.exports=flarum.core.compat["common/utils/abbreviateNumber"]},function(t,n){t.exports=flarum.core.compat["common/models/User"]},function(t,n){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,n){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["common/components/Page"]},function(t,n){t.exports=flarum.core.compat["forum/components/AffixedSidebar"]},function(t,n){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["forum/components/Notification"]},function(t,n){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,n){t.exports=flarum.core.compat["forum/utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},function(t,n){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["forum/components/PostUser"]},function(t,n,o){(function(n){var o=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,i="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),p=Object.prototype.toString,f=Math.max,m=Math.min,l=function(){return u.Date.now()};function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||r.test(t)?s(t.slice(2),i?2:8):e.test(t)?NaN:+t}t.exports=function(t,n,o){var e,a,r,s,i,c,u=0,p=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var o=e,r=a;return e=a=void 0,u=n,s=t.apply(r,o)}function y(t){return u=t,i=setTimeout(k,n),p?g(t):s}function x(t){var o=t-c;return void 0===c||o>=n||o<0||v&&t-u>=r}function k(){var t=l();if(x(t))return N(t);i=setTimeout(k,function(t){var o=n-(t-c);return v?m(o,r-(t-u)):o}(t))}function N(t){return i=void 0,b&&e?g(t):(e=a=void 0,s)}function O(){var t=l(),o=x(t);if(e=arguments,a=this,c=t,o){if(void 0===i)return y(c);if(v)return i=setTimeout(k,n),g(c)}return void 0===i&&(i=setTimeout(k,n)),s}return n=h(n)||0,d(o)&&(p=!!o.leading,r=(v="maxWait"in o)?f(h(o.maxWait)||0,n):r,b="trailing"in o?!!o.trailing:b),O.cancel=function(){void 0!==i&&clearTimeout(i),u=0,e=c=a=i=void 0},O.flush=function(){return void 0===i?s:N(l())},O}}).call(this,o(45))},function(t,n){t.exports=flarum.core.compat["common/states/DiscussionListState"]},,,,,function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,n,o){"use strict";o.r(n),o.d(n,"models",(function(){return e.a})),o.d(n,"components",(function(){return St})),o.d(n,"helpers",(function(){return Ut}));var e=o(12),a=o(0),r=o.n(a),s=o(16),i=o.n(s),c=o(9),u=o.n(c),p=o(23),f=o.n(p),l=o(5),d=o(2),h=o(17),v=o.n(h),b=o(26),g=o.n(b),y=o(11),x=o.n(y),k=o(27),N=o.n(k),O=o(3),j=o.n(O),w=o(18),P=o.n(w),L=o(28),V=o.n(L),M=o(19),_=o.n(M),I=o(8),S=o.n(I),D=function(t,n){void 0===n&&(n=!1);var o=app.data["fof-gamification."+t];return n?!!parseInt(o):o},U=o(20),R=o.n(U),C=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.oninit=function(n){t.prototype.oninit.call(this,n),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route.set("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?P.a.component():j.a.component({className:"Button",onclick:this.loadMore.bind(this)},app.translator.trans("core.forum.discussion_list.load_more_button")),m("div",{className:"TagsPage"},x.a.prototype.hero(),m("div",{className:"container"},m(N.a,null,m("nav",{className:"RankingPage-nav IndexPage-nav sideNav"},m("ul",null,V()(x.a.prototype.sidebarItems().toArray())))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?D("customRankingImages",!0)?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("fof-gamification.topimage"+o+"Url")}):m("td",{className:"rankings-mobile rankings-"+o},S()("fas fa-trophy")):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m(R.a,{href:app.route.user(t),force:!0},o<4?v()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",_()(t))))),o<4?m("td",{className:"rankings-"+o},t.points()):m("td",{className:"rankings-4"},t.points()))]}))),m("div",{className:"rankings-loadmore"}," ",t))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){n.users=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},o.addOrdinalSuffix=function(t){if("en"===app.data.locale){var n=t%10,o=t%100;return 1===n&&11!==o?t+"st":2===n&&12!==o?t+"nd":3===n&&13!==o?t+"rd":t+"th"}return t},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,n){return parseFloat(n.points())-parseFloat(t.points())})),m.redraw(),t},n}(g.a),A=o(29),T=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.icon=function(){return this.attrs.notification.content()>0?"fas fa-thumbs-up":"fas fa-thumbs-down"},o.href=function(){return app.route.post(this.attrs.notification.subject())},o.content=function(){var t=this.attrs.notification.fromUser(),n=parseInt(this.attrs.notification.content());return n>0?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},o.excerpt=function(){return this.attrs.notification.subject().contentPlain()},n}(o.n(A).a),B=o(1),E=o(30),F=o.n(E),$=o(31),W=o.n($),z=o(32),q=o.n(z),G=o(33),H=o.n(G),J=function(){x.a.prototype.viewItems=function(){var t=new F.a,n=app.discussions.sortMap(),o={};for(var e in n)o[e]=app.translator.trans("core.forum.index_sort."+e+"_button");var a=o[app.search.params().sort]||Object.keys(n).map((function(t){return o[t]}))[0];return/^.*?\/hot/.test(m.route.get())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),t.add("sort",q.a.component({buttonClassName:"Button",label:a},Object.keys(o).map((function(t){var e=o[t],a=(app.search.params().sort||Object.keys(n)[0])===t;return/^.*?\/hot/.test(m.route.get())&&"hot"===t&&(a=!0),/^.*?\/hot/.test(m.route.get())&&"latest"===t&&(a=!1,m.redraw()),j.a.component({icon:!a||"fas fa-check",onclick:app.search.changeSort.bind(app.search,t),active:a},e)})))),t},Object(B.extend)(x.a.prototype,"navItems",(function(t){app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage&&t.add("rankings",H.a.component({href:app.route("rankings"),icon:"fas fa-trophy"},app.translator.trans("fof-gamification.forum.nav.name")),80)})),Object(B.extend)(W.a.prototype,"sortMap",(function(t){t.hot="-hotness"}))},K=o(34),Q=o.n(K),X=o(21),Y=o.n(X),Z=o(35),tt=o.n(Z),nt=o(36),ot=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},o.oninit=function(n){t.prototype.oninit.call(this,n),this.loading=!this.attrs.post.upvotes(),this.loading&&this.load()},o.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(P.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},["upvotes"].map((function(n){var o=t.attrs.post[n]();if(o&&o.length)return m("div",null,m("legend",null,app.translator.trans("fof-gamification.forum.modal."+n+"_label")),o.map((function(t){return m("li",null,m(R.a,{href:app.route.user(t)},v()(t)," ",_()(t)))})))}))))},o.load=function(){return app.store.find("posts",this.attrs.post.id(),{include:"upvotes"}).then(this.loaded.bind(this))},n}(o.n(nt).a),et=o(37),at=o.n(et),rt=function(t,n,o,e,a){if(void 0===a&&(a=t.discussion()),app.session.user){if(!a||a.canVote()||t.canVote())return n&&o&&(n=!1,o=!1),e&&e(!0),m.redraw(),t.save([n,o,"vote"]).then((function(){return null}),(function(){return null})).then((function(){e&&e(!1),a&&a.pushAttributes({votes:t.votes()}),m.redraw()}))}else at.a.replyAction.call(a,!0)},st=function(){Object(B.extend)(tt.a,"moderationControls",(function(t,n){n.canSeeVotes()&&t.add("viewVotes",[m(j.a,{icon:"fas fa-thumbs-up",onclick:function(){app.modal.show(ot,{post:n})}},app.translator.trans("fof-gamification.forum.mod_item"))])})),Object(B.extend)(Q.a.prototype,"actionItems",(function(t){var n=this,o=this.attrs.post,e=o.hasDownvoted(),a=o.hasUpvoted(),r=D("iconName")||"thumbs",s=D("upVotesOnly",!0),i=!app.session.user||o.canVote();t.add("votes",m("div",{className:Y()("CommentPost-votes",D("useAlternateLayout",!0)&&"alternateLayout")},j.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+r+"-up",className:"Post-vote Post-upvote",style:a&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:this.voteLoading||!i,onclick:function(){return rt(o,!a,!1,(function(t){return n.voteLoading=t}))}}),m("label",{className:"Post-points"},o.votes()),s?"":j.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+r+"-down",className:"Post-vote Post-downvote",style:e&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:!i,onclick:function(){return rt(o,!1,!e,(function(t){return n.voteLoading=t}))}})),10)}))},it=o(15),ct=o.n(it),ut=o(22),pt=o.n(ut),ft=function(){D("showVotesOnDiscussionPage",!0)&&!D("useAlternateLayout",!0)&&Object(B.extend)(ct.a.prototype,"infoItems",(function(t){t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},S()("far fa-thumbs-up"),pt()(this.attrs.discussion.votes())),20)}))},mt=o(38),lt=o.n(mt),dt=o(24),ht=o.n(dt),vt=o(6),bt=function(){var t=function(t){return function(n){return n&&n.attrs&&n.attrs.className&&String(n.attrs.className).split(" ").includes(t)}};Object(B.extend)(ht.a.prototype,"infoItems",(function(t){var n,o=D("pointsPlaceholder"),e=String(this.attrs.user.points());n=o?m("div",null,o.replace("{points}",e)):app.translator.trans("fof-gamification.forum.user.points",{points:e}),t.add("points",n)})),Object(B.extend)(ht.a.prototype,"view",(function(n){var o=this.attrs.user,e=function n(o,e){var a=[];if(o&&o.children&&Array.isArray(o.children)){var r=o.children.find(t(e));r&&a.push(r),o.children.forEach((function(t){a.push.apply(a,n(t,e))}))}return a}(n,"UserCard-profile")[0],a=Number(D("rankAmt"));if(e){var r=e.children.find(t("UserCard-badges"));return o.ranks()&&(r?o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(vt.a)(t))})).forEach((function(t){t&&r.children.push(t)})):e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(vt.a)(t))}))))),n}})),Object(B.extend)(lt.a.prototype,"view",(function(t){var n,o=this.attrs.post.user();if(!o)return t;var e,a=t.children.find((e="h3",function(t){return t&&t.tag&&t.tag===e})),r=null!=(n=Number(D("rankAmt")))?n:o.ranks().length;a.children=a.children.concat(o.ranks().reverse().splice(0,r).map((function(t){return m("span",{className:"Post-Rank"},Object(vt.a)(t))}))).filter((function(t){return void 0!==t.tag}))}))},gt=o(25),yt=o.n(gt),xt=o(39),kt=o.n(xt),Nt=function(t){return app.store.find("posts",t).then((function(){return m.redraw()}))},Ot=[],jt=function(){Object(B.extend)(yt.a.prototype,"oncreate",(function(){app.pusher&&app.pusher.then((function(t){t.main.bind("newVote",(function(t){var n,o,e=app.store.getById("posts",t.post_id),a=t.user_id;e&&e.votes()!==t.votes&&a!=app.session.user.id()&&(n=e.id(),(o=Ot[n])?o(n):(o=Ot[n]=kt()(Nt,1500))(n))}))}))})),Object(B.extend)(yt.a.prototype,"onremove",(function(){app.pusher&&app.pusher.then((function(t){t.main.unbind("newVote")}))}))};function wt(){return(wt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}var Pt=o(7),Lt=o.n(Pt),Vt=function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()},Mt=function(){Object(B.extend)(ct.a.prototype,"oninit",(function(){this.voteLoading=Lt()(!1)})),Object(B.extend)(ct.a.prototype,"view",(function(t){if(t&&t.children){var n=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("DiscussionListItem-content")})),o=this.attrs.discussion,e=o.firstPost(),a=Vt(o,"hasUpvoted"),r=Vt(o,"hasDownvoted"),s=!app.session.user||Vt(o,"canVote"),i={color:app.forum.attribute("themePrimaryColor")},c={disabled:!s},u=D("useAlternateLayout",!0),p=D("upVotesOnly",!0),f=D("iconNameAlt")||"arrow";n.children.unshift(m("div",{className:Y()("DiscussionListItem-votes",u&&"alternateLayout")},S()("fas fa-"+f+"-up",wt({role:s?"button":void 0,style:a?i:{},onclick:s&&function(){return rt(e,!a,!1,null,o)}},c)),m("span",null,pt()(Vt(o,"votes")||0)),p?"":S()("fas fa-"+f+"-down",wt({role:s?"button":void 0,style:r?i:{},onclick:s&&function(){return rt(e,!1,!r,null,o)}},c))))}}))},_t=o(40),It=o.n(_t),St={RankingsPage:C,VoteNotification:T,VotesModal:ot},Dt=o(13),Ut=wt({saveVote:rt,setting:D},Dt.a);app.initializers.add("fof-gamification",(function(t){i.a.prototype.votes=r.a.attribute("votes"),i.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),i.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),i.a.prototype.canVote=r.a.attribute("canVote"),f.a.prototype.points=r.a.attribute("points"),f.a.prototype.ranks=r.a.hasMany("ranks"),u.a.prototype.upvotes=r.a.hasMany("upvotes"),u.a.prototype.votes=r.a.attribute("votes"),u.a.prototype.canVote=r.a.attribute("canVote"),u.a.prototype.canSeeVotes=r.a.attribute("canSeeVotes"),u.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),u.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),t.store.models.ranks=l.a,t.notificationComponents.vote=T,t.routes.rankings={path:"/rankings",component:C},st(),J(),Object(B.extend)(It.a.prototype,"sortMap",(function(t){t.votes="-votes"})),bt(),ft(),jt(),D("useAlternateLayout",!0)&&Mt()}))}]);
//# sourceMappingURL=forum.js.map