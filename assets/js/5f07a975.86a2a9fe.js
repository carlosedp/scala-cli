"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8276],{3905:function(e,a,n){n.d(a,{Zo:function(){return m},kt:function(){return c}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),o=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},m=function(e){var a=o(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=o(n),c=l,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?t.createElement(k,p(p({ref:a},m),{},{components:n})):t.createElement(k,p({ref:a},m))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,p[1]=r;for(var o=2;o<i;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8036:function(e,a,n){n.r(a),n.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var t=n(3117),l=n(102),i=(n(7294),n(3905)),p=["components"],r={title:"Directives",sidebar_position:2},s=void 0,o={unversionedId:"reference/scala-command/directives",id:"reference/scala-command/directives",title:"Directives",description:"This document describes as scala-cli behaves if run as scala command. See more information in SIP-46",source:"@site/docs/reference/scala-command/directives.md",sourceDirName:"reference/scala-command",slug:"/reference/scala-command/directives",permalink:"/docs/reference/scala-command/directives",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/scala-command/directives.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Directives",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command-line options",permalink:"/docs/reference/scala-command/cli-options"},next:{title:"Commands",permalink:"/docs/reference/scala-command/commands"}},m={},u=[{value:"using directives",id:"using-directives",level:2},{value:"Compiler options",id:"compiler-options",level:3},{value:"Examples",id:"examples",level:4},{value:"Compiler plugins",id:"compiler-plugins",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Custom JAR",id:"custom-jar",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Custom sources",id:"custom-sources",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Dependency",id:"dependency",level:3},{value:"Examples",id:"examples-4",level:4},{value:"Java home",id:"java-home",level:3},{value:"Examples",id:"examples-5",level:4},{value:"Java options",id:"java-options",level:3},{value:"Examples",id:"examples-6",level:4},{value:"Java properties",id:"java-properties",level:3},{value:"Examples",id:"examples-7",level:4},{value:"Javac options",id:"javac-options",level:3},{value:"Examples",id:"examples-8",level:4},{value:"Main class",id:"main-class",level:3},{value:"Examples",id:"examples-9",level:4},{value:"Platform",id:"platform",level:3},{value:"Examples",id:"examples-10",level:4},{value:"Repository",id:"repository",level:3},{value:"Examples",id:"examples-11",level:4},{value:"Resource directories",id:"resource-directories",level:3},{value:"Examples",id:"examples-12",level:4},{value:"Scala Native options",id:"scala-native-options",level:3},{value:"Examples",id:"examples-13",level:4},{value:"Scala version",id:"scala-version",level:3},{value:"Examples",id:"examples-14",level:4},{value:"Scala.js options",id:"scalajs-options",level:3},{value:"Examples",id:"examples-15",level:4},{value:"target directives",id:"target-directives",level:2}],d={toc:u};function c(e){var a=e.components,n=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This document describes as scala-cli behaves if run as ",(0,i.kt)("inlineCode",{parentName:"strong"},"scala")," command. See more information in ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/scala/improvement-proposals/pull/46"},"SIP-46"))),(0,i.kt)("h2",{id:"using-directives"},"using directives"),(0,i.kt)("h3",{id:"compiler-options"},"Compiler options"),(0,i.kt)("p",null,"Add Scala compiler options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using option "),(0,i.kt)("em",{parentName:"p"},"option")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using options "),(0,i.kt)("em",{parentName:"p"},"option1"),", ",(0,i.kt)("em",{parentName:"p"},"option2")," \u2026"),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using option "-Xasync"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using options "-Xasync", "-Xfatal-warnings"')),(0,i.kt)("h3",{id:"compiler-plugins"},"Compiler plugins"),(0,i.kt)("p",null,"Adds compiler plugins"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using plugin "),(0,i.kt)("em",{parentName:"p"},"org"),(0,i.kt)("inlineCode",{parentName:"p"},":"),"name",(0,i.kt)("inlineCode",{parentName:"p"},":"),"ver"),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using plugin "org.typelevel:::kind-projector:0.13.2"')),(0,i.kt)("h3",{id:"custom-jar"},"Custom JAR"),(0,i.kt)("p",null,"Manually add JAR(s) to the class path"),(0,i.kt)("p",null,"//> using jar ",(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,"//> using jars ",(0,i.kt)("em",{parentName:"p"},"path1"),", ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jar "/Users/alexandre/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/com/chuusai/shapeless_2.13/2.3.7/shapeless_2.13-2.3.7.jar"')),(0,i.kt)("h3",{id:"custom-sources"},"Custom sources"),(0,i.kt)("p",null,"Manually add sources to the Scala CLI project"),(0,i.kt)("p",null,"//> using file hello.sc"),(0,i.kt)("p",null,"//> using files Utils.scala, Helper.scala \u2026"),(0,i.kt)("h4",{id:"examples-3"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using file "utils.scala"')),(0,i.kt)("h3",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"Add dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "'),(0,i.kt)("em",{parentName:"p"},"org"),(0,i.kt)("inlineCode",{parentName:"p"},":"),"name",(0,i.kt)("inlineCode",{parentName:"p"},":"),'ver"'),(0,i.kt)("h4",{id:"examples-4"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "org.scalatest::scalatest:3.2.10"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "org.scalameta::munit:0.7.29"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "tabby:tabby:0.2.3,url=https://github.com/bjornregnell/tabby/releases/download/v0.2.3/tabby_3-0.2.3.jar"')),(0,i.kt)("h3",{id:"java-home"},"Java home"),(0,i.kt)("p",null,"Sets Java home used to run your application or tests"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using java-home "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaHome "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("h4",{id:"examples-5"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using java-home "/Users/Me/jdks/11"')),(0,i.kt)("h3",{id:"java-options"},"Java options"),(0,i.kt)("p",null,"Add Java options which will be passed when running an application."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using java-opt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaOpt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("h4",{id:"examples-6"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javaOpt "-Xmx2g", "-Dsomething=a"')),(0,i.kt)("h3",{id:"java-properties"},"Java properties"),(0,i.kt)("p",null,"Add Java properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaProp "),(0,i.kt)("em",{parentName:"p"},"key=value"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaProp "),(0,i.kt)("em",{parentName:"p"},"key")),(0,i.kt)("h4",{id:"examples-7"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javaProp "foo1=bar", "foo2"')),(0,i.kt)("h3",{id:"javac-options"},"Javac options"),(0,i.kt)("p",null,"Add Javac options which will be passed when compiling sources."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javac-opt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javacOpt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("h4",{id:"examples-8"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javacOpt "source", "1.8"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"target", "1.8"')),(0,i.kt)("h3",{id:"main-class"},"Main class"),(0,i.kt)("p",null,"Specify default main class"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using main-class "),(0,i.kt)("em",{parentName:"p"},"main class")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using mainClass "),(0,i.kt)("em",{parentName:"p"},"main class")),(0,i.kt)("h4",{id:"examples-9"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using main-class "helloWorld"')),(0,i.kt)("h3",{id:"platform"},"Platform"),(0,i.kt)("p",null,"Set the default platform to Scala.js or Scala Native"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using platform "),"(",(0,i.kt)("inlineCode",{parentName:"p"},"jvm"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-js"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-native"),")+"),(0,i.kt)("h4",{id:"examples-10"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using platform "scala-js"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using platform "jvm", "scala-native"')),(0,i.kt)("h3",{id:"repository"},"Repository"),(0,i.kt)("p",null,"Add a repository for dependency resolution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using repository "),(0,i.kt)("em",{parentName:"p"},"repository")),(0,i.kt)("h4",{id:"examples-11"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "jitpack"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "sonatype:snapshots"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "https://maven-central.storage-download.googleapis.com/maven2"')),(0,i.kt)("h3",{id:"resource-directories"},"Resource directories"),(0,i.kt)("p",null,"Manually add a resource directory to the class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using resourceDir "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using resourceDirs "),(0,i.kt)("em",{parentName:"p"},"path1"),", ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-12"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using resourceDir "./resources"')),(0,i.kt)("h3",{id:"scala-native-options"},"Scala Native options"),(0,i.kt)("p",null,"Add Scala Native options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeGc")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeMode")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeVersion")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeCompile")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeLinking")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeClang")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeClangPP")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeEmbedResources")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("h4",{id:"examples-13"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using nativeVersion "0.4.0"')),(0,i.kt)("h3",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Set the default Scala version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using scala "),(0,i.kt)("em",{parentName:"p"},"version"),"+"),(0,i.kt)("h4",{id:"examples-14"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "3.0.2"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2.13"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2.13.6", "2.12.16"')),(0,i.kt)("h3",{id:"scalajs-options"},"Scala.js options"),(0,i.kt)("p",null,"Add Scala.js options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsVersion")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsMode")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsModuleKind")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsSmallModuleForPackage")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsCheckIr")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsEmitSourceMaps")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsDom")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsHeader")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAllowBigIntsForLongs")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAvoidClasses")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAvoidLetsAndConsts")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsModuleSplitStyleStr")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsEsVersionStr")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("h4",{id:"examples-15"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jsModuleKind "common"')),(0,i.kt)("h2",{id:"target-directives"},"target directives"))}c.isMDXComponent=!0}}]);