import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
/** @type {{root: React.CSSProperties}} */
const styles = {
  root: {
    height: '100vh', width: '100%', top: "0", background: "#212121",fontSize:"12px",padding:"8px",overflow:"scroll",
  }
}
export const Header: FC<{ Name: string }> = ({ Name }): JSX.Element => {
  const [click, setClick] = useState(false);
  return (
    <div className="header">
      <header>
        <Link to="/" style={{flex:1, textAlign: "center"}}>
          <strong style={{ color: "white" }} ><span aria-label="Cool" role="img">😎</span> {Name} <span aria-label="cute" role="img">😍</span></strong>
        </Link>
        <div className="flex">
        <Link to="/genmeme">
          <button style={{ background: "lightblue", color: "black" }}>Upload</button>
        </Link>
        <button style={{ background: "transparent", color: "white" }} onClick={() => setClick(!click)}>Notice</button>
        </div>
        
        {click && <div style={styles.root} className="fixed">
          <div style={{ textAlign: "right", padding: "10px 20px 20px 10px" }} onClick={() => setClick(!click)}>X</div>
          <div style={styles.root}>

            <h3>GIPHY User Terms of Service</h3>
            
           <p> Welcome to Giphy! These Terms of Service agreement (together with Giphy’s Privacy Policy (www.giphy.com/privacy), DMCA Copyright Policy (www.giphy.com/dmca), the Giphy API Terms (if applicable) and Community Guidelines (www.giphy.com/community-guidelines), the “Terms”) govern your access and use of www.giphy.com (the “Site”) and all other products, services, features, content or applications that link to these Terms (together with the Site, the “Services”) offered by Giphy, Inc. (“Giphy”, “we”, “us” or “our”).
            
            Please read these Terms fully and carefully before using the Services, because these Terms form a legally binding contract between you and Giphy for your use of the Services. As described in Section 12, you agree that unless you opt out, all disputes between you and Giphy will be resolved by individual arbitration, and you waive your right to trial by jury, or to participate in a class action lawsuit or class-wide arbitration.
            
            By using the Services, you agree to be bound by these Terms. From time to time, we may modify or update these Terms, effective upon posting through the Services. If you use the Services after any such change, you accept these Terms as modified.
            
            In other words: By using anything offered by Giphy, you automatically agree to this legal agreement. You also accept any updated version of this agreement by continuing to use the Services.</p>
            
            1. Eligibility.
            
            <p>The Services are not directed towards, nor intended for use by, anyone under the age of 13. By using the Services, you represent and warrant that you are at least 13 years of age. If you are under 13, you may not, under any circumstances or for any reason, use the Services. Notwithstanding the foregoing, if you are a resident of the European Union, United Kingdom, Lichtenstein, Norway, or Iceland, you must be at least 16 years of age to use the Services. You are solely responsible for ensuring that these Terms comply with all applicable laws, and your right to use the Services is revoked wherever these Terms or your use of the Services conflicts with any laws.
            
            In other words: You MUST be at least 13 years old to use the Services (or at least 16 years old if you are a resident of certain European countries as described above). Do not use the Services if it would mean breaking the law.</p>
            
            2. Your Account.
            
           <p>
           You may need to sign up for an account on Giphy in order to use parts of the Services. You must provide accurate and up to date information for your account. You promise not to (i) intentionally impersonate another person by using their name or email address, (ii) use an offensive name or email address, or (iii) use a name or email address for which you do not have proper authorization. We reserve the right to require that you change your username or use another email address. You are prohibited from using another person’s account or registration information for the Services without their permission. You are responsible for all activity that occurs on your account, and for keeping your password secure. You promise to immediately let us know if there is any unauthorized use of your account. You can delete your account at any time, either directly or through a request to us.
            
            In other words: If you sign up for an account on the Services, you are responsible for all activity on your account. Be mindful about protecting your account password and let us know immediately if you think there are any issues.
           </p> 
            3. Content You Contribute.
            
            <p>
            You are solely responsible for all of content you contribute to the Services (“User Content”) and as between you and Giphy, you own your User Content. You hereby do and shall grant us a non-exclusive, worldwide, perpetual, royalty-free, fully paid, transferable, sublicensable right to use, modify, reproduce, distribute, prepare derivative works of, display, perform and otherwise fully exploit such User Content (including all related intellectual property rights) in connection with the Services and our business. You promise that you have all rights to grant such license to us without infringement or violation of any third party rights. If you contribute User Content through a public part of the Services, you acknowledge that such User Content will be accessible to other users. Please do not publicly post or submit any User Content that you do not want publicly accessible or viewable, or that you do not have rights to post.
            
            In other words: You own all content you contribute to the Services, but you’re ok with Giphy using it in connection with its Services. Public Information is public, so don’t include any private or sensitive information in any public part of the Services.
            
            </p>
            4. Giphy’s Proprietary Rights.
            
           <p>
           We and our licensors own and retain all proprietary rights in the Services. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services. The Services may contain copyrighted material (such as text, graphics, photographs, images, and illustrations), trademarks, and other proprietary information and materials of us and our licensors. Except for content that is in the public domain or content that you have permission to use in connection with your use of the Services and in compliance with these Terms of Service, you shall not copy, modify, publish, transmit, distribute, perform, or display any content, nor shall you sell, license, rent, or otherwise use or exploit any content for commercial use or in any way that violates any third party right. The Services are protected by U.S. and international copyright laws. We can (but do not have to) remove, block, edit or modify any content in our sole discretion at any time, without notice to you and for any reason or for no reason at all. We reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to satisfy applicable laws or protect the rights, property or safety of us, our users and the public.
            
            In other words: You’re allowed to use the Services only in accordance with this agreement. Generally speaking, you're only allowed to use content that you find on the site in connection with your use of the Services and solely for personal and non-commercial purposes. We can edit, take down, or block any content on the Services at any time.
            
           </p>
            5. Acceptable Use.
            
            <p>
            As a condition of your use of the Services, you agree to use the Services only for lawful purposes and to comply with these Terms and all applicable laws. You agree not to, and shall not allow anyone else to, submit any content or otherwise take any action that (i) infringes any patent, trademark, trade secret, copyright, right of publicity, right of privacy or other right of any other person or entity (see our DMCA Copyright Policy at www.giphy.com/dmca), (ii) is unlawful, harmful, fraudulent, deceptive, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or otherwise objectionable, (iii) impersonates any person or entity, (iv) constitutes unauthorized or unsolicited advertising, junk or bulk e-mail (“spamming”), (v) contains a virus, trojan horse, worm, time bomb, or other harmful computer code, file, or program, (vi) uses any manual or automated software, devices, or other processes to “crawl,” “scrape,” or “spider” any page of the Services, (vii) attempts to decompile, reverse engineer, or otherwise attempt to obtain the source code of the Services, (viii) take any action that imposes or may impose (as determined by us in our sole discretion) an unreasonable or disproportionately large load on our (or our third party providers’) infrastructure, (ix) interfere or attempt to interfere with the security or proper working of the Services, or (x) otherwise take any action in violation of our guidelines and policies, including our Community Guidelines at (www.giphy.com/community-guidelines).
            
            In other words: You must comply with the law and this agreement, and you promise not to take any action or submit any content that is prohibited or harmful, including violating or attempting to violate the security of the Services.
            
            </p>
            6. Links to Third Party Services.
            
            <p>
            You may be able to link to third party websites, services or resources (collectively, “Third Party Services”) on the internet, and some Third Party Services may link to the Services. We do not control Third Party Services in any way, and you acknowledge and agree that we are not responsible or liable, directly or indirectly, for the content, functions, legality or any other aspect or materials of any Third Party Services, or for any damage or loss in connection with your use of any Third Party Services. We encourage you to review the terms of service and privacy policy of any such Third Party Services.
            
            In other words: We don’t control any third party sites or services and won’t be liable for any issues that may result from your use. Please review the terms of service and privacy policy of any third party site or service.
            
            </p>
            7. Termination.
            
           <p>
           We may terminate or suspend your account or access to the Services at any time, with or without notice, which may result in the loss of all information associated with your account. You may also delete your account and/or your use of the Services at any time by following the directions through the Services. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation, ownership provisions, warranty disclaimers, indemnity, limitation of liability, and dispute procedures.
            
            In other words: We can choose to terminate or suspend your use of the Services at any time. You can also choose to delete your account or stop use of the Services at any time, but note that parts of this agreement still apply to you even after you stop using the Services.
            
           </p>
            8. Warranty Disclaimer.
            
            <p>
            You acknowledge that we have no control over, and no duty to take any action regarding: (i) what content you access via the Services; (ii) what effects the content may have on you, and how you may interpret or use the content; or (iii) what actions you may take as a result of having been exposed to the content. We make no representations concerning any content contained in or accessed through the Services, and we will not be responsible or liable for the accuracy, copyright compliance, legality or decency of material contained in or accessed through the Services. THE SERVICES AND CONTENT ARE PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. YOUR USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK.
            
            In other words: The Services are provided “as is.” You are solely responsible for how you choose to use the Services or what actions you take as a result of your use of the Services.
            
            </p>
            9. Indemnification.
            
            <p>
            You shall defend, indemnify and hold harmless us, our affiliates and each of our and their respective employees, contractors, directors, suppliers and representatives from all liabilities, claims and expenses, including reasonable attorneys’ fees, that arise from or relate to your use or misuse of, or access to, the Services, or otherwise from your violation of these Terms, or infringement by you, or any third party using your account or identity in the Services, of any intellectual property or other right of any person or entity. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with us in asserting any available defenses.
            
            In other words: We hope this never comes up, but just in case it does, you agree to reimburse us for any loss we suffer that is tied to your use or misuse of the Services, violation of this agreement, or infringement of any third party’s right.
            
            </p>
            10. Limitation of Liability.
            
           <p>
           IN NO EVENT SHALL WE, NOR OUR DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SERVICES (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, COMPENSATORY OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, SUBSTITUTE GOODS OR SERVICES (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN EXCESS OF $100.00.
            
            In other words: Our legal liability to you is limited. Please understand that we cannot run our business without it.
            
           </p>
            11. Governing Law; Time Limitation on Claims.
            
           <p>
           These Terms shall be governed by and construed in accordance with the laws of the State of New York and the United States of America, without regard to conflicts of laws provisions thereof. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of, related to or connected with the use of the Services or these Terms must be filed within one (1) year after such claim of action arose or be forever banned.
            
            In other words: NY and US laws apply to this agreement. Any legal claim relating to your use of the Services must be filed within one year after such claim arose.
            
           </p>
            12. ARBITRATION AGREEMENT AND CLASS ACTION WAIVER – IMPORTANT – PLEASE REVIEW CAREFULLY AS THIS AFFECTS YOUR LEGAL RIGHTS.
            
            <p>This Section 12 requires you to arbitrate certain disputes and claims with Giphy and limits the manner in which you can seek relief from us.
            
            a. Arbitration; Class Action Waiver.
            
            YOU AGREE THAT ALL DISPUTES BETWEEN YOU AND US OR OUR OFFICERS, DIRECTORS OR EMPLOYEES IN THEIR CAPACITY AS SUCH (WHETHER OR NOT SUCH DISPUTE INVOLVES A THIRD PARTY) WITH REGARD TO YOUR RELATIONSHIP WITH US, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THESE TERMS, YOUR USE OF THE SERVICES, AND/OR RIGHTS OF PRIVACY AND/OR PUBLICITY, WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION IN ACCORDANCE WITH THE STREAMLINED ARBITRATION RULES AND PROCEDURES OF JAMS, INC. THEN IN EFFECT, AND YOU AND WE HEREBY EXPRESSLY WAIVE TRIAL BY JURY; PROVIDED, HOWEVER, THAT TO THE EXTENT THAT YOU HAVE IN ANY MANNER VIOLATED OR THREATENED TO VIOLATE OUR INTELLECTUAL PROPERTY RIGHTS, WE MAY SEEK INJUNCTIVE OR OTHER APPROPRIATE RELIEF IN ANY STATE OR FEDERAL COURT IN THE STATE OF NEW YORK. DISCOVERY AND RIGHTS TO APPEAL IN ARBITRATION ARE GENERALLY MORE LIMITED THAN IN A LAWSUIT, AND OTHER RIGHTS THAT YOU AND WE WOULD HAVE IN COURT MAY NOT BE AVAILABLE IN ARBITRATION. AS AN ALTERNATIVE, YOU MAY BRING YOUR CLAIM IN YOUR LOCAL “SMALL CLAIMS” COURT, IF PERMITTED BY THAT SMALL CLAIMS COURT'S RULES AND IF WITHIN SUCH COURT’S JURISDICTION, UNLESS SUCH ACTION IS TRANSFERRED, REMOVED OR APPEALED TO A DIFFERENT COURT. YOU MAY BRING CLAIMS ONLY ON YOUR OWN BEHALF. NEITHER YOU NOR WE WILL PARTICIPATE IN A CLASS ACTION OR CLASS-WIDE ARBITRATION FOR ANY CLAIMS COVERED BY THIS AGREEMENT TO ARBITRATE. YOU ARE GIVING UP YOUR RIGHT TO PARTICIPATE AS A CLASS REPRESENTATIVE OR CLASS MEMBER ON ANY CLASS CLAIM YOU MAY HAVE AGAINST US INCLUDING ANY RIGHT TO CLASS ARBITRATION OR ANY CONSOLIDATION OF INDIVIDUAL ARBITRATIONS. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person’s account, if we are a party to the proceeding. This dispute resolution provision will be governed by the Federal Arbitration Act and not by any state law concerning arbitration. In the event JAMS, Inc. is unwilling or unable to set a hearing date within one hundred and sixty (160) days of filing the case, then either we or you can elect to have the arbitration administered instead by the American Arbitration Association. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. The arbitration shall be conducted in the English language. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms.
            
            b. 30 Day Opt-Out Period.
            
            If you do not wish to be bound by the arbitration and class action waiver provisions in Section 12(a), you must notify us in writing within 30 days of the date that you first accept these Terms (unless a longer period is required by applicable law). Your written notice must be mailed to us at the following address: Giphy, Inc., 416 W. 13th Street, Suite 207, New York, NY 10014. Your written notice must include: (i) your name, (ii) your email and mailing addresses, and (iii) a statement that you do not wish to resolve disputes with us through arbitration. If you do not notify us in accordance with this Section 12(b), you agree to be bound by the arbitration and class action waiver provisions of these Terms, including such provisions in any Terms revised after the date of your first acceptance. If we make any changes to the arbitration and class action waiver provisions of these Terms (other than a change to the address at which we will receive notices of dispute, opt-out notices, or rejections of future changes to the arbitration and class action waiver provisions of these Terms), you may reject any such change by sending us written notice within 30 days of the change to the address set forth in this Section 12(b). This notification affects these Terms only; if you previously entered into other arbitration agreements with us or enter into other such agreements in the future, your notification that you are opting out of the arbitration provision in these Terms shall not affect the other arbitration agreements between you and us.
            
            c. Severability.
            
            If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Section 12 will be null and void. This Section 12 will survive the termination of your relationship with us.
            
            In other words: We truly hope that we can resolve any problems with our users informally, and we imagine that most people feel the same way. If it unfortunately gets to the point where we need to engage in legal proceedings, you agree to these provisions.
            </p>
            13. Use of the Services on a Mobile Device.
            
            <p>We make available software to access the Services via a mobile device. Such software is considered part of our Services and subject to the terms and restrictions herein. Any third party code that may be incorporated in such software is covered by the applicable open source or third party end user license agreement, if any, authorizing use of such code. Some third party code may be licensed under a GPL or similar type license, and such software is not subject to the restrictions on reverse engineering set forth herein.
            
            In other words: We may use open source software in connection with our applications, and such software is subject to the terms of their applicable open source licenses.
            </p>
            14. Apple Device and Application Terms.
            
           <p>
           In the event you are accessing the Services via an application on a device provided by Apple, Inc. (“Apple”) or an application obtained through the Apple App Store, the following shall apply:
            
            a. Both you and Giphy acknowledge that these Terms are concluded between you and Giphy only, and not with Apple, and that Apple is not responsible for the Services;
            
            b. The application is licensed to you on a limited, non-exclusive, non-transferrable, non-sublicensable basis, solely to be used in connection with the Services for your private, personal, non-commercial use, subject to all the terms and conditions of these Terms as they are applicable to the Services;
            
            c. You will only use the application in connection with an Apple device that you own or control;
            
            d. You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the application;
            
            e. In the event of any failure of the application to conform to any applicable warranty, including those implied by law, you may notify Apple of such failure; upon notification, Apple’s sole warranty obligation to you will be to refund to you the purchase price, if any, of the application;
            
            f. You acknowledge and agree that Giphy, and not Apple, is responsible for addressing any claims you or any third party may have in relation to the application;
            
            g. You acknowledge and agree that, in the event of any third party claim that the Application or your possession and use of the application infringes that third party’s intellectual property rights, Giphy, and not Apple, will be responsible for the investigation, defense, settlement and discharge of any such infringement claim;
            
            h. You represent and warrant that you are not located in a country subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country, and that you are not listed on any U.S. Government list of prohibited or restricted parties;
            
            i. Both you and Giphy acknowledge and agree that, in your use of the application, you will comply with any applicable third party terms of agreement which may affect or be affected by such use; and
            
            j. Both you and Giphy acknowledge and agree that Apple and Apple’s subsidiaries are third party beneficiaries of these Terms, and that upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as the third party beneficiary hereof.
            
            In other words: These provisions apply to you if you are using the Services through an Apple device or application.
            
            15. Miscellaneous.
            
            These Terms contain the entire agreement between you and us regarding the use of the Services. If any provision of these Terms is held to be invalid, illegal or unenforceable in any respect, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable. Our failure to enforce any part of these Terms shall not constitute a waiver of our right to later enforce that or any other part of these Terms. In order for any waiver of compliance with these Terms to be binding, we must provide you with written notice of such waiver. You and we are independent contractors, and no agency, partnership, or joint venture relationship is intended or created by these Terms. The section and paragraph headings in these Terms are for convenience only and shall not affect the interpretation of these Terms. You agree that, except as otherwise expressly provided in these Terms there shall be no third party beneficiaries. We may assign, transfer or delegate any of our rights and obligations hereunder without consent.
          
           </p>

           </div>
        </div>}
      </header>
    </div>
  )

};
