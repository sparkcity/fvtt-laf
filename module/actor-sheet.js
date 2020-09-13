import { ATTRIBUTE_TYPES } from "./constants.js";
import { evaluateRolls } from "./lasersandfeelings.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class SimpleActorSheet extends ActorSheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
  	  classes: ["laf", "sheet", "actor"],
  	  template: "systems/laf/templates/actor-sheet.html",
      width: 600,
      height: 600,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}],
      dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}]
    });
  }

  /* -------------------------------------------- */
  /** @override */
  getData() {
    const  data = super.getData();
    data.dtypes = ["String", "Number", "Boolean"];
    return  data;
    }

  /* -------------------------------------------- */

  /** @override */
	activateListeners(html) {
    
    super.activateListeners(html);

    //localizing labels on the character sheet
    $(html).parents('.app').find('.numbersLabel')[0].innerText = game.i18n.localize("SIMPLE.Number");
    $(html).parents('.app').find('#styleLabel')[0].innerText = game.i18n.localize("SIMPLE.Style");
    $(html).parents('.app').find('#roleLabel')[0].innerText = game.i18n.localize("SIMPLE.Role");
    $(html).parents('.app').find('#goalLabel')[0].innerText = game.i18n.localize("SIMPLE.Goal");

    $(html).parents('.app').find('#lasersButton1')[0].innerText = game.i18n.localize("SIMPLE.Normal");
    $(html).parents('.app').find('#lasersButton2')[0].innerText = game.i18n.localize("SIMPLE.Prepared");
    $(html).parents('.app').find('#lasersButton3')[0].innerText = game.i18n.localize("SIMPLE.Expert");
    $(html).parents('.app').find('#feelingsButton1')[0].innerText = game.i18n.localize("SIMPLE.Normal");
    $(html).parents('.app').find('#feelingsButton2')[0].innerText = game.i18n.localize("SIMPLE.Prepared");
    $(html).parents('.app').find('#feelingsButton3')[0].innerText = game.i18n.localize("SIMPLE.Expert");

    var num = $(html).parents('.app').find('.numberinput')[0].value;
    //Lasers rolls
    html.find('#lasersButton1').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("1d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.LasersRoll")}: ${button.text()}</h3>`
      });

        ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 1),
      });
    });

    html.find('#lasersButton2').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("2d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.LasersRoll")}: ${button.text()}</h3>`,
      });

      ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 1),
      });    
    });

    html.find('#lasersButton3').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("3d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.LasersRoll")}: ${button.text()}</h3>`
      });

      ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 1),
      });    
    });
//Feelings rolls
    html.find('#feelingsButton1').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("1d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.FeelingsRoll")}: ${button.text()}</h3>`
      });

      ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 0),
      });    
    });

    html.find('#feelingsButton2').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("2d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.FeelingsRoll")}: ${button.text()}</h3>`
      });

      ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 0),
      });    
    });

    html.find('#feelingsButton3').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("3d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>${game.i18n.localize("SIMPLE.FeelingsRoll")}: ${button.text()}</h3>`,
      });

      ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: evaluateRolls(r,num, 0),
      });    
    });

  }//end of activatelisteners

}