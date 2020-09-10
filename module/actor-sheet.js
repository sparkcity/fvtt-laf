import { ATTRIBUTE_TYPES } from "./constants.js";

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

    // Handle rollable attributes.
    html.find('#lasersButton1').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("1d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Lasers Roll: ${button.text()}</h3>`
      });
    });

    html.find('#lasersButton2').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("2d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Lasers Roll: ${button.text()}</h3>`
      });
    });

    html.find('#lasersButton3').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("3d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Lasers Roll: ${button.text()}</h3>`
      });
    });

    html.find('#feelingsButton1').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("1d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Feelings Roll: ${button.text()}</h3>`
      });
    });

    html.find('#feelingsButton2').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("2d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Feelings Roll: ${button.text()}</h3>`
      });
    });

    html.find('#feelingsButton3').click(ev => {
      let button = $(ev.currentTarget);
      let r = new Roll("3d6");
      r.roll().toMessage({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `<h3>Feelings Roll: ${button.text()}</h3>`,
      });
    });

  }//end of activatelisteners

}