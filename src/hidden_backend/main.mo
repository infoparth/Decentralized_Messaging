import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Array "mo:base/Array";


shared(msg) actor class Clan() {

  type Name = Text;
  type Phone = Text;

  type Entry = {
    desc: Text;
    phone: Phone;
  };
  
  let messageArray = Array.init<Text>(5, "");

  let hidden = HashMap.HashMap<Principal, Text>(5, Principal.equal, Principal.hash);
  

  let allowed = HashMap.HashMap<Principal, Principal>(5, Principal.equal, Principal.hash);

  public shared(msg) func putMessage(_caller: Principal, _text: Text): async () {

    hidden.put(_caller, _text);
    
  };

  public shared(msg) func checkMsg(): async Principal {

    msg.caller;
    
  };

  public shared(msg) func lookup() : async Text{

    let user: ?Text = hidden.get(msg.caller);

      switch(user){
        case(null){

         "No such User";
        };
        case(?user){

          let message : ?Text = hidden.get(msg.caller);

          switch(message){

            case(null){
              "No message for You"
            };

            case(?message){
          
          message;
            };
          }

        };
      };

  };
};