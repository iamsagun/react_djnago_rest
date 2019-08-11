from branch.api.views import BranchViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'', BranchViewSet, base_name = 'branches')
urlpatterns=router.urls



# from django.urls import path

# from .views import (
#     BranchListView,
#     BranchDetailsView,
#     BranchCreateView,
#     BranchDeleteView,
#     BranchUpdateView
# )

# urlpatterns = [
#     path('', BranchListView.as_view()),
#     path('create/', BranchCreateView.as_view()),
#     path('<pk>', BranchDetailsView.as_view()),
#     path('<pk>/update/', BranchUpdateView.as_view()),
#     path('<pk>/delete/', BranchDeleteView.as_view())


# ]