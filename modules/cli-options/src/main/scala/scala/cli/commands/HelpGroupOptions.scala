package scala.cli.commands

import caseapp.*
import caseapp.core.help.{Help, HelpFormat}
import com.github.plokhotnyuk.jsoniter_scala.core.*
import com.github.plokhotnyuk.jsoniter_scala.macros.*

@HelpMessage("Print help message")
case class HelpGroupOptions(
  @HelpMessage("Show options for ScalaJS")
  helpJs: Boolean = false,
  @HelpMessage("Show options for ScalaNative")
  helpNative: Boolean = false,
  @HelpMessage("Show options for Scaladoc")
  @Name("scaladocHelp")
  @Name("docHelp")
  @Name("helpDoc")
  helpScaladoc: Boolean = false,
  @HelpMessage("Show options for Scala REPL")
  @Name("replHelp")
  helpRepl: Boolean = false,
  @HelpMessage("Show options for Scalafmt")
  @Name("scalafmtHelp")
  @Name("fmtHelp")
  @Name("helpFmt")
  helpScalafmt: Boolean = false
) {

  private def printHelpWithGroup(help: Help[_], helpFormat: HelpFormat, group: String): Nothing = {
    println(help.help(helpFormat.withHiddenGroups(
      helpFormat.hiddenGroups.map(_.filterNot(_ == group))
    )))
    sys.exit(0)
  }

  def maybePrintGroupHelp(help: Help[_], helpFormat: HelpFormat): Unit = {
    if (helpJs) printHelpWithGroup(help, helpFormat, "Scala.js")
    else if (helpNative) printHelpWithGroup(help, helpFormat, "Scala Native")
  }
}

object HelpGroupOptions {
  lazy val parser: Parser[HelpGroupOptions]                           = Parser.derive
  implicit lazy val parserAux: Parser.Aux[HelpGroupOptions, parser.D] = parser
  implicit lazy val help: Help[HelpGroupOptions]                      = Help.derive
  implicit lazy val jsonCodec: JsonValueCodec[HelpGroupOptions]       = JsonCodecMaker.make
}
