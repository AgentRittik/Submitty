if (!self.define){
    let e,a={};const i=(i,t) => (i=new URL(`${i}.js`,t).href,a[i]||new Promise((a => {
        if ('document'in self){
            const e=document.createElement('script');e.src=i,e.onload=a,document.head.appendChild(e);
        }
        else {
            e=i,importScripts(i),a();
        }
    })).then((() => {
        const e=a[i];if (!e) {
            throw new Error(`Module ${i} didn’t register its module`);
        } return e;
    })));self.define=(t,r) => {
        const s=e||('document'in self?document.currentScript.src:'')||location.href;if (a[s]) {
            return;
        } const o={};const d=e => i(e,s),l={module:{uri:s},exports:o,require:d};a[s]=Promise.all(t.map((e => l[e]||d(e)))).then((e => (r(...e),o)));
    };
}define(['./workbox-e17adef8'],((e) => {
    'use strict';self.addEventListener('message',(e => {
        e.data&&'SKIP_WAITING'===e.data.type&&self.skipWaiting();
    })),e.precacheAndRoute([{url:'app/templates/AddTerm.twig',revision:'b56b346b26aa3a2be3590cc96007e608'},{url:'app/templates/admin/admin_gradeable/AdminGradeableAddPeersForm.twig',revision:'87178b1fd337d79ba0b900916dd0efa9'},{url:'app/templates/admin/admin_gradeable/AdminGradeableAuto.twig',revision:'a9ec09b4791694bdffcbe2d23e47532c'},{url:'app/templates/admin/admin_gradeable/AdminGradeableBase.twig',revision:'d3f1810b102ca6b6dccad616a0bf7458'},{url:'app/templates/admin/admin_gradeable/AdminGradeableCreate.twig',revision:'c2d7bffca64061708ec5bf95b6ac506c'},{url:'app/templates/admin/admin_gradeable/AdminGradeableDates.twig',revision:'5d47e50166c93ca2ab9bb6889c9ae72e'},{url:'app/templates/admin/admin_gradeable/AdminGradeableEditPeersForm.twig',revision:'fcb15233cf4c1a56dd4bab5067bd651d'},{url:'app/templates/admin/admin_gradeable/AdminGradeableGraders.twig',revision:'1007b615af06cad11dccbce170c70478'},{url:'app/templates/admin/admin_gradeable/AdminGradeablePeers.twig',revision:'a1e133438a2d4104ba1096fb2735dc15'},{url:'app/templates/admin/admin_gradeable/AdminGradeableRubric.twig',revision:'96eb5e560b7cc99c2cdccb8acf4b9c4a'},{url:'app/templates/admin/admin_gradeable/rubric/CheckpointsRubric.twig',revision:'774954f710f43a69d0a32545eda9c593'},{url:'app/templates/admin/admin_gradeable/rubric/ElectronicFileRubric.twig',revision:'e8ce22bd9b0fe7f167dd43641720e67e'},{url:'app/templates/admin/admin_gradeable/rubric/NumericRubric.twig',revision:'7eed6836321ac5fa4e256bcd115f1842'},{url:'app/templates/admin/Configuration.twig',revision:'9b2fdcf7055dbb80389268856f0aafa6'},{url:'app/templates/admin/DeleteConfigPopup.twig',revision:'9dfa2df74f4d99b6a5eb0b5a8553b457'},{url:'app/templates/admin/Docker.twig',revision:'4dbde9103e83e47731b978c140961809'},{url:'app/templates/admin/EmailRoomSeating.twig',revision:'4564d050d4fea53ac79cdc191f2bf9ca'},{url:'app/templates/admin/Extensions.twig',revision:'f82f32d687f827e3ea08fc1aa07244db'},{url:'app/templates/admin/GradeOverride.twig',revision:'f93900eb113c73f7912950e29276a7b7'},{url:'app/templates/admin/late_days_forensics/LateDaysForensicsBase.twig',revision:'93f71e6bb2747e8547d5fcaf3e27728e'},{url:'app/templates/admin/late_days_forensics/LateDaysForensicsTablePlugin.twig',revision:'0b3a82b8df0b5e2f33c9ebaa46bc19d2'},{url:'app/templates/admin/LateDays.twig',revision:'7a201f2a94e9f967724e86584619a12c'},{url:'app/templates/admin/NotebookBuilder.twig',revision:'611b70f534336fcfde7b456a4eae7d92'},{url:'app/templates/admin/RainbowCustomization.twig',revision:'a41a55146faaee1907e3ffeeb12c67f7'},{url:'app/templates/admin/RenameConfigPopup.twig',revision:'d03071f0bc6bbbb71ff9aae6b2955adb'},{url:'app/templates/admin/Report.twig',revision:'b2608b626618ec15d9aa1fd6a8cb151d'},{url:'app/templates/admin/SqlToolbox.twig',revision:'38707f6e9c5d89aeefcf348a194483bf'},{url:'app/templates/admin/SystemUpdate.twig',revision:'39aed7548a8e30ae9f7af8c7cb924445'},{url:'app/templates/admin/UploadConfigForm.twig',revision:'ee61d14ac5f3977d690dcd3b320b2768'},{url:'app/templates/admin/UploadWrapperForm.twig',revision:'5722be9c290a5575308628fb3d88fe1e'},{url:'app/templates/admin/users/ClassListForm.twig',revision:'78d974fea6f3c9bdb95f31872642cfcf'},{url:'app/templates/admin/users/DeleteUserForm.twig',revision:'cbf3fbb341abab97e24daa0b8aa965e7'},{url:'app/templates/admin/users/DemoteGraderForm.twig',revision:'37053d8bbdbbc962c907322d398d94e4'},{url:'app/templates/admin/users/DownloadForm.twig',revision:'2dd1f68e1700f82596d014821348a4da'},{url:'app/templates/admin/users/GraderList.twig',revision:'e6e18a95deb95608b71ab8473aa00252'},{url:'app/templates/admin/users/GraderListForm.twig',revision:'670488845d87a40e86c6700c13b7df31'},{url:'app/templates/admin/users/MoreExtensions.twig',revision:'cd403967b705a54e14f565ef39eb6693'},{url:'app/templates/admin/users/RegistrationSectionsForm.twig',revision:'0850713bd39995623bc01151097484d0'},{url:'app/templates/admin/users/RotatingSectionsForm.twig',revision:'65dbe2831275c48b212ae3e895663367'},{url:'app/templates/admin/users/StudentActivityDashboard.twig',revision:'95683f7cb0b26168223e82c9c73d7adf'},{url:'app/templates/admin/users/StudentList.twig',revision:'272a816ec7cf00d737c2faf4f291f872'},{url:'app/templates/admin/users/UserForm.twig',revision:'529a0d06fc7d67d5e592586882aa46f1'},{url:'app/templates/Authentication.twig',revision:'c56920efc9c284dfd9ff3b40e1e5f652'},{url:'app/templates/AuthTokens.twig',revision:'165491fd663201fc32f4ad2d5f1f85a0'},{url:'app/templates/autograding/ActionView.twig',revision:'592df7d51467706025707d3d65a436a6'},{url:'app/templates/autograding/Attachments.twig',revision:'ae1a8bde5bca1a2619b6c5b8ced2ecae'},{url:'app/templates/autograding/AutoChecks.twig',revision:'4b7ac5af0054d3bb0363bec8d732ae57'},{url:'app/templates/autograding/AutoResults.twig',revision:'e5ea0d3cc4882adbe24261147a3ddd04'},{url:'app/templates/autograding/PeerResults.twig',revision:'9ce0ea5c8e0ac4fb399b8a3a7139032c'},{url:'app/templates/autograding/TAResults.twig',revision:'2e0072de7496c0ce81573ccbb0467093'},{url:'app/templates/AutogradingStatus.twig',revision:'da815ec262b6244c4926637e130343c1'},{url:'app/templates/calendar/Calendar.twig',revision:'5b3418a90e82039585337a87ef7d3251'},{url:'app/templates/ChangePasswordForm.twig',revision:'582f54da347d1078399563dd3acdb8e9'},{url:'app/templates/course/CourseMaterials.twig',revision:'02ae4c665459ecc2a6ce58eb0d9f3430'},{url:'app/templates/course/DeleteCourseMaterialForm.twig',revision:'76d1559e80879d056d72eaa79ecdbcc8'},{url:'app/templates/course/EditCourseMaterialsFolderForm.twig',revision:'84a74d34905c19d877ae8c80edeab211'},{url:'app/templates/course/EditCourseMaterialsForm.twig',revision:'e8acc4ef19ffacae8d44d21ed7b40476'},{url:'app/templates/course/SetAllReleaseForm.twig',revision:'02149fe91c302be409e865bc88f00674'},{url:'app/templates/course/SetFolderReleaseForm.twig',revision:'7941f266a6d2fb6f39726393b4ff77e5'},{url:'app/templates/course/UploadCourseMaterialsForm.twig',revision:'0b9061fcb1b436fb8e96ec49016b9ba4'},{url:'app/templates/CreateCourseForm.twig',revision:'27ffa953c504369dd747c471af65e241'},{url:'app/templates/CreateVcsAuthTokenForm.twig',revision:'e31a2f6450d17b515f11c1fb6815bd1d'},{url:'app/templates/EditNameForm.twig',revision:'c3ff407e14c6a56ae9971170e47334a2'},{url:'app/templates/EditProfilePhotoForm.twig',revision:'323dd0170fddb7bee7eaaaa6065736a3'},{url:'app/templates/EditSecondaryEmailForm.twig',revision:'19cdf351bded7da0932e908c8a3d3ba5'},{url:'app/templates/EmailStatus.twig',revision:'b5c0bb9076c91c84898824b6f10fcfdc'},{url:'app/templates/EmailStatusPage.twig',revision:'290e691061aec866a81e85781e9d8b40'},{url:'app/templates/error/CourseErrorPage.twig',revision:'2f6de8409764018ab38e7ba7bd1c3be1'},{url:'app/templates/error/ErrorPage.twig',revision:'e513bbd6fae0ae9c68cf90b50e5a9982'},{url:'app/templates/error/ExceptionPage.twig',revision:'c5ec22404fc02d2fb2a3b24aaf56d33c'},{url:'app/templates/error/GenericError.twig',revision:'e62c80ceb355ac12e6bd1aca5160a3d9'},{url:'app/templates/error/InvalidGradeable.twig',revision:'0925e041a0bc25c289de7b117a7dc773'},{url:'app/templates/error/NoAccessCourse.twig',revision:'89b62858e33a7f3f27fac8b3af1f663b'},{url:'app/templates/error/UnbuiltGradeable.twig',revision:'411497e8b25b0cf098898f8ea2594c8e'},{url:'app/templates/forum/CategoriesForm.twig',revision:'d8797bc6d122e890cabb5e4e565cde9e'},{url:'app/templates/forum/CreatePost.twig',revision:'6f48b3bff79f6ee8741947d42e6f05c7'},{url:'app/templates/forum/createThread.twig',revision:'fd58956173905af91e5e4cce5192c67f'},{url:'app/templates/forum/displayThreadList.twig',revision:'0e8d7d81f880dc4cb5843360d36f73cb'},{url:'app/templates/forum/EditPostForm.twig',revision:'afaf6f77502002b67cbc47b1c70da021'},{url:'app/templates/forum/ForumBar.twig',revision:'2e08ccf3cc45d63c1381d48e979a95db'},{url:'app/templates/forum/GeneratePostList.twig',revision:'e05dcdb3d0d2a705e8109ab0c25855fd'},{url:'app/templates/forum/HistoryForm.twig',revision:'2cc5e89de96b71fea1f3314e15b7640c'},{url:'app/templates/forum/MergeThreadsForm.twig',revision:'5dbce5a2cd0a0f1481098670afcaaf1d'},{url:'app/templates/forum/RenderPost.twig',revision:'3ff1b6df79abd20860c97ebfcfa5ddc4'},{url:'app/templates/forum/searchResults.twig',revision:'7db75f82cb63927d1814e6360e3dae32'},{url:'app/templates/forum/ShowCategories.twig',revision:'6db1e1bbf7f7543a6c8be7b64091626b'},{url:'app/templates/forum/ShowForumThreads.twig',revision:'0ef5c33d322f2cfd95ef2acc0b3b1193'},{url:'app/templates/forum/showFullThreadsPage.twig',revision:'70e22a643d5e515968c0fb70936865a2'},{url:'app/templates/forum/SplitPostForm.twig',revision:'0163e39524b09adeed43424f23d811b5'},{url:'app/templates/forum/StatPage.twig',revision:'5656774a035b9f3db2ad56ed1d10a99d'},{url:'app/templates/forum/ThreadPostForm.twig',revision:'d27baca84f83bc3621bb24d031b8ec7c'},{url:'app/templates/functions/AutogradingActions.twig',revision:'f7cee8a08c597ff37f0b51731a3e116d'},{url:'app/templates/functions/Badge.twig',revision:'4baedb20590404d2be6c0eb28d44a682'},{url:'app/templates/functions/TAResultsFunctions.twig',revision:'8f05c33aed09e8890bb2bffcf4928c7f'},{url:'app/templates/generic/Banner.twig',revision:'568076bef6667274e1dc5f3efc6f3513'},{url:'app/templates/generic/Popup.twig',revision:'881b1edbbb51b9a950ee7487ceed015c'},{url:'app/templates/GlobalFooter.twig',revision:'f54af8cbbe5b685eae042fe9dca14d07'},{url:'app/templates/GlobalHeader.twig',revision:'7b6dc031ff20ef77dfcf029e0cd06b76'},{url:'app/templates/grading/AdminTeamForm.twig',revision:'ac6abdf849cf03d8c3772caee09dc3d5'},{url:'app/templates/grading/electronic/AutogradingPanel.twig',revision:'91c540d26ab16a25dadd134e6bd1311a'},{url:'app/templates/grading/electronic/Details.twig',revision:'ad395e451fbfb9ceee3ace2525e8b5b4'},{url:'app/templates/grading/electronic/DiscussionForumPanel.twig',revision:'b90697aea8956182c98f61ac19251745'},{url:'app/templates/grading/electronic/EditPeerComponentsForm.twig',revision:'4e5325b93b73d0c1536d478729d73dba'},{url:'app/templates/grading/electronic/ErrorMessage.twig',revision:'0fde6a02faa019f72ba5c30b32f85268'},{url:'app/templates/grading/electronic/FileView.twig',revision:'ac929fa172efaf3c61442b53512ad42e'},{url:'app/templates/grading/electronic/GradeableMessage.twig',revision:'f0f6294816a784364a0007d3e5dd46da'},{url:'app/templates/grading/electronic/GradingPanelHeader.twig',revision:'38368b61197bc344e758de75707b6bd5'},{url:'app/templates/grading/electronic/InformationMessage.twig',revision:'6b7a1efe15f1dcaf90d8753f2f6977e4'},{url:'app/templates/grading/electronic/MarkConflictPopup.twig',revision:'5bca7cdf611b11bca1dd4ac85ca260ea'},{url:'app/templates/grading/electronic/NavigationBar.twig',revision:'d2cb935ae70ec1a1179a38301ab072c9'},{url:'app/templates/grading/electronic/NotebookPanel.twig',revision:'d56fa765f924c8cf29a2a794b435fc7f'},{url:'app/templates/grading/electronic/PanelSelectorModal.twig',revision:'1f3a91381f834212dba20c4bd46422c5'},{url:'app/templates/grading/electronic/PDFAnnotationBar.twig',revision:'5ffe2a094d1df73ffb4a87442bd2e7d0'},{url:'app/templates/grading/electronic/PDFAnnotationEmbedded.twig',revision:'94d0983ddc3385a02d6793d9be3f2449'},{url:'app/templates/grading/electronic/PeerPanel.twig',revision:'327699318a6e53d089cda35e16db9f7c'},{url:'app/templates/grading/electronic/PeerResultsPanel.twig',revision:'51908f70c5d50f582aa4c8ad1347f597'},{url:'app/templates/grading/electronic/RandomizeButtonWarning.twig',revision:'61b8fc1f9dc45b9cbcbbfc551537b938'},{url:'app/templates/grading/electronic/ReceivedMarkForm.twig',revision:'f52f281c5d9b9d3ac5d594a4f376a503'},{url:'app/templates/grading/electronic/RegradePanel.twig',revision:'0884a8af7478a88962515a5148c8acca'},{url:'app/templates/grading/electronic/RubricPanel.twig',revision:'098a68c2974c4d7d68a0c329fd38a4b5'},{url:'app/templates/grading/electronic/SolutionTaNotesPanel.twig',revision:'386a61a3d5eb8987024b62aafc2a9232'},{url:'app/templates/grading/electronic/StudentInformationPanel.twig',revision:'e033658f0f86b6d52a442671d9c3daf8'},{url:'app/templates/grading/electronic/SubmissionPanel.twig',revision:'925a3e36e6ced6978f382fe959edf3f4'},{url:'app/templates/grading/electronic/ta_status/StatusAutogradingHistogram.twig',revision:'756055d367b1ed3b056c857618ee1616'},{url:'app/templates/grading/electronic/ta_status/StatusBase.twig',revision:'b1cb5c2a412bb4a64472ee69ea24f244'},{url:'app/templates/grading/electronic/ta_status/StatusComponentAverages.twig',revision:'68d23ab178a85efbf4233667e479e802'},{url:'app/templates/grading/electronic/ta_status/StatusData.twig',revision:'b4fc03360aeffad430783767f9564775'},{url:'app/templates/grading/electronic/ta_status/StatusOverallHistogram.twig',revision:'6d9a4ed02e5e9149003c9e439b3422cb'},{url:'app/templates/grading/Images.twig',revision:'c5d36a493ac1f75a9f15316ccbaf4612'},{url:'app/templates/grading/ImportTeamForm.twig',revision:'7d798e5b186d9d009e2b1c4604b966f3'},{url:'app/templates/grading/SettingsForm.twig',revision:'86e813d2c6efcf6b61c4f8e759d3b649'},{url:'app/templates/grading/simple/Display.twig',revision:'73ca976576dbf66b7f4517e1bc682631'},{url:'app/templates/grading/simple/PrintLab.twig',revision:'7359f942b3ad155376fc9ab38e967639'},{url:'app/templates/grading/simple/StatisticsForm.twig',revision:'aacecb7be209aa2d2a0c3cf7b8625eaa'},{url:'app/templates/grading/simple/StudentSearch.twig',revision:'69971f8fc3e385561dab78a060a09b0e'},{url:'app/templates/grading/UploadImagesForm.twig',revision:'f4dd8c038c06aa7a4b084a302a3c6c4b'},{url:'app/templates/grading/VersionChoice.twig',revision:'05aed50c7da02058093b361eb0c4403b'},{url:'app/templates/HomePage.twig',revision:'a0ae077f8531f21c52cbd8ec5fe7b9b3'},{url:'app/templates/LateDaysTable.twig',revision:'0319e57ba254188031670ba76b5c4580'},{url:'app/templates/LateDaysTablePlugin.twig',revision:'a61d227ac25735664949288ffcd6cf10'},{url:'app/templates/misc/AccessibilityMessage.twig',revision:'ac58e8019f27f6e5075207605723a039'},{url:'app/templates/misc/Code.twig',revision:'9f55f5a93d34028f26f2f38fc5d1c23d'},{url:'app/templates/misc/File.twig',revision:'b554267caa9dff66f41ccb1bc28a6ad6'},{url:'app/templates/misc/Markdown.twig',revision:'1e7f18602dd1e8aeee632688cb4b72bf'},{url:'app/templates/misc/MarkdownArea.twig',revision:'2464653b36b56eac9bb2564fc232269d'},{url:'app/templates/misc/SourceSettings.twig',revision:'4d5d4e3570afdb3999aa0b13fec67310'},{url:'app/templates/misc/TooLarge.twig',revision:'4653b7765acb98a011bb889ea1952663'},{url:'app/templates/Navigation.twig',revision:'e0fd27182dd1f2b7b44e240b1983ce33'},{url:'app/templates/navigation/CloseSubmissionsWarning.twig',revision:'b69404ff8bbd518fb9add90662a71c01'},{url:'app/templates/navigation/DeleteGradeableForm.twig',revision:'5f57253e455e87ddf11e53ed722936a5'},{url:'app/templates/navigation/RoomSeating.twig',revision:'532847bce3d8e24344f8fdaaa519de71'},{url:'app/templates/notebook/Notebook.twig',revision:'3207ee23036a1d1ad7f190d61bbfe7e2'},{url:'app/templates/Notifications.twig',revision:'ea08108e4a3f66a4f3f0fee9d58e43f2'},{url:'app/templates/NotificationSettings.twig',revision:'e3dcd03d3cbf9f829714e855cf1aa539'},{url:'app/templates/officeHoursQueue/AnnouncementMsg.twig',revision:'9780bc1b01216c1a52c2dcf43a98a589'},{url:'app/templates/officeHoursQueue/CurrentQueue.twig',revision:'774f62ad967b9fe9ada739191ca70b5c'},{url:'app/templates/officeHoursQueue/NewQueue.twig',revision:'282691af88250544b4d2a55663982a9f'},{url:'app/templates/officeHoursQueue/QueueAnnouncement.twig',revision:'c94a2bf0843d17430ed238b0cc8de536'},{url:'app/templates/officeHoursQueue/QueueButtonBar.twig',revision:'331e36cf81b1e230097c42e9f866cbec'},{url:'app/templates/officeHoursQueue/QueueFilter.twig',revision:'d818a93ef4c7f5f3df4006d2a6e37429'},{url:'app/templates/officeHoursQueue/QueueFooter.twig',revision:'bc0cd1c740fcf9820b47cfb0f0a4d9eb'},{url:'app/templates/officeHoursQueue/QueueHeader.twig',revision:'20c5b84779b9f3f83f1c97afdfb745a1'},{url:'app/templates/officeHoursQueue/QueueHistory.twig',revision:'c23e136cfe9effce194bbcf165fafa62'},{url:'app/templates/officeHoursQueue/QueueSocketMessage.twig',revision:'b7e4e5b18d90471286751018fed9fbc9'},{url:'app/templates/officeHoursQueue/QueueStats.twig',revision:'5a429db64d896d697c0895e5a9dbd74f'},{url:'app/templates/officeHoursQueue/QueueStatsStudents.twig',revision:'9505f5dca1bc863db153788bf8f1873a'},{url:'app/templates/officeHoursQueue/QueueStatus.twig',revision:'468e93dfbe21c619c9b4617fdffe464f'},{url:'app/templates/plagiarism/DeletePlagiarismResultsAndConfig.twig',revision:'0acc1210f9c397209adf91d20042763d'},{url:'app/templates/plagiarism/Plagiarism.twig',revision:'0c579b705dd276ca581642e51848bc28'},{url:'app/templates/plagiarism/PlagiarismConfigurationForm.twig',revision:'a7c5a3feb6926f94a5f824dcbf02f0a1'},{url:'app/templates/plagiarism/PlagiarismHighlightingKey.twig',revision:'f0666bc35115371a995899bcf32394a8'},{url:'app/templates/plagiarism/PlagiarismResult.twig',revision:'c985cdb1d541960c87c237c0609d9bd7'},{url:'app/templates/plagiarism/ShowPlagiarismMatches.twig',revision:'5f1770232087551e1595b8efa27729d9'},{url:'app/templates/polls/AllPollsPageInstructor.twig',revision:'f55db635118c5dfed70a35af0bc0f574'},{url:'app/templates/polls/AllPollsPageStudent.twig',revision:'af2f8197cfbdc3ea867fcb98a483d575'},{url:'app/templates/polls/NewPollPage.twig',revision:'05bd25f423569dafa6c0dedd002c7a67'},{url:'app/templates/polls/PollPageStudent.twig',revision:'d0b1bbc1673669af3ca65ad6f0a556be'},{url:'app/templates/polls/PollType.twig',revision:'38c157a47a5a3159bd4e78f4410d8041'},{url:'app/templates/polls/ViewPollPage.twig',revision:'d7d021029ac7e869c290b95674815a16'},{url:'app/templates/submission/EditTeamName.twig',revision:'c1c1200f948be6f5e0ba80e125530a11'},{url:'app/templates/submission/homework/AutogradingResultsBox.twig',revision:'1223cb72d6168e4c632a6e063186e081'},{url:'app/templates/submission/homework/BulkUploadBox.twig',revision:'113472ba72d91ef96e121d5d7bacb86d'},{url:'app/templates/submission/homework/BulkUploadProgressBox.twig',revision:'7b575a1356b99ea8d41c50f8b4763aa0'},{url:'app/templates/submission/homework/CurrentVersionBox.twig',revision:'23c5d61dbf31e0e8748347808b4c9efc'},{url:'app/templates/submission/homework/CurrentVersionResults.twig',revision:'717f21188f7e6f6050a2fa8b8aae0ee4'},{url:'app/templates/submission/homework/LateDayMessage.twig',revision:'f723cda320855ceb5a58f29403b8dc74'},{url:'app/templates/submission/homework/leaderboard/Leaderboard.twig',revision:'2199f0b85bef66f0529907f5be24d638'},{url:'app/templates/submission/homework/leaderboard/LeaderboardTable.twig',revision:'4703f2177e1f424ddf7cbf01bf5d5b0c'},{url:'app/templates/submission/homework/LeaderboardBox.twig',revision:'3569f0d9b94adde7e1bf285c02ebcfd3'},{url:'app/templates/submission/homework/LoadMessagePage.twig',revision:'3930160ee25b6d4eb3f32bfbef4a6adc'},{url:'app/templates/submission/homework/NoSubmissionBox.twig',revision:'e104c94f3516f08117ae820d291c801a'},{url:'app/templates/submission/homework/PeerResultsBox.twig',revision:'b87229efce01ba7cd43bf653dac83769'},{url:'app/templates/submission/homework/PreviousSubmissionForm.twig',revision:'af335a8d45f2667fb23bac59c8a56627'},{url:'app/templates/submission/homework/RegradeBox.twig',revision:'9d49279f84af7171f3d272add1735a0f'},{url:'app/templates/submission/homework/SubmissionsClosedBox.twig',revision:'18ebaaf46c5fc6a5807500938a204408'},{url:'app/templates/submission/homework/SubmitBox.twig',revision:'f9a276265c3036beba205f66d95e543d'},{url:'app/templates/submission/homework/SubmitNotAllowedBox.twig',revision:'7a32b75a28ee96eff348b360c500071d'},{url:'app/templates/submission/homework/TAResultsBox.twig',revision:'4fa45cc48a21f7af187f2b53109f6a56'},{url:'app/templates/submission/homework/TotalScoreBox.twig',revision:'5b2efa3a22abc4e40042b73d4c4a6aed'},{url:'app/templates/submission/RainbowGrades.twig',revision:'aa8932f57c66a69ebfb45356a5a32e70'},{url:'app/templates/submission/regrade/ComponentTabs.twig',revision:'e17104bcb061425b9b8428e2f9f34244'},{url:'app/templates/submission/regrade/Discussion.twig',revision:'48d692c2fa447d7afb00af3b45d21680'},{url:'app/templates/submission/regrade/Post.twig',revision:'b9e2984d61cbb49688135743a88119b9'},{url:'app/templates/submission/Team.twig',revision:'853e7b03b81665df718b9d40b04e029e'},{url:'app/templates/superuser/Email.twig',revision:'ef3db05c04df4d5473e595713f4436e2'},{url:'app/templates/superuser/Gradeables.twig',revision:'86e04e0146f415dc83cfe42ff5ddb181'},{url:'app/templates/UserProfile.twig',revision:'f2a33630238f10db6e5ad09291360609'},{url:'public/templates/grading/Attachments.twig',revision:'cd4773ab9a56480cdcffbb7f4614cb0f'},{url:'public/templates/grading/Component.twig',revision:'1be5044e955490136419ae4e2619cbf5'},{url:'public/templates/grading/ConflictMarks.twig',revision:'d7519f316f1f6b6df9dd56f581639fcf'},{url:'public/templates/grading/EditComponent.twig',revision:'1a9b85daf659e018541ed857866cadef'},{url:'public/templates/grading/EditComponentHeader.twig',revision:'f9f02bfd8698988098800090c5b25660'},{url:'public/templates/grading/EditGradeable.twig',revision:'095365e6a767265e4a324231a8c6bc32'},{url:'public/templates/grading/Functions.twig',revision:'f4c3ae3c344443042a37c0b8db6d47c9'},{url:'public/templates/grading/Gradeable.twig',revision:'81bc45ddc04e906da022a499cf849690'},{url:'public/templates/grading/GradingComponent.twig',revision:'becda44e59e1cd9ebe44e923bfb0f240'},{url:'public/templates/grading/GradingComponentHeader.twig',revision:'2b766f5c364e5a720fd9922a04d3b00a'},{url:'public/templates/grading/GradingGradeable.twig',revision:'cc68e950334eb1a3c0b1bc89c554d0d9'},{url:'public/templates/grading/Mark.twig',revision:'e795658bc5ea39af5ebb9cfc33f94aa9'},{url:'public/templates/grading/OverallComment.twig',revision:'d562050a927331daec446f5fefc1e612'},{url:'public/templates/grading/PeerComponent.twig',revision:'78c737592916602ae47550785b1932e9'},{url:'public/templates/grading/PeerComponentHeader.twig',revision:'05c1a572b029a970f19e2dfb20b2ad15'},{url:'public/templates/grading/PeerGradeable.twig',revision:'5ed8295974aee721b303781a383e4a50'},{url:'public/templates/grading/RubricTotalBox.twig',revision:'cd291073a03d7c75e14a3b18c423b034'},{url:'public/templates/grading/SavingTools.twig',revision:'fe8236dbc0afbce98901958cd060451f'},{url:'public/templates/grading/settings/GeneralSettingList.twig',revision:'2e902d3bf9a55b46215052396375fd66'},{url:'public/templates/grading/settings/HotkeyList.twig',revision:'e8f8678591bfcdaf37f513510b5389d6'},{url:'public/templates/grading/TotalPeerScoreBox.twig',revision:'42037ca9e9b744fa0f9b4efbd03bf032'},{url:'public/templates/grading/TotalScoreBox.twig',revision:'6deea9eb2c5c005a7b9181a949a9e31d'},{url:'public/templates/misc/AccessibilityMessage.twig',revision:'ac58e8019f27f6e5075207605723a039'},{url:'public/templates/misc/MarkdownArea.twig',revision:'958813b84864b73aa77d158e1fa7eb34'},{url:'room_templates/Amos_Eaton/214.twig',revision:'a24047832fce1d4fa3b531a6b28c82f6'},{url:'room_templates/Amos_Eaton/215.twig',revision:'97b2cfe6dada9b0f0c718146587ea89a'},{url:'room_templates/Amos_Eaton/216.twig',revision:'3f82cac01f17ae6a35d9799155a3c876'},{url:'room_templates/Darrin/308.twig',revision:'aed7f87953216ea8af0d700721e6c3b5'},{url:'room_templates/Darrin/318.twig',revision:'6feb1cfbcbf4f3fe6743012b248d828c'},{url:'room_templates/Darrin/324.twig',revision:'67dce7fbb0f47471566860b0aecf3c62'},{url:'room_templates/Darrin/330.twig',revision:'3317a22b75e7b14dc95a086b63129168'},{url:'room_templates/Darrin/337.twig',revision:'7a312c5d00d644e1fe4cb3084b2bdb50'},{url:'room_templates/Low/4050.twig',revision:'4d18582f66ec1b3c607877e54b4b18d4'},{url:'room_templates/Ricketts/203.twig',revision:'e42584067ad2166f692650e8b60147ba'},{url:'room_templates/Sage/3101.twig',revision:'0960127035b9ef4bb1d6189da4ed594d'},{url:'room_templates/Sage/3303.twig',revision:'4df19ce7af6579c6e831122bdf975b67'},{url:'room_templates/Sage/3510.twig',revision:'c8e68c485d29a5ff9383e93b3b6f96e7'},{url:'room_templates/Sage/5101.twig',revision:'076645eccb499983b1ff66efe7af4f36'},{url:'room_templates/Sage/5510.twig',revision:'275c3322c644f920494eb363cfed73e0'},{url:'room_templates/West_Hall/Auditorium.twig',revision:'d3db81df13be6d57731a34cec272247b'},{url:'tests/report/jest/lcov-report/index.html',revision:'19d745bf6a798e2946eceaa15622ca16'},{url:'tests/report/jest/lcov-report/ts/activity-dashboard.js.html',revision:'d094588055e4f0e0130140017ad747da'},{url:'tests/report/jest/lcov-report/ts/grade-report.js.html',revision:'70a45fc7eb51b49f97e8448a110f8b57'},{url:'tests/report/jest/lcov-report/ts/index.html',revision:'7a256356ea2d37f568a6dd9e1dc332a3'},{url:'tests/report/jest/lcov-report/ts/instructor-submission.ts.html',revision:'44ae938c8ec213ed3a7d9047b6117616'},{url:'tests/report/jest/lcov-report/ts/sql-toolbox.js.html',revision:'ff004c8731b481601051ea4769aa9c35'},{url:'tests/report/jest/lcov-report/ts/team.js.html',revision:'d330de7b7e711698591ad6c44d2474c0'},{url:'tests/report/jest/lcov-report/ts/utils/index.html',revision:'91153bf5290fbb80d36770ff95d870df'},{url:'tests/report/jest/lcov-report/ts/utils/server.ts.html',revision:'420be0fb2ec5a548a10a0f9c14e9f4c0'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForBankAccount/BankAccount.php.html',revision:'1214fe5ac64da08918ec60642ae2ed9b'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForBankAccount/dashboard.html',revision:'a7477cfc31d69cfd25e52fcbae165715'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForBankAccount/index.html',revision:'f704de643d4410bc988bd2f1d1e90f84'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForClassWithAnonymousFunction/dashboard.html',revision:'4e734a6b307312bd4db34e70f9326073'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForClassWithAnonymousFunction/index.html',revision:'785bef045116b6b3f9be0e7f686dc36f'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForClassWithAnonymousFunction/source_with_class_and_anonymous_function.php.html',revision:'a41adf0f1ca7f230e17f4588b8d4badb'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForFileWithIgnoredLines/dashboard.html',revision:'e5d13dc81f6e8b4041ae0a835d99bf1b'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForFileWithIgnoredLines/index.html',revision:'4307afbb5c9ea0e35554b3f6aca9caf8'},{url:'vendor/phpunit/php-code-coverage/tests/_files/Report/HTML/CoverageForFileWithIgnoredLines/source_with_ignore.php.html',revision:'12679c9727a5611f05ad3452a9068867'}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]});
}));
//# sourceMappingURL=sw.js.map