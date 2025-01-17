package scala.cli.commands

import caseapp.core.help.RuntimeCommandsHelp
import caseapp.core.{Error, RemainingArgs}

import scala.build.Logger
import scala.build.internal.Constants
import scala.build.options.BuildOptions
import scala.cli.commands.util.SharedOptionsUtil.*
import scala.cli.{CurrentParams, ScalaCliHelp}

class Default(
  actualHelp: => RuntimeCommandsHelp,
  isSipScala: Boolean
) extends ScalaCommand[DefaultOptions] {

  private def defaultHelp: String     = actualHelp.help(ScalaCliHelp.helpFormat)
  private def defaultFullHelp: String = actualHelp.help(ScalaCliHelp.helpFormat, showHidden = true)

  override def group                                                         = "Main"
  override def sharedOptions(options: DefaultOptions): Option[SharedOptions] = Some(options.shared)
  private[cli] var rawArgs                                                   = Array.empty[String]
  override def helpAsked(progName: String, maybeOptions: Either[Error, DefaultOptions]): Nothing = {
    println(defaultHelp)
    sys.exit(0)
  }
  override def fullHelpAsked(progName: String): Nothing = {
    println(defaultFullHelp)
    sys.exit(0)
  }

  override def runCommand(options: DefaultOptions, args: RemainingArgs, logger: Logger): Unit = {
    if options.version then println(Version.versionInfo)
    else
      {
        val shouldDefaultToRun =
          args.remaining.nonEmpty || options.shared.snippet.executeScript.nonEmpty ||
          options.shared.snippet.executeScala.nonEmpty || options.shared.snippet.executeJava.nonEmpty ||
          (options.shared.extraJarsAndClassPath.nonEmpty && options.sharedRun.mainClass.mainClass.nonEmpty)
        if shouldDefaultToRun then RunOptions.parser else ReplOptions.parser
      }.parse(rawArgs) match
        case Left(e)                              => error(e)
        case Right((replOptions: ReplOptions, _)) => Repl.runCommand(replOptions, args, logger)
        case Right((runOptions: RunOptions, _))   => Run.runCommand(runOptions, args, logger)
  }
}
