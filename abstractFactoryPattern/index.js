
//***********
// Lannister
//***********
let KingJoffery = (function () {
    function KingJoffery() {}
    KingJoffery.prototype.makeDecision = function (severity) {
        console.log('Severity: ' + severity + ' - KingJoffery\'s decision')
    };
    return KingJoffery;
})();

let LordTywin = (function () {
    function LordTywin() {}
    LordTywin.prototype.makeDecision = function (severity) {
        console.log('Severity: ' + severity + ' - LordTywin\'s decision')
    };
    return LordTywin;
})();

// Concrete factory
let LanisterFactory = (function () {
    function LanisterFactory() {}
    LanisterFactory.prototype.getKing = function () {
        return new KingJoffery();
    };
    LanisterFactory.prototype.getHandOfTheKing = function () {
        return new LordTywin();
    };
    return LanisterFactory;
})();

//***********
// Targaryen
//***********
let KingAerys = (function () {
    function KingAerys() {}
    KingAerys.prototype.makeDecision = function (severity) {
        console.log('Severity: ' + severity + ' - KingAerys\'s decision')
    };
    return KingAerys;
})();

let LordConnington = (function () {
    function LordConnington() {}
    LordConnington.prototype.makeDecision = function (severity) {
        console.log('Severity: ' + severity + ' - LordConnington\'s decision')
    };
    return LordConnington;
})();

// Concrete factory
let TargaryenFactory = (function () {
    function TargaryenFactory() {}
    TargaryenFactory.prototype.getKing = function () {
        return new KingAerys();
    };
    TargaryenFactory.prototype.getHandOfTheKing = function () {
        return new LordConnington();
    };
    return TargaryenFactory;
})();

//***********
// Abstract factory
//***********
CourtSession = (function () {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }
    CourtSession.prototype.complaintPresented = function (complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision(complaint.severity);
        } else {
            this.abstractFactory.getKing().makeDecision(complaint.severity);
        }
    };
    return CourtSession;
})();

// Examples
let courtSession1 = new CourtSession(new LanisterFactory());

courtSession1.complaintPresented({severity: 8});
courtSession1.complaintPresented({severity: 12});

let courtSession2 = new CourtSession(new TargaryenFactory());
courtSession2.complaintPresented({severity:5});
courtSession2.complaintPresented({severity:12});



