pragma solidity >=0.4.22 <0.9.0;
contract vote {
	struct Candidate{
        //id of candidate
        address id;
        //name of candidate
        string name;
        //votecount of candidate
        uint voteCount;
    }
    
    event eventVote(
        address indexed _candidateid
        );
    
        mapping (address => Candidate) public candidates;
        /*address[] public candidates =  [0x8f017e97A4604f26196ae2490A1f1bA1eC9B32fA, 
                                        0x8f017e97A4604f26196ae2490A1f1bA1eC9B32fA,
                                        0x78fC839Be6d5Fb855C31291b3c0af51AC5e9157c];

          */
	    mapping (address => bool) public voter;
	
	uint public candidatecount;
        
    constructor() payable public{
        addCandidate("Modi(BJP)" ,0x8f017e97A4604f26196ae2490A1f1bA1eC9B32fA);
        addCandidate("Rahul(Congress)",0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        addCandidate("Mamta(TMC)",0x78fC839Be6d5Fb855C31291b3c0af51AC5e9157c);
        addCandidate("Yogi(BJP-UP)" ,0xE34D94104898E557bCF5F58C25dE55b496E56e53);
        addCandidate("Priyanka(Congress-UP)",0x2e67AD69e424E6de33d0cE6f5F09E156cB7a79D4);
        addCandidate("Akhilesh(SP-UP)",0x35C90Aa7D0B617Aa5719B78A70Df0048720Cdbdb);
        addCandidate("Mayawati(BSP-UP)",0xF8F8EEa7e771Aa3EFD20D4db6F2764546B108DEa);
        addCandidate("Om Birla(BJP-Raj)" ,0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        addCandidate("Sachin(Congress-Raj)",0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        addCandidate("Manjeet(AAP-Raj)",0x78fC839Be6d5Fb855C31291b3c0af51AC5e9157c);
        addCandidate("Deve Gowda(JD-Raj)",0x0dbA2fbC717DEb4dD31E118A8D853C36e5E0Ea37);
    }
    
    function addCandidate(string memory _name,address  _add  ) private
    {candidatecount++;
        
        candidates[_add] = Candidate(_add, _name, address(_add).balance/1e18);
    }
    function getcandi(address _add) public returns (address id ,string memory name ,uint voteCount )
    {
        Candidate memory p= candidates[_add];
        string memory name1=p.name;
        return (p.id,p.name,p.voteCount);
    }
    
    	function sendBJP () public payable 
    	{
    	
    	require(!voter[msg.sender]);
        address  ada= address(0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        payable(ada);
        (bool sent, bytes memory data) = ada.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[ada].voteCount=address(ada).balance/1e18;
        emit eventVote( ada );
    	}
    
    function sendCONG () public payable 
    	{
    	require(!voter[msg.sender]);
        address   adq=address(0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
    	}
    function sendMAM () public payable 
    	{
    	require(!voter[msg.sender]);
        address  adq=address(0x78fC839Be6d5Fb855C31291b3c0af51AC5e9157c);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
    	}
    function sendUPBJP () public payable 
        {
        require(!voter[msg.sender]);
        address  adq=address(0xE34D94104898E557bCF5F58C25dE55b496E56e53);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
    function sendUPCONG () public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x2e67AD69e424E6de33d0cE6f5F09E156cB7a79D4);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
     function sendUPSP() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x35C90Aa7D0B617Aa5719B78A70Df0048720Cdbdb);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
     function sendUPBSP() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0xF8F8EEa7e771Aa3EFD20D4db6F2764546B108DEa);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
    function sendRAJBJP() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x8f017e97A4604f26196ae2490A1f1bA1eC9B32fA);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
    function sendRAJCong() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x1De6bf243474474B470F52Bf77352A6D319CCC3c);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
    function sendRAJAap() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x6c158dD091c0D1f37aaFA648Dd0C5e1d432a28e2);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        emit eventVote( adq );
        candidates[adq].voteCount=address(adq).balance/1e18;
        }    
    function sendRAJJD() public payable 
        {
        require(!voter[msg.sender]);
        address adq=address(0x9b93eE2E1A5c68091497907BEa46bEdAe9702184);
        payable(adq);
        (bool sent, bytes memory data) = adq.call{value : 1 ether}("");
        voter[msg.sender] = true;
        require(sent, "Failed to send Ether");
        candidates[adq].voteCount=address(adq).balance/1e18;
        emit eventVote( adq );
        }
    
}

