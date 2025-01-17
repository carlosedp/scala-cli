package scala.cli.commands

import caseapp.*

// format: off
final case class SharedUninstallCompletionsOptions(
  @HelpMessage("Path to `*rc` file, defaults to `.bashrc` or `.zshrc` depending on shell")
  rcFile: Option[String] = None,
  @Hidden
  @HelpMessage("Custom banner in comment placed in rc file")
  banner: String = "{NAME} completions",
  @Hidden
  @HelpMessage("Custom completions name")
  name: Option[String] = None
)
// format: on

object SharedUninstallCompletionsOptions {
  implicit lazy val parser: Parser[SharedUninstallCompletionsOptions] = Parser.derive
  implicit lazy val help: Help[SharedUninstallCompletionsOptions]     = Help.derive
  // Parser.Aux for using SharedUninstallCompletionsOptions with @Recurse in other options
  implicit lazy val parserAux: Parser.Aux[SharedUninstallCompletionsOptions, parser.D] = parser
}
